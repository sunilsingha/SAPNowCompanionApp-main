import axios from "axios";

export interface APIResponse {
  firstName: string;
  lastName: string;
}

export const fetchUserPersonality = async (
  userId: string
): Promise<number | null> => {
  try {
    const { data } = await axios.get(
      `https://sap-nowmumbai-backend-dev.cfapps.in30.hana.ondemand.com/api/user/${userId}/quiz`,
      { headers: { Accept: "application/json" } }
    );
    return data?.personality ?? null;
  } catch (err) {
    console.warn("Failed to fetch personality:", err);
    return null;
  }
};

export const fetchUserData = async (userId: string) => {
  try {
    const { data } = await axios.get(
      `https://sap-nowmumbai-backend-dev.cfapps.in30.hana.ondemand.com/api/user/${userId}`
    );
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

