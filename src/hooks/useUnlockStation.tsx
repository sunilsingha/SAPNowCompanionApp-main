import { useState } from "react";
import { getBaseUrl } from "../commons/utils";

export function useUnlockStation() {

  const [error, setError] = useState(null);
  const [isUnlockStationLoading, setIsUnlockStationLoading] = useState(true);
    
  const unlockStation = async (userId: string | undefined, stationId: number) => {
    setIsUnlockStationLoading(true);
    console.log("userId ", userId);
    try {
      await fetch(`${getBaseUrl()}/api/user/${userId}/${stationId}/unlock`, {
          method: 'PUT',
        });
    } catch (error: any) {
      setError(error);
    } finally {
      setIsUnlockStationLoading(false);
    }
  };

  return {
    unlockStation,
    error,
    isUnlockStationLoading
  };
}
