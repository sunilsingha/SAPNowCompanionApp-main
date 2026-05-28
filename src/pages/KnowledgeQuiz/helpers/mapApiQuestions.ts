export type FastestFingerQuestion = {
  id: string;
  quizQuestionId: number;
  text: string;
  answers: { id: string; text: string }[];
  correctAnswerId: string;
};

type ApiAnswer = {
  id?: string;
  answerId?: string;
  text?: string;
  answer?: string;
  label?: string;
  isCorrect?: boolean;
};

type ApiQuestion = {
  id?: string | number;
  ID?: number;
  questionId?: string | number;
  text?: string;
  question?: string;
  QUESTION_TEXT?: string;
  OPTION_A?: string;
  OPTION_B?: string;
  OPTION_C?: string;
  OPTION_D?: string;
  CORRECT_OPTION?: string;
  answers?: ApiAnswer[];
  options?: ApiAnswer[];
  correctAnswerId?: string;
  correctAnswer?: string;
  correctOptionId?: string;
};

const OPTION_KEYS = ["a", "b", "c", "d"] as const;

const mapSapBackendQuestion = (
  raw: ApiQuestion,
  index: number
): FastestFingerQuestion | null => {
  const text = raw.QUESTION_TEXT;
  if (!text || !raw.OPTION_A) return null;

  const answers = OPTION_KEYS.map((key) => ({
    id: key,
    text: raw[`OPTION_${key.toUpperCase()}` as keyof ApiQuestion] as string,
  })).filter((answer) => answer.text);

  if (!answers.length) return null;

  const correctLetter = (raw.CORRECT_OPTION ?? "A").trim().toLowerCase();
  const correctAnswerId = OPTION_KEYS.includes(
    correctLetter as (typeof OPTION_KEYS)[number]
  )
    ? correctLetter
    : answers[0].id;

  const quizQuestionId = raw.ID ?? raw.id ?? raw.questionId ?? index;

  return {
    id: String(quizQuestionId),
    quizQuestionId: Number(quizQuestionId),
    text,
    correctAnswerId,
    answers,
  };
};

const normalizeAnswers = (answers: ApiAnswer[] | undefined): ApiAnswer[] => {
  if (!answers?.length) return [];
  return answers;
};

const resolveCorrectAnswerId = (
  question: ApiQuestion,
  answers: ApiAnswer[]
): string => {
  if (question.correctAnswerId) return question.correctAnswerId;
  if (question.correctAnswer) return question.correctAnswer;
  if (question.correctOptionId) return question.correctOptionId;

  const markedCorrect = answers.find((a) => a.isCorrect);
  if (markedCorrect) {
    return (
      markedCorrect.id ??
      markedCorrect.answerId ??
      String(answers.indexOf(markedCorrect))
    );
  }

  return answers[0]?.id ?? answers[0]?.answerId ?? "0";
};

export const mapApiQuestionToFastestFinger = (
  raw: ApiQuestion,
  index: number
): FastestFingerQuestion | null => {
  const sapQuestion = mapSapBackendQuestion(raw, index);
  if (sapQuestion) return sapQuestion;

  const answers = normalizeAnswers(raw.answers ?? raw.options);
  if (!answers.length) return null;

  const text = raw.text ?? raw.question;
  if (!text) return null;

  const id = String(raw.id ?? raw.questionId ?? index);
  const quizQuestionId = Number(raw.id ?? raw.questionId ?? index);
  const correctAnswerId = resolveCorrectAnswerId(raw, answers);

  return {
    id,
    quizQuestionId: Number.isFinite(quizQuestionId) ? quizQuestionId : index,
    text,
    correctAnswerId,
    answers: answers.map((answer, answerIndex) => ({
      id: String(answer.id ?? answer.answerId ?? answerIndex),
      text: answer.text ?? answer.answer ?? answer.label ?? "",
    })),
  };
};

export const mapApiQuestionsResponse = (
  data: unknown,
  expectedCount = 3
): FastestFingerQuestion[] => {
  const payload = data as {
    questions?: ApiQuestion[];
    result?: ApiQuestion[];
  };

  const rawQuestions = Array.isArray(data)
    ? data
    : payload?.questions ?? payload?.result ?? [];

  const mapped = rawQuestions
    .map((q, i) => mapApiQuestionToFastestFinger(q, i))
    .filter((q): q is FastestFingerQuestion => q !== null);

  if (mapped.length < expectedCount) {
    throw new Error(
      `Expected at least ${expectedCount} questions, received ${mapped.length}`
    );
  }

  return mapped.slice(0, expectedCount);
};
