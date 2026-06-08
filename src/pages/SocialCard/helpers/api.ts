import { getApiUrl } from "../../../commons/utils";

export interface APIResponse {
  firstName: string;
  lastName: string;
}

export const fetchUserPersonality = async (
  userId: string
): Promise<number | null> => {
  try {
    const response = await fetch(getApiUrl(`/api/user/${userId}/quiz`), {
      headers: { Accept: "application/json" },
    })
    if (!response.ok) return null
    const data = await response.json()
    return data?.personality ?? null
  } catch (err) {
    console.warn("Failed to fetch personality:", err);
    return null;
  }
};

export const fetchUserData = async (userId: string) => {
  try {
    const response = await fetch(getApiUrl(`/api/user/${userId}`))
    if (!response.ok) {
      throw new Error(`User fetch failed: ${response.status}`)
    }
    const data = await response.json()
    return {
      isStationOneDone: data.result.ST_ONE_DONE,
      isStationTwoDone: data.result.ST_TWO_DONE,
      isStationThreeUnlocked: data.result.ST_THREE_UNLOCK,
      firstName: data.result.FIRST_NAME,
      lastName: data.result.LAST_NAME,
      profileImag: data.result.PROFILE_IMG,
      company: data.result.COMPANY || "",
    };
  } catch (error) {
    console.error("Error checking user access:", error);
    return {
      isStationOneDone: false,
      isStationTwoDone: false,
      isStationThreeUnlocked: false,
      firstName: null,
      lastName: null,
      profileImag: null,
      company: "",
    };
  }
};
