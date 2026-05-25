export interface paths {
  '/$batch': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Sends a group of requests
     * @description Group multiple requests into a single request payload, see [Batch Requests](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_BatchRequests).
     *
     *     *Please note that "Try it out" is not supported for this request.*
     */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      /** @description Batch request */
      requestBody: {
        content: {
          /** @example --request-separator
           *     Content-Type: application/http
           *     Content-Transfer-Encoding: binary
           *
           *     GET SessionRecommendations HTTP/1.1
           *     Accept: application/json
           *
           *
           *     --request-separator-- */
          'multipart/mixed;boundary=request-separator': string;
        };
      };
      responses: {
        /** @description Batch response */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            /** @example --response-separator
             *     Content-Type: application/http
             *
             *     HTTP/1.1 200 OK
             *     Content-Type: application/json
             *
             *     {...}
             *     --response-separator-- */
            'multipart/mixed': string;
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/SessionRecommendations': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Retrieves a list of session recommendations. */
    get: {
      parameters: {
        query?: {
          /**
           * @description Show only the first n items, see [Paging - Top](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptiontop)
           * @example 50
           */
          $top?: components['parameters']['top'];
          /** @description Skip the first n items, see [Paging - Skip](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionskip) */
          $skip?: components['parameters']['skip'];
          /** @description Search items by search phrases, see [Searching](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionsearch) */
          $search?: components['parameters']['search'];
          /** @description Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter) */
          $filter?: string;
          /** @description Include count of items, see [Count](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptioncount) */
          $count?: components['parameters']['count'];
          /** @description Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby) */
          $orderby?: (
            | 'eventConfigKey'
            | 'eventConfigKey desc'
            | 'personaId'
            | 'personaId desc'
            | 'industryId'
            | 'industryId desc'
          )[];
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: ('eventConfigKey' | 'personaId' | 'industryId')[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'Set')[];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved session recommendations */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              '@count'?: components['schemas']['count'];
              value?: components['schemas']['SessionRecommendationsService.SessionRecommendationsParameters'][];
            };
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/SessionRecommendations(eventConfigKey='{eventConfigKey}',personaId='{personaId}',industryId='{industryId}')": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: eventConfigKey */
        eventConfigKey: string;
        /** @description key: personaId */
        personaId: string;
        /** @description key: industryId */
        industryId: string;
      };
      cookie?: never;
    };
    /** Retrieves a single session recommendation. */
    get: {
      parameters: {
        query?: {
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: ('eventConfigKey' | 'personaId' | 'industryId')[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'Set')[];
        };
        header?: never;
        path: {
          /** @description key: eventConfigKey */
          eventConfigKey: string;
          /** @description key: personaId */
          personaId: string;
          /** @description key: industryId */
          industryId: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved session recommendation */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['SessionRecommendationsService.SessionRecommendationsParameters'];
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/SessionRecommendations(eventConfigKey='{eventConfigKey}',personaId='{personaId}',industryId='{industryId}')/Set": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: eventConfigKey */
        eventConfigKey: string;
        /** @description key: personaId */
        personaId: string;
        /** @description key: industryId */
        industryId: string;
      };
      cookie?: never;
    };
    /** Retrieves a list of set of a session recommendation. */
    get: {
      parameters: {
        query?: {
          /**
           * @description Show only the first n items, see [Paging - Top](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptiontop)
           * @example 50
           */
          $top?: components['parameters']['top'];
          /** @description Skip the first n items, see [Paging - Skip](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionskip) */
          $skip?: components['parameters']['skip'];
          /** @description Search items by search phrases, see [Searching](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionsearch) */
          $search?: components['parameters']['search'];
          /** @description Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter) */
          $filter?: string;
          /** @description Include count of items, see [Count](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptioncount) */
          $count?: components['parameters']['count'];
          /** @description Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby) */
          $orderby?: (
            | 'uuid'
            | 'uuid desc'
            | 'sessionId'
            | 'sessionId desc'
            | 'type'
            | 'type desc'
            | 'title'
            | 'title desc'
            | 'description'
            | 'description desc'
            | 'location'
            | 'location desc'
            | 'startDate'
            | 'startDate desc'
            | 'duration'
            | 'duration desc'
            | 'itemOfInterest'
            | 'itemOfInterest desc'
            | 'match'
            | 'match desc'
          )[];
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'uuid'
            | 'sessionId'
            | 'type'
            | 'title'
            | 'description'
            | 'location'
            | 'startDate'
            | 'duration'
            | 'itemOfInterest'
            | 'match'
          )[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'Parameters')[];
        };
        header?: never;
        path: {
          /** @description key: eventConfigKey */
          eventConfigKey: string;
          /** @description key: personaId */
          personaId: string;
          /** @description key: industryId */
          industryId: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved set */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              '@count'?: components['schemas']['count'];
              value?: components['schemas']['SessionRecommendationsService.SessionRecommendationsType'][];
            };
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    /** Creates a single set of a session recommendation. */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: eventConfigKey */
          eventConfigKey: string;
          /** @description key: personaId */
          personaId: string;
          /** @description key: industryId */
          industryId: string;
        };
        cookie?: never;
      };
      /** @description New set */
      requestBody: {
        content: {
          'application/json': components['schemas']['SessionRecommendationsService.SessionRecommendationsType-create'];
        };
      };
      responses: {
        /** @description Created set */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['SessionRecommendationsService.SessionRecommendationsType'];
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: {
    /** SessionRecommendationsParameters */
    'SessionRecommendationsService.SessionRecommendationsParameters': {
      eventConfigKey?: string;
      personaId?: string;
      industryId?: string;
      Set?: components['schemas']['SessionRecommendationsService.SessionRecommendationsType'][];
      'Set@count'?: components['schemas']['count'];
    };
    /** SessionRecommendationsType */
    'SessionRecommendationsService.SessionRecommendationsType': {
      /**
       * Format: uuid
       * @example 01234567-89ab-cdef-0123-456789abcdef
       */
      uuid?: string;
      sessionId?: string | null;
      /** @enum {string} */
      type?:
        | 'ASK_EXPERT'
        | 'EXPERT_BAR'
        | 'STRATEGY_TALK'
        | 'SOLUTION_DEMO'
        | 'DEMO_STATION'
        | 'CUSTOMER_SUCCESS_STORY'
        | 'LEARNING';
      title?: string;
      description?: string;
      location?: string;
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04Z
       */
      startDate?: string;
      /**
       * Format: int32
       * @default 0
       */
      duration: number;
      itemOfInterest?: string | null;
      /** Format: int32 */
      match?: number | null;
      Parameters?: components['schemas']['SessionRecommendationsService.SessionRecommendationsParameters'] | null;
    };
    /** SessionRecommendationsType (for create) */
    'SessionRecommendationsService.SessionRecommendationsType-create': {
      /**
       * Format: uuid
       * @example 01234567-89ab-cdef-0123-456789abcdef
       */
      uuid?: string;
      sessionId?: string | null;
      /** @enum {string} */
      type?:
        | 'ASK_EXPERT'
        | 'EXPERT_BAR'
        | 'STRATEGY_TALK'
        | 'SOLUTION_DEMO'
        | 'DEMO_STATION'
        | 'CUSTOMER_SUCCESS_STORY'
        | 'LEARNING';
      title?: string;
      description?: string;
      location?: string;
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04Z
       */
      startDate?: string;
      /**
       * Format: int32
       * @default 0
       */
      duration: number;
      itemOfInterest?: string | null;
    };
    /** @description The number of entities in the collection. Available when using the [$count](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptioncount) query option. */
    count: number | string;
    error: {
      error: {
        code: string;
        message: string;
        target?: string;
        details?: {
          code: string;
          message: string;
          target?: string;
        }[];
        /** @description The structure of this object is service-specific */
        innererror?: Record<string, never>;
      };
    };
  };
  responses: {
    /** @description Error */
    error: {
      headers: {
        [name: string]: unknown;
      };
      content: {
        'application/json': components['schemas']['error'];
      };
    };
  };
  parameters: {
    /**
     * @description Show only the first n items, see [Paging - Top](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptiontop)
     * @example 50
     */
    top: number;
    /** @description Skip the first n items, see [Paging - Skip](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionskip) */
    skip: number;
    /** @description Include count of items, see [Count](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptioncount) */
    count: boolean;
    /** @description Search items by search phrases, see [Searching](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionsearch) */
    search: string;
  };
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
