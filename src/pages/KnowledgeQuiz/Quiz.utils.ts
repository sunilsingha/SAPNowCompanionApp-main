import { useParams } from 'react-router';

export type QuizRouteParam = {
  question?: string;
};

export const useQuizRouteParams = useParams<QuizRouteParam>;

export const MULTIPLE = 'MULTIPLE';
export const FACT = 'FACT';
export const DEFAULT_AVATAR = 'default_avatar.png';

// export const QuizRoutes = {
//   KnowledgeQuiz: `${LearningRoutes.Quiz}/knowledge-quiz`,
//   Welcome: `${LearningRoutes.Quiz}/welcome`,
//   CreateProfile: `${LearningRoutes.Quiz}/create-profile`,
//   CustomAvatar: `${LearningRoutes.Quiz}/custom-avatar`,
//   OptIn: `${LearningRoutes.Quiz}/opt-in`,
//   WelcomeBack: `${LearningRoutes.Quiz}/welcome-back`,
// } as const;

// export const useLearningQuizResetTo = (): To => {
//   const resetParams = useResetSearchParams();
//   return {
//     pathname: QuizRoutes.Welcome,
//     search: resetParams(QuizSearchParam),
//   };
// };
export const QuizSearchParam = {
  AttendeeId: 'attendeeId',
  PersonaId: 'personaId',
  IsCreateAvatar: 'avatar',
  Score: 'score',
  OptIn: 'optIn',
  isEasterEgg: 'isEasterEgg',
  isMobile: 'isMobile',
};

export const EASTER_EGG_IDS = ['ramona'];

const MAX_TOTAL_SCORE = 3000;
const MULTIPLE_COUNT = 3;
const FACT_COUNT = 6;

const TOTAL_QUESTIONS = MULTIPLE_COUNT + FACT_COUNT;
const BASE_SCORE = MAX_TOTAL_SCORE / TOTAL_QUESTIONS;

const MULTIPLE_DEDUCTION_START = 60;
const MULTIPLE_MAX_TIME = 90;

const FACT_DEDUCTION_START = 15;
const FACT_MAX_TIME = 30;

export const calculateQuestionScore = (type: 'MULTIPLE' | 'FACT', isCorrect: boolean, timeTakenSec: number) => {
  if (!isCorrect) {
    return 0;
  }

  const baseScore = BASE_SCORE;

  if (type === MULTIPLE)
    return calculateDeductedScore(baseScore, MULTIPLE_DEDUCTION_START, MULTIPLE_MAX_TIME, timeTakenSec);

  if (type === FACT) return calculateDeductedScore(baseScore, FACT_DEDUCTION_START, FACT_MAX_TIME, timeTakenSec);

  return 0;
};

export function calculateDeductedScore(base: number, start: number, max: number, actual: number) {
  if (actual <= start) return base;
  if (actual <= max) {
    const penalty = (actual - start) / (max - start);
    return Math.max(0, Math.floor(base * (1 - penalty)));
  }
  return 0;
}

export const FASTEST_FINGER_MAX_TIME = 10;
export const FASTEST_FINGER_DEDUCTION_START = 3;
export const FASTEST_FINGER_MAX_PER_QUESTION = 600;
export const FASTEST_FINGER_QUESTION_COUNT = 3;

export const calculateFastestFingerScore = (
  isCorrect: boolean,
  timeTakenSec: number
) => {
  if (!isCorrect) return 0;
  return calculateDeductedScore(
    FASTEST_FINGER_MAX_PER_QUESTION,
    FASTEST_FINGER_DEDUCTION_START,
    FASTEST_FINGER_MAX_TIME,
    timeTakenSec
  );
};

export const base64ToFile = (base64: string, filename: string, mimeType = 'image/png'): File | null => {
  const byteString = atob(base64.split(',')[1]);
  if (!byteString) return null;
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);

  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new File([ab], filename, { type: mimeType });
};
