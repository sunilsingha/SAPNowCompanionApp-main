import { useEffect, useState } from "react";
import { User } from "../commons/types/User";
import { getApiUrl } from "../commons/utils";
import { isQuizCompleted } from "../pages/KnowledgeQuiz/helpers/quizApi";

export function useCheckUser(userId: string | undefined) {
  const [result, setResult] = useState<User | null>(null);
  const [error, setError] = useState(null);
  const [isCheckStationStatusLoading, setIsCheckStationStatusLoading] =
    useState(true);

  const isStationOneDone = result?.ST_ONE_DONE ?? false;
  const isStationTwoDone = result?.ST_TWO_DONE ?? false;
  const isStationThreeDone = result?.ST_THREE_DONE ?? false;
  const isStationTwoUnlocked = result?.ST_TWO_UNLOCK ?? false;
  const isStationThreeUnlocked = result?.ST_THREE_UNLOCK ?? false;
  const personality = result?.PERSONALITY ?? null;
  const quizScore = result?.QUIZ_SCORE ?? null;
  const quizCompleted = isQuizCompleted(result?.QUIZ_COMPLETED);

  useEffect(() => {
    if (!userId) return;

    const fetchData = async () => {
      setIsCheckStationStatusLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      try {
        const res = await fetch(getApiUrl(`/api/user/${userId}`), {
          method: "GET",
        });
        const data = await res.json();
        setResult(data.result);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsCheckStationStatusLoading(false);
      }
    };
    fetchData();
  }, [userId]);


  return {
    personality,
    quizScore,
    quizCompleted,
    isStationOneDone,
    isStationTwoDone,
    isStationThreeDone,
    isStationTwoUnlocked,
    isStationThreeUnlocked,
    error,
    isCheckStationStatusLoading,
  };
}
