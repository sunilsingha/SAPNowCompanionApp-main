import { useState } from "react";
import { getBaseUrl } from "../commons/utils";

export function useCompleteStation() {

  const [error, setError] = useState(null);
  const [isCompleteStationLoading, setIsCompleteStationLoading] = useState(true);
    
  const completeStation = async (userId: string | undefined, stationId: number) => {
    setIsCompleteStationLoading(true);
    try {
      await fetch(`${getBaseUrl()}/api/user/${userId}/${stationId}/complete`, {
          method: 'PUT',
        });
    } catch (error: any) {
      setError(error);
    } finally {
      setIsCompleteStationLoading(false);
    }

  };

  return {
    completeStation,
    error,
    isCompleteStationLoading
  };
}
