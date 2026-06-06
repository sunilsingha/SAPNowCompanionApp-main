import axios from "axios";
import { getBaseUrl } from "../../../commons/utils";
import {
  FastestFingerQuestion,
  mapApiQuestionsResponse,
} from "./mapApiQuestions";

const QUIZ_QUESTIONS_CACHE_KEY = "fastestFingerQuestions";

export const savePersonality = async (
  userId: string,
  personality: number
): Promise<void> => {
  const response = await fetch(`${getBaseUrl()}/api/user/quiz`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_id: userId, personality }),
  });

  if (!response.ok) {
    throw new Error(`Failed to save personality: ${response.status}`);
  }
};

export const FASTEST_FINGER_QUESTION_COUNT = 5;
export const FASTEST_FINGER_POINTS_PER_CORRECT = 10;
export const FASTEST_FINGER_MAX_TIME_SEC = 10;
export const FASTEST_FINGER_MAX_TIME_MS = FASTEST_FINGER_MAX_TIME_SEC * 1000;

export const isQuizCompleted = (value: unknown): boolean => Number(value) === 1;

export type FastestFingerAnswerPayload = {
  customer_id: string;
  quiz_question_id: number;
  points: number;
  response_time_ms: number;
  is_correct: 0 | 1;
};

export const submitFastestFingerAnswer = async (
  payload: FastestFingerAnswerPayload
): Promise<void> => {
  const response = await fetch(`${getBaseUrl()}/api/quiz/fastest-finger`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Failed to submit fastest finger answer: ${response.status}`);
  }
};

export type QuizStatsPayload = {
  total_points: number;
  fastest_time_ms: number;
  quiz_completed: 0 | 1;
};

export const updateQuizStats = async (
  userId: string,
  payload: QuizStatsPayload
): Promise<void> => {
  const response = await fetch(`${getBaseUrl()}/api/user/${userId}/quiz-stats`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      total_points: payload.total_points,
      fastest_time_ms: payload.fastest_time_ms,
      quiz_completed: 1,
      QUIZ_COMPLETED: 1,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(
      `Failed to update quiz stats: ${response.status} ${errorBody}`
    );
  }
};

export const fetchQuizResult = async (
  userId: string
): Promise<{ personality: number | null; score: number | null }> => {
  try {
    const { data } = await axios.get(`${getBaseUrl()}/api/user/${userId}/quiz`, {
      headers: { Accept: "application/json" },
    });
    return {
      personality: data?.personality ?? null,
      score: data?.score ?? null,
    };
  } catch {
    return { personality: null, score: null };
  }
};

export const fetchFastestFingerQuestions = async (
  count = FASTEST_FINGER_QUESTION_COUNT
): Promise<FastestFingerQuestion[]> => {
  const { data } = await axios.get(`${getBaseUrl()}/api/quiz/questions`, {
    params: { count },
    headers: { Accept: "application/json" },
  });

  const questions = mapApiQuestionsResponse(data, count);
  sessionStorage.setItem(QUIZ_QUESTIONS_CACHE_KEY, JSON.stringify(questions));
  return questions;
};

export const getCachedFastestFingerQuestions = ():
  | FastestFingerQuestion[]
  | null => {
  const cached = sessionStorage.getItem(QUIZ_QUESTIONS_CACHE_KEY);
  if (!cached) return null;
  try {
    return JSON.parse(cached) as FastestFingerQuestion[];
  } catch {
    return null;
  }
};

export const clearCachedFastestFingerQuestions = (): void => {
  sessionStorage.removeItem(QUIZ_QUESTIONS_CACHE_KEY);
};
