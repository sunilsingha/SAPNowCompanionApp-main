import {
  containerAnimationProps,
  defaultCardVariants,
  LoadingOverlay,
} from "@abdc/messer";
import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { BackgroundWrapper } from "../../commons/components/BackgroundWrapper";
import { Button } from "../../commons/components/Button";
import { Card } from "../../commons/components/Card";
import { Header } from "../../commons/components/Header";
import { ShadowButton } from "../../commons/components/ShadowButton";

import {
  BACKGROUND_IMAGE_SRC,
  containerVariants,
  getLearningMediaKey,
  wordVariants,
} from "../../commons/utils";
import { QuestionCard, Question } from "./components/QuestionCard";
import { QuizFeedbackCard } from "./components/QuizFeedbackCard";
import { QuizProgressBar } from "./components/QuizProgressBar";
import { useCheckUser } from "../../hooks/useCheckUser";
import { useCompleteStation } from "../../hooks/useCompleteStation";

import classes from "./KnowledgeQuiz.module.css";
import { useParams } from "react-router-dom";
import { BackToMapButton } from "../../commons/components/BackToMapButton";
import { fetchUserData } from "../SocialCard/helpers/api";
import {
  clearCachedFastestFingerQuestions,
  fetchFastestFingerQuestions,
  fetchQuizResult,
  savePersonality,
  submitFastestFingerAnswer,
  updateQuizStats,
  FASTEST_FINGER_MAX_TIME_MS,
  FASTEST_FINGER_MAX_TIME_SEC,
  FASTEST_FINGER_POINTS_PER_CORRECT,
} from "./helpers/quizApi";
import { FastestFingerQuestion } from "./helpers/mapApiQuestions";
import { useQuizTimer } from "./hooks/useQuizTimer";

export interface KnowledgeQuizProps {
  className?: string;
}

type AnswerKey = "a" | "b" | "c" | "d";

type QuizPhase =
  | "intro"
  | "personality"
  | "personalityTransition"
  | "fastestFinger"
  | "finalResults";

type PersonalityResult = {
  shortDescription: string;
  description: string;
  personality: number;
};

const personalityQuestions: Question[] = [
  {
    id: "q1",
    text: "When working with a team, you are the person who",
    answers: [
      {
        id: "a",
        text: "Keeps everyone on track and makes sure all the basics are covered",
      },
      {
        id: "b",
        text: "Connects everyone's ideas and uses tools so things flow smoothly",
      },
      {
        id: "c",
        text: "Comes up with smart, clever shortcuts and ideas nobody thought of",
      },
      {
        id: "d",
        text: "Gather all the important facts from different sources and uncover insights",
      },
    ],
  },
  {
    id: "q4",
    text: "What's your favorite way to make decisions",
    answers: [
      { id: "a", text: "Follow what's proven and reliable" },
      { id: "b", text: "Mix different ideas and see what fits best" },
      { id: "c", text: "Trust your intuition and clever hacks" },
      { id: "d", text: "Look at the facts and data before choosing" },
    ],
  },
];

const answerProductMapping: Record<AnswerKey, PersonalityResult> = {
  a: {
    shortDescription: "SAP Business Suite (ERP)",
    description:
      "You're the rock-solid foundation everyone counts on. You keep things steady and running smoothly.",
    personality: 1,
  },
  b: {
    shortDescription: "SAP Business Technology Platform",
    description:
      "You love connecting dots and building new possibilities. Innovation and flexibility are your playground.",
    personality: 2,
  },
  c: {
    shortDescription: "SAP Joule",
    description:
      "Smart, futuristic, and always a step ahead — you make things happen with clever AI-powered moves.",
    personality: 3,
  },
  d: {
    shortDescription: "SAP Business Data Cloud",
    description:
      "You dig deep into data and uncover the hidden stories that help everyone make smarter choices.",
    personality: 4,
  },
};

const whichSAPProductAmI = (answers: string[]): PersonalityResult => {
  const counts: Record<AnswerKey, number> = { a: 0, b: 0, c: 0, d: 0 };

  for (const answer of answers) {
    if (Object.prototype.hasOwnProperty.call(counts, answer)) {
      counts[answer as AnswerKey]++;
    }
  }

  const maxCount = Math.max(...Object.values(counts));
  const winners = (Object.entries(counts) as [AnswerKey, number][])
    .filter(([, count]) => count === maxCount)
    .map(([letter]) => letter);

  const winningLetter: AnswerKey =
    winners.length === 1 ? winners[0] : (answers[0] as AnswerKey);

  return answerProductMapping[winningLetter];
};

const whichSAPProductAmIReverseMap = (personality: string): PersonalityResult => {
  const reverseMap: Record<string, AnswerKey> = {
    "1": "a",
    "2": "b",
    "3": "c",
    "4": "d",
  };
  return answerProductMapping[reverseMap[personality]];
};

export const KnowledgeQuiz = ({ className }: KnowledgeQuizProps) => {
  const { userid } = useParams<{ userid: string }>();
  const {
    isStationTwoDone,
    personality,
    quizScore,
    quizCompleted,
    isCheckStationStatusLoading,
  } = useCheckUser(userid);
  const { completeStation } = useCompleteStation();

  const [phase, setPhase] = useState<QuizPhase>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [checked, setChecked] = useState(false);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [userName, setUserName] = useState<string | null>(null);

  const [personalityResult, setPersonalityResult] =
    useState<PersonalityResult | null>(null);
  const [fastestFingerQuestions, setFastestFingerQuestions] = useState<
    FastestFingerQuestion[]
  >([]);
  const [ffIndex, setFfIndex] = useState(0);
  const [ffSelected, setFfSelected] = useState("");
  const [ffLocked, setFfLocked] = useState(false);
  const [displayScore, setDisplayScore] = useState<number | null>(null);
  const [runningScore, setRunningScore] = useState(0);

  const [isStartingFastestFinger, setIsStartingFastestFinger] = useState(false);
  const [personalitySaving, setPersonalitySaving] = useState(false);

  const personalitySavedRef = useRef(false);
  const ffLockedRef = useRef(false);
  const initialPhaseSetRef = useRef(false);
  const totalScoreRef = useRef(0);
  const fastestTimeRef = useRef<number | null>(null);

  const backgroundImageSrc = getLearningMediaKey(BACKGROUND_IMAGE_SRC);
  const currentQuestion = personalityQuestions[currentIndex];
  const title = "Which SAP Product am I?\n Personality Quiz".split("\n");

  const loadQuestionsForFastestFinger = useCallback(async () => {
    const questions = await fetchFastestFingerQuestions(5);
    return questions;
  }, []);

  useEffect(() => {
    if (!userid) return;
    const fetchAccess = async () => {
      const result = await fetchUserData(userid);
      const fullName = [result.firstName, result.lastName]
        .filter(Boolean)
        .join(" ")
        .trim();
      setUserName(fullName || null);
    };
    fetchAccess();
  }, [userid]);

  useEffect(() => {
    if (isCheckStationStatusLoading || initialPhaseSetRef.current) return;

    if (personality && quizCompleted) {
      initialPhaseSetRef.current = true;
      setPersonalityResult(whichSAPProductAmIReverseMap(personality));
      setDisplayScore(quizScore);
      if (quizScore == null) {
        fetchQuizResult(userid ?? "").then(({ score }) => {
          if (score != null) setDisplayScore(score);
        });
      }
      setPhase("finalResults");
      return;
    }

    if (personality && !quizCompleted) {
      initialPhaseSetRef.current = true;
      setPersonalityResult(whichSAPProductAmIReverseMap(personality));
      setPhase("personalityTransition");
      return;
    }

    if (isStationTwoDone && personality) {
      initialPhaseSetRef.current = true;
      setPersonalityResult(whichSAPProductAmIReverseMap(personality));
      setDisplayScore(quizScore);
      setPhase("finalResults");
    }
  }, [
    isCheckStationStatusLoading,
    isStationTwoDone,
    personality,
    quizScore,
    quizCompleted,
    userid,
  ]);

  useEffect(() => {
    if (selected.length > 0) {
      setChecked(true);
    }
  }, [selected, currentQuestion]);

  const finishPersonalityPhase = async (answers: string[]) => {
    const result = whichSAPProductAmI(answers);
    setPersonalityResult(result);

    if (!personalitySavedRef.current && userid) {
      setPersonalitySaving(true);
      try {
        await savePersonality(userid, result.personality);
        personalitySavedRef.current = true;
      } catch (err) {
        console.error("Failed to save personality:", err);
      } finally {
        setPersonalitySaving(false);
      }
    }

    setPhase("personalityTransition");
  };

  const onNext = () => {
    const nextAnswers = [...userAnswers, selected];
    setChecked(false);
    setUserAnswers(nextAnswers);
    setSelected("");

    if (currentIndex + 1 >= personalityQuestions.length) {
      finishPersonalityPhase(nextAnswers);
      return;
    }

    setCurrentIndex((i) => i + 1);
  };

  const finishFastestFinger = useCallback(
    async (finalScore: number, fastestTimeMs: number) => {
      setDisplayScore(finalScore);

      if (userid) {
        await updateQuizStats(userid, {
          total_points: finalScore,
          fastest_time_ms: fastestTimeMs,
          quiz_completed: 1,
        });
        await completeStation(userid, 2);
      }

      clearCachedFastestFingerQuestions();
      setPhase("finalResults");
    },
    [userid, completeStation]
  );

  const advanceFfQuestion = useCallback(
    async (answerId: string | null, responseTimeMs: number) => {
      if (ffLockedRef.current || fastestFingerQuestions.length === 0) return;
      ffLockedRef.current = true;
      setFfLocked(true);

      const question = fastestFingerQuestions[ffIndex];
      const isCorrect =
        answerId !== null && answerId === question.correctAnswerId;
      const points = isCorrect ? FASTEST_FINGER_POINTS_PER_CORRECT : 0;

      if (userid) {
        try {
          await submitFastestFingerAnswer({
            customer_id: userid,
            quiz_question_id: question.quizQuestionId,
            points,
            response_time_ms: responseTimeMs,
            is_correct: isCorrect ? 1 : 0,
          });
        } catch (err) {
          console.error("Failed to submit fastest finger answer:", err);
        }
      }

      if (
        isCorrect &&
        (fastestTimeRef.current === null ||
          responseTimeMs < fastestTimeRef.current)
      ) {
        fastestTimeRef.current = responseTimeMs;
      }

      const newTotal = totalScoreRef.current + points;
      totalScoreRef.current = newTotal;
      setRunningScore(newTotal);

      setTimeout(async () => {
        ffLockedRef.current = false;
        setFfLocked(false);
        setFfSelected("");

        if (ffIndex + 1 >= fastestFingerQuestions.length) {
          try {
            await finishFastestFinger(
              newTotal,
              fastestTimeRef.current ?? 0
            );
          } catch (err) {
            console.error("Failed to finalize fastest finger quiz:", err);
            setPhase("finalResults");
          }
        } else {
          setFfIndex((i) => i + 1);
        }
      }, 400);
    },
    [fastestFingerQuestions, ffIndex, finishFastestFinger, userid]
  );

  const handleFfTimeout = useCallback(() => {
    advanceFfQuestion(null, FASTEST_FINGER_MAX_TIME_MS);
  }, [advanceFfQuestion]);

  const { timeLeft, getResponseTimeMs } = useQuizTimer(
    FASTEST_FINGER_MAX_TIME_SEC,
    phase === "fastestFinger" && !ffLocked,
    ffIndex,
    handleFfTimeout
  );

  const onFfSelect = (id: string) => {
    if (ffLocked) return;
    setFfSelected(id);
    advanceFfQuestion(id, getResponseTimeMs());
  };

  const startFastestFinger = async () => {
    if (quizCompleted) {
      setPhase("finalResults");
      return;
    }

    setIsStartingFastestFinger(true);
    try {
      clearCachedFastestFingerQuestions();
      const questions = await loadQuestionsForFastestFinger();
      if (!questions.length) {
        console.error("No fastest finger questions were returned.");
        return;
      }
      setFastestFingerQuestions(questions);
      setFfIndex(0);
      setFfSelected("");
      setFfLocked(false);
      ffLockedRef.current = false;
      totalScoreRef.current = 0;
      fastestTimeRef.current = null;
      setRunningScore(0);
      setPhase("fastestFinger");
    } catch (err) {
      console.error("Failed to load fastest finger questions:", err);
    } finally {
      setIsStartingFastestFinger(false);
    }
  };

  const isNextDisabled = !checked;
  const divider = (
    <div style={{ borderBottom: "1px solid #ccc", margin: "8px 0" }} />
  );

  if (isCheckStationStatusLoading || personalitySaving || isStartingFastestFinger) {
    return <LoadingOverlay withBackdrop={true} size={"large"} />;
  }

  if (personalityResult && (phase === "finalResults" || quizCompleted)) {
    return (
      <BackgroundWrapper imageSrc={backgroundImageSrc}>
        <Header />
        {divider}
        <h1 className={classes.header}>
          Quiz Complete, <span>{userName}</span>!
        </h1>
        <motion.div {...containerAnimationProps} className={classes.cancelCard}>
          <QuizFeedbackCard
            personality={personalityResult.personality}
            description={personalityResult.description}
            shortDescription={personalityResult.shortDescription}
            score={displayScore}
          />
        </motion.div>
        <BackToMapButton />
      </BackgroundWrapper>
    );
  }

  if (phase === "personalityTransition" && personalityResult && !quizCompleted) {
    return (
      <BackgroundWrapper imageSrc={backgroundImageSrc}>
        <Header />
        {divider}
        <div className={classes.transitionScreen}>
          <h1 className={classes.header}>
            Great job{userName ? ", " : ""}
            {userName ? <span>{userName}</span> : null}!
          </h1>
          <motion.div
            {...containerAnimationProps}
            className={classes.transitionCard}
          >
            <div className={classes.transitionContent}>
              <p className={classes.transitionThanks}>
                Thanks for completing the Personality Quiz!
              </p>
              <p className={classes.transitionPersonality}>
                You are
                <strong>{personalityResult.shortDescription}</strong>
              </p>
              <p className={classes.transitionPersonalityDesc}>
                {personalityResult.description}
              </p>
              <p className={classes.transitionSubtext}>
                Get ready for Fastest Finger — 5 questions, 10 seconds each!
              </p>
              <div className={classes.transitionActions}>
                <ShadowButton
                  design="selected"
                  iconSrc="slim-arrow-right"
                  iconPosition="right"
                  onClick={startFastestFinger}
                >
                  Start Fastest Finger
                </ShadowButton>
              </div>
            </div>
          </motion.div>
        </div>
      </BackgroundWrapper>
    );
  }

  if (
    phase === "fastestFinger" &&
    !quizCompleted &&
    fastestFingerQuestions.length > 0
  ) {
    const ffQuestion = fastestFingerQuestions[ffIndex];
    const ffTitle = "Fastest Finger Quiz".split("\n");
    return (
      <BackgroundWrapper imageSrc={backgroundImageSrc}>
        <Header />
        {divider}
        <h1 className={classes.header}>
          {ffTitle[0]}, <span>{userName}</span>!
        </h1>
        <AnimatePresence mode="wait">
          <motion.div
            key={ffQuestion.id}
            className={classes.container}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            layout
          >
            <Card layout className={clsx(classes.panel)}>
              <QuizProgressBar
                currentIndex={ffIndex}
                items={fastestFingerQuestions.length}
              />
              <div className={classes.timer}>
                <span className={classes.timerLabel}>Time left</span>
                <span
                  className={clsx(classes.timerValue, {
                    [classes.timerUrgent]: timeLeft <= 3,
                  })}
                >
                  {timeLeft}s
                </span>
              </div>
              <QuestionCard
                correctCount={runningScore}
                question={ffQuestion}
                selected={ffSelected}
                disabled={ffLocked}
                onSelect={onFfSelect}
              />
            </Card>
          </motion.div>
        </AnimatePresence>
        <div className={classes.footer}>
          <span className={classes.scoreLabel}>
            Score: {runningScore} pts
          </span>
        </div>
      </BackgroundWrapper>
    );
  }

  return (
    <BackgroundWrapper
      imageSrc={backgroundImageSrc}
      className={clsx(className)}
    >
      <Header />
      {divider}
      <h1 className={classes.header}>
        Welcome to Personality Quiz, <span>{userName}</span>!
      </h1>
      <AnimatePresence mode="wait">
        {phase === "intro" && (
          <motion.div
            className={classes.container}
            {...containerAnimationProps}
          >
            <Card
              className={classes.panel}
              data-is-quiz="false"
              variants={defaultCardVariants}
            >
              <motion.div
                className={classes.title}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {title.map((line) => (
                  <motion.div key={line} variants={wordVariants}>
                    {line}
                  </motion.div>
                ))}
              </motion.div>
              <div className={classes.introWrap} />
              <ShadowButton
                design="selected"
                iconSrc="slim-arrow-right"
                iconPosition="right"
                onClick={() => setPhase("personality")}
              >
                Let's go
              </ShadowButton>
            </Card>
          </motion.div>
        )}
        {phase === "personality" && (
          <>
            <motion.div
              key={currentQuestion.id}
              className={classes.container}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              layout
            >
              <Card layout className={clsx(classes.panel)}>
                <QuizProgressBar
                  currentIndex={currentIndex}
                  items={personalityQuestions.length}
                />
                <QuestionCard
                  correctCount={0}
                  question={currentQuestion}
                  selected={selected}
                  onSelect={setSelected}
                />
              </Card>
            </motion.div>

            <div className={classes.footer}>
              <Button
                design="white"
                iconSrc="slim-arrow-right"
                iconPosition="right"
                disabled={isNextDisabled}
                onClick={onNext}
              >
                Next
              </Button>
            </div>
          </>
        )}
      </AnimatePresence>
    </BackgroundWrapper>
  );
};
