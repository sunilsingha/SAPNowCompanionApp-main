export type User = {
    ID: string;
    FIRST_NAME: string;
    LAST_NAME: string;
    PDPA: boolean;
    EMAIL: string | null;
    MAINAPP_URL: string | null;
    AVATAR_URL: string | null;
    PERSONALITY: string;
    QUIZ_SCORE?: number | null;
    QUIZ_COMPLETED?: number | null;
    SOCIALCARD_URL: string | null;
    ST_ONE_DONE: boolean;
    ST_TWO_DONE: boolean;
    ST_THREE_DONE: boolean;
    ST_TWO_UNLOCK: boolean;
    ST_THREE_UNLOCK: boolean;
    PDPA_TIME: string;
  };