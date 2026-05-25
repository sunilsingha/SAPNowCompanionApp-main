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
           *     GET EventConfig HTTP/1.1
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
  '/Answer': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Retrieves a list of answer. */
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
            | 'createdAt'
            | 'createdAt desc'
            | 'createdBy'
            | 'createdBy desc'
            | 'modifiedAt'
            | 'modifiedAt desc'
            | 'modifiedBy'
            | 'modifiedBy desc'
            | 'id'
            | 'id desc'
            | 'text'
            | 'text desc'
            | 'isCorrect'
            | 'isCorrect desc'
            | 'question_id'
            | 'question_id desc'
          )[];
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'id'
            | 'text'
            | 'isCorrect'
            | 'question_id'
          )[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'question')[];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved answer */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              '@count'?: components['schemas']['count'];
              value?: components['schemas']['AdminService.Answer'][];
            };
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    /** Creates a single answer. */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      /** @description New answer */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.Answer-create'];
        };
      };
      responses: {
        /** @description Created answer */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Answer'];
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
  '/Answer({id})': {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: id */
        id: string;
      };
      cookie?: never;
    };
    /** Retrieves a single answer. */
    get: {
      parameters: {
        query?: {
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'id'
            | 'text'
            | 'isCorrect'
            | 'question_id'
          )[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'question')[];
        };
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved answer */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Answer'];
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    post?: never;
    /** Deletes a single answer. */
    delete: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    options?: never;
    head?: never;
    /** Changes a single answer. */
    patch: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      /** @description New property values */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.Answer-update'];
        };
      };
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    trace?: never;
  };
  '/Answer({id})/question': {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: id */
        id: string;
      };
      cookie?: never;
    };
    /** Retrieves question of a answer. */
    get: {
      parameters: {
        query?: {
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: ('createdAt' | 'createdBy' | 'modifiedAt' | 'modifiedBy' | 'id' | 'text' | 'type' | 'details')[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'answers')[];
        };
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved question */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Question'];
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
  '/Attendee': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Retrieves a list of attendee. */
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
            | 'createdAt'
            | 'createdAt desc'
            | 'createdBy'
            | 'createdBy desc'
            | 'modifiedAt'
            | 'modifiedAt desc'
            | 'modifiedBy'
            | 'modifiedBy desc'
            | 'id'
            | 'id desc'
            | 'eventConfigKey'
            | 'eventConfigKey desc'
            | 'uuid'
            | 'uuid desc'
            | 'avatarImageSrc'
            | 'avatarImageSrc desc'
            | 'learningUrl'
            | 'learningUrl desc'
            | 'hasLeaderboardOptIn'
            | 'hasLeaderboardOptIn desc'
            | 'checkInDate'
            | 'checkInDate desc'
            | 'checkOutDate'
            | 'checkOutDate desc'
            | 'firstName'
            | 'firstName desc'
            | 'industryTitle'
            | 'industryTitle desc'
            | 'industryCode'
            | 'industryCode desc'
            | 'lastName'
            | 'lastName desc'
            | 'email'
            | 'email desc'
            | 'company'
            | 'company desc'
            | 'salutationTitle'
            | 'salutationTitle desc'
            | 'salutationCode'
            | 'salutationCode desc'
            | 'relationshipTitle'
            | 'relationshipTitle desc'
            | 'relationshipCode'
            | 'relationshipCode desc'
            | 'jobFunctionTitle'
            | 'jobFunctionTitle desc'
            | 'jobFunctionCode'
            | 'jobFunctionCode desc'
            | 'departmentTitle'
            | 'departmentTitle desc'
            | 'departmentCode'
            | 'departmentCode desc'
            | 'yoodliData_profileId'
            | 'yoodliData_profileId desc'
            | 'yoodliData_feedbackUrl'
            | 'yoodliData_feedbackUrl desc'
            | 'buildYourOwn_username'
            | 'buildYourOwn_username desc'
            | 'buildYourOwn_type'
            | 'buildYourOwn_type desc'
            | 'persona_id'
            | 'persona_id desc'
          )[];
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'id'
            | 'eventConfigKey'
            | 'uuid'
            | 'avatarImageSrc'
            | 'learningUrl'
            | 'hasLeaderboardOptIn'
            | 'checkInDate'
            | 'checkOutDate'
            | 'firstName'
            | 'industryTitle'
            | 'industryCode'
            | 'lastName'
            | 'email'
            | 'company'
            | 'salutationTitle'
            | 'salutationCode'
            | 'relationshipTitle'
            | 'relationshipCode'
            | 'jobFunctionTitle'
            | 'jobFunctionCode'
            | 'departmentTitle'
            | 'departmentCode'
            | 'yoodliData_profileId'
            | 'yoodliData_feedbackUrl'
            | 'buildYourOwn_username'
            | 'buildYourOwn_type'
            | 'persona_id'
          )[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'orders' | 'scores' | 'eventConfig' | 'persona' | 'areaAttendances' | 'learningItems')[];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved attendee */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              '@count'?: components['schemas']['count'];
              value?: components['schemas']['AdminService.Attendee'][];
            };
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    /** Creates a single attendee. */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      /** @description New attendee */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.Attendee-create'];
        };
      };
      responses: {
        /** @description Created attendee */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Attendee'];
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
  "/Attendee(id='{id}',eventConfigKey='{eventConfigKey}')": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: id */
        id: string;
        /** @description key: eventConfigKey */
        eventConfigKey: string;
      };
      cookie?: never;
    };
    /** Retrieves a single attendee. */
    get: {
      parameters: {
        query?: {
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'id'
            | 'eventConfigKey'
            | 'uuid'
            | 'avatarImageSrc'
            | 'learningUrl'
            | 'hasLeaderboardOptIn'
            | 'checkInDate'
            | 'checkOutDate'
            | 'firstName'
            | 'industryTitle'
            | 'industryCode'
            | 'lastName'
            | 'email'
            | 'company'
            | 'salutationTitle'
            | 'salutationCode'
            | 'relationshipTitle'
            | 'relationshipCode'
            | 'jobFunctionTitle'
            | 'jobFunctionCode'
            | 'departmentTitle'
            | 'departmentCode'
            | 'yoodliData_profileId'
            | 'yoodliData_feedbackUrl'
            | 'buildYourOwn_username'
            | 'buildYourOwn_type'
            | 'persona_id'
          )[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'orders' | 'scores' | 'eventConfig' | 'persona' | 'areaAttendances' | 'learningItems')[];
        };
        header?: never;
        path: {
          /** @description key: id */
          id: string;
          /** @description key: eventConfigKey */
          eventConfigKey: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved attendee */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Attendee'];
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    post?: never;
    /** Deletes a single attendee. */
    delete: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: id */
          id: string;
          /** @description key: eventConfigKey */
          eventConfigKey: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    options?: never;
    head?: never;
    /** Changes a single attendee. */
    patch: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: id */
          id: string;
          /** @description key: eventConfigKey */
          eventConfigKey: string;
        };
        cookie?: never;
      };
      /** @description New property values */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.Attendee-update'];
        };
      };
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    trace?: never;
  };
  "/Attendee(id='{id}',eventConfigKey='{eventConfigKey}')/areaAttendances": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: id */
        id: string;
        /** @description key: eventConfigKey */
        eventConfigKey: string;
      };
      cookie?: never;
    };
    /** Retrieves a list of area attendances of a attendee. */
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
            | 'createdAt'
            | 'createdAt desc'
            | 'createdBy'
            | 'createdBy desc'
            | 'modifiedAt'
            | 'modifiedAt desc'
            | 'modifiedBy'
            | 'modifiedBy desc'
            | 'attendeeId'
            | 'attendeeId desc'
            | 'eventConfigKey'
            | 'eventConfigKey desc'
            | 'area'
            | 'area desc'
            | 'attendanceType'
            | 'attendanceType desc'
          )[];
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'attendeeId'
            | 'eventConfigKey'
            | 'area'
            | 'attendanceType'
          )[];
        };
        header?: never;
        path: {
          /** @description key: id */
          id: string;
          /** @description key: eventConfigKey */
          eventConfigKey: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved area attendances */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              '@count'?: components['schemas']['count'];
              value?: components['schemas']['AdminService.AttendeeAreaAttendance'][];
            };
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    /** Creates a single area attendance of a attendee. */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: id */
          id: string;
          /** @description key: eventConfigKey */
          eventConfigKey: string;
        };
        cookie?: never;
      };
      /** @description New area attendance */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.AttendeeAreaAttendance-create'];
        };
      };
      responses: {
        /** @description Created area attendance */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.AttendeeAreaAttendance'];
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
  "/Attendee(id='{id}',eventConfigKey='{eventConfigKey}')/eventConfig": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: id */
        id: string;
        /** @description key: eventConfigKey */
        eventConfigKey: string;
      };
      cookie?: never;
    };
    /** Retrieves event config of a attendee. */
    get: {
      parameters: {
        query?: {
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'id'
            | 'title'
            | 'badgeDataDestinationName'
            | 'badgeDataEventId'
            | 'endDate'
            | 'isOrderingDisabled'
            | 'companionAppBaseUrl'
            | 'timezoneOffset'
            | 'passiveTrackingEventCode'
          )[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'orders' | 'attendees' | 'sessions')[];
        };
        header?: never;
        path: {
          /** @description key: id */
          id: string;
          /** @description key: eventConfigKey */
          eventConfigKey: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved event config */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.EventConfig'];
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
  "/Attendee(id='{id}',eventConfigKey='{eventConfigKey}')/learningItems": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: id */
        id: string;
        /** @description key: eventConfigKey */
        eventConfigKey: string;
      };
      cookie?: never;
    };
    /** Retrieves a list of learning items of a attendee. */
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
            | 'createdAt'
            | 'createdAt desc'
            | 'createdBy'
            | 'createdBy desc'
            | 'modifiedAt'
            | 'modifiedAt desc'
            | 'modifiedBy'
            | 'modifiedBy desc'
            | 'learningItem_id'
            | 'learningItem_id desc'
            | 'attendee_id'
            | 'attendee_id desc'
            | 'attendee_eventConfigKey'
            | 'attendee_eventConfigKey desc'
            | 'index'
            | 'index desc'
          )[];
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'learningItem_id'
            | 'attendee_id'
            | 'attendee_eventConfigKey'
            | 'index'
          )[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'learningItem' | 'attendee')[];
        };
        header?: never;
        path: {
          /** @description key: id */
          id: string;
          /** @description key: eventConfigKey */
          eventConfigKey: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved learning items */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              '@count'?: components['schemas']['count'];
              value?: components['schemas']['AdminService.LearningItemToAttendee'][];
            };
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    /** Creates a single learning item of a attendee. */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: id */
          id: string;
          /** @description key: eventConfigKey */
          eventConfigKey: string;
        };
        cookie?: never;
      };
      /** @description New learning item */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.LearningItemToAttendee-create'];
        };
      };
      responses: {
        /** @description Created learning item */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.LearningItemToAttendee'];
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
  "/Attendee(id='{id}',eventConfigKey='{eventConfigKey}')/orders": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: id */
        id: string;
        /** @description key: eventConfigKey */
        eventConfigKey: string;
      };
      cookie?: never;
    };
    /** Retrieves a list of orders of a attendee. */
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
            | 'createdAt'
            | 'createdAt desc'
            | 'createdBy'
            | 'createdBy desc'
            | 'modifiedAt'
            | 'modifiedAt desc'
            | 'modifiedBy'
            | 'modifiedBy desc'
            | 'id'
            | 'id desc'
            | 'pickupSlot'
            | 'pickupSlot desc'
            | 'platform'
            | 'platform desc'
            | 'status'
            | 'status desc'
            | 'attendee_id'
            | 'attendee_id desc'
            | 'attendee_eventConfigKey'
            | 'attendee_eventConfigKey desc'
            | 'companionAppUrl'
            | 'companionAppUrl desc'
          )[];
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'id'
            | 'pickupSlot'
            | 'platform'
            | 'status'
            | 'attendee_id'
            | 'attendee_eventConfigKey'
            | 'companionAppUrl'
          )[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'attendee')[];
        };
        header?: never;
        path: {
          /** @description key: id */
          id: string;
          /** @description key: eventConfigKey */
          eventConfigKey: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved orders */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              '@count'?: components['schemas']['count'];
              value?: components['schemas']['AdminService.Order'][];
            };
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    /** Creates a single order of a attendee. */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: id */
          id: string;
          /** @description key: eventConfigKey */
          eventConfigKey: string;
        };
        cookie?: never;
      };
      /** @description New order */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.Order-create'];
        };
      };
      responses: {
        /** @description Created order */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Order'];
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
  "/Attendee(id='{id}',eventConfigKey='{eventConfigKey}')/persona": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: id */
        id: string;
        /** @description key: eventConfigKey */
        eventConfigKey: string;
      };
      cookie?: never;
    };
    /** Retrieves persona of a attendee. */
    get: {
      parameters: {
        query?: {
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'id'
            | 'shortRole'
            | 'role'
            | 'quote'
            | 'needs'
            | 'challenges'
            | 'focusTopics'
          )[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'attendees')[];
        };
        header?: never;
        path: {
          /** @description key: id */
          id: string;
          /** @description key: eventConfigKey */
          eventConfigKey: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved persona */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Persona'];
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
  "/Attendee(id='{id}',eventConfigKey='{eventConfigKey}')/scores": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: id */
        id: string;
        /** @description key: eventConfigKey */
        eventConfigKey: string;
      };
      cookie?: never;
    };
    /** Retrieves a list of scores of a attendee. */
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
            | 'createdAt'
            | 'createdAt desc'
            | 'createdBy'
            | 'createdBy desc'
            | 'modifiedAt'
            | 'modifiedAt desc'
            | 'modifiedBy'
            | 'modifiedBy desc'
            | 'attendeeId'
            | 'attendeeId desc'
            | 'areaId'
            | 'areaId desc'
            | 'points'
            | 'points desc'
          )[];
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: ('createdAt' | 'createdBy' | 'modifiedAt' | 'modifiedBy' | 'attendeeId' | 'areaId' | 'points')[];
        };
        header?: never;
        path: {
          /** @description key: id */
          id: string;
          /** @description key: eventConfigKey */
          eventConfigKey: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved scores */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              '@count'?: components['schemas']['count'];
              value?: components['schemas']['AdminService.Score'][];
            };
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    /** Creates a single score of a attendee. */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: id */
          id: string;
          /** @description key: eventConfigKey */
          eventConfigKey: string;
        };
        cookie?: never;
      };
      /** @description New score */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.Score-create'];
        };
      };
      responses: {
        /** @description Created score */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Score'];
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
  '/AttendeeAreaAttendance': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Retrieves a list of attendee area attendance. */
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
            | 'createdAt'
            | 'createdAt desc'
            | 'createdBy'
            | 'createdBy desc'
            | 'modifiedAt'
            | 'modifiedAt desc'
            | 'modifiedBy'
            | 'modifiedBy desc'
            | 'attendeeId'
            | 'attendeeId desc'
            | 'eventConfigKey'
            | 'eventConfigKey desc'
            | 'area'
            | 'area desc'
            | 'attendanceType'
            | 'attendanceType desc'
          )[];
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'attendeeId'
            | 'eventConfigKey'
            | 'area'
            | 'attendanceType'
          )[];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved attendee area attendance */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              '@count'?: components['schemas']['count'];
              value?: components['schemas']['AdminService.AttendeeAreaAttendance'][];
            };
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    /** Creates a single attendee area attendance. */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      /** @description New attendee area attendance */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.AttendeeAreaAttendance-create'];
        };
      };
      responses: {
        /** @description Created attendee area attendance */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.AttendeeAreaAttendance'];
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
  "/AttendeeAreaAttendance(attendeeId='{attendeeId}',eventConfigKey='{eventConfigKey}',area='{area}',attendanceType='{attendanceType}')": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: attendeeId */
        attendeeId: string;
        /** @description key: eventConfigKey */
        eventConfigKey: string;
        /** @description key: area */
        area: 'OVERALL' | 'BUSINESS_TRAFO' | 'JOULE' | 'SCM' | 'CX' | 'HCM' | 'SPEND_FINANCE';
        /** @description key: attendanceType */
        attendanceType: 'SHORT' | 'MEDIUM' | 'LONG';
      };
      cookie?: never;
    };
    /** Retrieves a single attendee area attendance. */
    get: {
      parameters: {
        query?: {
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'attendeeId'
            | 'eventConfigKey'
            | 'area'
            | 'attendanceType'
          )[];
        };
        header?: never;
        path: {
          /** @description key: attendeeId */
          attendeeId: string;
          /** @description key: eventConfigKey */
          eventConfigKey: string;
          /** @description key: area */
          area: 'OVERALL' | 'BUSINESS_TRAFO' | 'JOULE' | 'SCM' | 'CX' | 'HCM' | 'SPEND_FINANCE';
          /** @description key: attendanceType */
          attendanceType: 'SHORT' | 'MEDIUM' | 'LONG';
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved attendee area attendance */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.AttendeeAreaAttendance'];
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    post?: never;
    /** Deletes a single attendee area attendance. */
    delete: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: attendeeId */
          attendeeId: string;
          /** @description key: eventConfigKey */
          eventConfigKey: string;
          /** @description key: area */
          area: 'OVERALL' | 'BUSINESS_TRAFO' | 'JOULE' | 'SCM' | 'CX' | 'HCM' | 'SPEND_FINANCE';
          /** @description key: attendanceType */
          attendanceType: 'SHORT' | 'MEDIUM' | 'LONG';
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    options?: never;
    head?: never;
    /** Changes a single attendee area attendance. */
    patch: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: attendeeId */
          attendeeId: string;
          /** @description key: eventConfigKey */
          eventConfigKey: string;
          /** @description key: area */
          area: 'OVERALL' | 'BUSINESS_TRAFO' | 'JOULE' | 'SCM' | 'CX' | 'HCM' | 'SPEND_FINANCE';
          /** @description key: attendanceType */
          attendanceType: 'SHORT' | 'MEDIUM' | 'LONG';
        };
        cookie?: never;
      };
      /** @description New property values */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.AttendeeAreaAttendance-update'];
        };
      };
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    trace?: never;
  };
  '/EventConfig': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Retrieves a list of event config. */
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
            | 'createdAt'
            | 'createdAt desc'
            | 'createdBy'
            | 'createdBy desc'
            | 'modifiedAt'
            | 'modifiedAt desc'
            | 'modifiedBy'
            | 'modifiedBy desc'
            | 'id'
            | 'id desc'
            | 'title'
            | 'title desc'
            | 'badgeDataDestinationName'
            | 'badgeDataDestinationName desc'
            | 'badgeDataEventId'
            | 'badgeDataEventId desc'
            | 'endDate'
            | 'endDate desc'
            | 'isOrderingDisabled'
            | 'isOrderingDisabled desc'
            | 'companionAppBaseUrl'
            | 'companionAppBaseUrl desc'
            | 'timezoneOffset'
            | 'timezoneOffset desc'
            | 'passiveTrackingEventCode'
            | 'passiveTrackingEventCode desc'
          )[];
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'id'
            | 'title'
            | 'badgeDataDestinationName'
            | 'badgeDataEventId'
            | 'endDate'
            | 'isOrderingDisabled'
            | 'companionAppBaseUrl'
            | 'timezoneOffset'
            | 'passiveTrackingEventCode'
          )[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'orders' | 'attendees' | 'sessions')[];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved event config */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              '@count'?: components['schemas']['count'];
              value?: components['schemas']['AdminService.EventConfig'][];
            };
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    /** Creates a single event config. */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      /** @description New event config */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.EventConfig-create'];
        };
      };
      responses: {
        /** @description Created event config */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.EventConfig'];
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
  "/EventConfig('{id}')": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: id */
        id: string;
      };
      cookie?: never;
    };
    /** Retrieves a single event config. */
    get: {
      parameters: {
        query?: {
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'id'
            | 'title'
            | 'badgeDataDestinationName'
            | 'badgeDataEventId'
            | 'endDate'
            | 'isOrderingDisabled'
            | 'companionAppBaseUrl'
            | 'timezoneOffset'
            | 'passiveTrackingEventCode'
          )[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'orders' | 'attendees' | 'sessions')[];
        };
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved event config */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.EventConfig'];
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    post?: never;
    /** Deletes a single event config. */
    delete: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    options?: never;
    head?: never;
    /** Changes a single event config. */
    patch: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      /** @description New property values */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.EventConfig-update'];
        };
      };
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    trace?: never;
  };
  "/EventConfig('{id}')/attendees": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: id */
        id: string;
      };
      cookie?: never;
    };
    /** Retrieves a list of attendees of a event config. */
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
            | 'createdAt'
            | 'createdAt desc'
            | 'createdBy'
            | 'createdBy desc'
            | 'modifiedAt'
            | 'modifiedAt desc'
            | 'modifiedBy'
            | 'modifiedBy desc'
            | 'id'
            | 'id desc'
            | 'eventConfigKey'
            | 'eventConfigKey desc'
            | 'uuid'
            | 'uuid desc'
            | 'avatarImageSrc'
            | 'avatarImageSrc desc'
            | 'learningUrl'
            | 'learningUrl desc'
            | 'hasLeaderboardOptIn'
            | 'hasLeaderboardOptIn desc'
            | 'checkInDate'
            | 'checkInDate desc'
            | 'checkOutDate'
            | 'checkOutDate desc'
            | 'firstName'
            | 'firstName desc'
            | 'industryTitle'
            | 'industryTitle desc'
            | 'industryCode'
            | 'industryCode desc'
            | 'lastName'
            | 'lastName desc'
            | 'email'
            | 'email desc'
            | 'company'
            | 'company desc'
            | 'salutationTitle'
            | 'salutationTitle desc'
            | 'salutationCode'
            | 'salutationCode desc'
            | 'relationshipTitle'
            | 'relationshipTitle desc'
            | 'relationshipCode'
            | 'relationshipCode desc'
            | 'jobFunctionTitle'
            | 'jobFunctionTitle desc'
            | 'jobFunctionCode'
            | 'jobFunctionCode desc'
            | 'departmentTitle'
            | 'departmentTitle desc'
            | 'departmentCode'
            | 'departmentCode desc'
            | 'yoodliData_profileId'
            | 'yoodliData_profileId desc'
            | 'yoodliData_feedbackUrl'
            | 'yoodliData_feedbackUrl desc'
            | 'buildYourOwn_username'
            | 'buildYourOwn_username desc'
            | 'buildYourOwn_type'
            | 'buildYourOwn_type desc'
            | 'persona_id'
            | 'persona_id desc'
          )[];
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'id'
            | 'eventConfigKey'
            | 'uuid'
            | 'avatarImageSrc'
            | 'learningUrl'
            | 'hasLeaderboardOptIn'
            | 'checkInDate'
            | 'checkOutDate'
            | 'firstName'
            | 'industryTitle'
            | 'industryCode'
            | 'lastName'
            | 'email'
            | 'company'
            | 'salutationTitle'
            | 'salutationCode'
            | 'relationshipTitle'
            | 'relationshipCode'
            | 'jobFunctionTitle'
            | 'jobFunctionCode'
            | 'departmentTitle'
            | 'departmentCode'
            | 'yoodliData_profileId'
            | 'yoodliData_feedbackUrl'
            | 'buildYourOwn_username'
            | 'buildYourOwn_type'
            | 'persona_id'
          )[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'orders' | 'scores' | 'eventConfig' | 'persona' | 'areaAttendances' | 'learningItems')[];
        };
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved attendees */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              '@count'?: components['schemas']['count'];
              value?: components['schemas']['AdminService.Attendee'][];
            };
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    /** Creates a single attendee of a event config. */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      /** @description New attendee */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.Attendee-create'];
        };
      };
      responses: {
        /** @description Created attendee */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Attendee'];
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
  "/EventConfig('{id}')/orders": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: id */
        id: string;
      };
      cookie?: never;
    };
    /** Retrieves a list of orders of a event config. */
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
            | 'createdAt'
            | 'createdAt desc'
            | 'createdBy'
            | 'createdBy desc'
            | 'modifiedAt'
            | 'modifiedAt desc'
            | 'modifiedBy'
            | 'modifiedBy desc'
            | 'id'
            | 'id desc'
            | 'pickupSlot'
            | 'pickupSlot desc'
            | 'platform'
            | 'platform desc'
            | 'status'
            | 'status desc'
            | 'attendee_id'
            | 'attendee_id desc'
            | 'attendee_eventConfigKey'
            | 'attendee_eventConfigKey desc'
            | 'companionAppUrl'
            | 'companionAppUrl desc'
          )[];
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'id'
            | 'pickupSlot'
            | 'platform'
            | 'status'
            | 'attendee_id'
            | 'attendee_eventConfigKey'
            | 'companionAppUrl'
          )[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'attendee')[];
        };
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved orders */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              '@count'?: components['schemas']['count'];
              value?: components['schemas']['AdminService.Order'][];
            };
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    /** Creates a single order of a event config. */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      /** @description New order */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.Order-create'];
        };
      };
      responses: {
        /** @description Created order */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Order'];
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
  "/EventConfig('{id}')/sessions": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: id */
        id: string;
      };
      cookie?: never;
    };
    /** Retrieves a list of sessions of a event config. */
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
            | 'createdAt'
            | 'createdAt desc'
            | 'createdBy'
            | 'createdBy desc'
            | 'modifiedAt'
            | 'modifiedAt desc'
            | 'modifiedBy'
            | 'modifiedBy desc'
            | 'uuid'
            | 'uuid desc'
            | 'sessionId'
            | 'sessionId desc'
            | 'sessionCode'
            | 'sessionCode desc'
            | 'title'
            | 'title desc'
            | 'description'
            | 'description desc'
            | 'type'
            | 'type desc'
            | 'startDate'
            | 'startDate desc'
            | 'duration'
            | 'duration desc'
            | 'location'
            | 'location desc'
            | 'itemOfInterest'
            | 'itemOfInterest desc'
            | 'eventConfig_id'
            | 'eventConfig_id desc'
          )[];
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'uuid'
            | 'sessionId'
            | 'sessionCode'
            | 'title'
            | 'description'
            | 'type'
            | 'startDate'
            | 'duration'
            | 'location'
            | 'itemOfInterest'
            | 'eventConfig_id'
          )[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'eventConfig' | 'relatedIndustryIds' | 'relatedPersonas')[];
        };
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved sessions */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              '@count'?: components['schemas']['count'];
              value?: components['schemas']['AdminService.Session'][];
            };
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    /** Creates a single session of a event config. */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      /** @description New session */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.Session-create'];
        };
      };
      responses: {
        /** @description Created session */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Session'];
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
  '/Leaderboard': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Retrieves a list of leaderboard. */
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
          $orderby?: ('eventConfigKey' | 'eventConfigKey desc')[];
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: 'eventConfigKey'[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'Set')[];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved leaderboard */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              '@count'?: components['schemas']['count'];
              value?: components['schemas']['AdminService.LeaderboardParameters'][];
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
  "/Leaderboard('{eventConfigKey}')": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: eventConfigKey */
        eventConfigKey: string;
      };
      cookie?: never;
    };
    /** Retrieves a single leaderboard. */
    get: {
      parameters: {
        query?: {
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: 'eventConfigKey'[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'Set')[];
        };
        header?: never;
        path: {
          /** @description key: eventConfigKey */
          eventConfigKey: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved leaderboard */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.LeaderboardParameters'];
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
  "/Leaderboard('{eventConfigKey}')/Set": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: eventConfigKey */
        eventConfigKey: string;
      };
      cookie?: never;
    };
    /** Retrieves a list of set of a leaderboard. */
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
            | 'id'
            | 'id desc'
            | 'eventConfigKey'
            | 'eventConfigKey desc'
            | 'uuid'
            | 'uuid desc'
            | 'firstName'
            | 'firstName desc'
            | 'lastName'
            | 'lastName desc'
            | 'email'
            | 'email desc'
            | 'leaderboardName'
            | 'leaderboardName desc'
            | 'hasLeaderboardOptIn'
            | 'hasLeaderboardOptIn desc'
            | 'points'
            | 'points desc'
            | 'avatarImageSrc'
            | 'avatarImageSrc desc'
          )[];
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'id'
            | 'eventConfigKey'
            | 'uuid'
            | 'firstName'
            | 'lastName'
            | 'email'
            | 'leaderboardName'
            | 'hasLeaderboardOptIn'
            | 'points'
            | 'avatarImageSrc'
          )[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'Parameters')[];
        };
        header?: never;
        path: {
          /** @description key: eventConfigKey */
          eventConfigKey: string;
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
              value?: components['schemas']['AdminService.LeaderboardType'][];
            };
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    /** Creates a single set of a leaderboard. */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: eventConfigKey */
          eventConfigKey: string;
        };
        cookie?: never;
      };
      /** @description New set */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.LeaderboardType-create'];
        };
      };
      responses: {
        /** @description Created set */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.LeaderboardType'];
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
  "/Leaderboard('{eventConfigKey}')/Set(id='{id_1}',eventConfigKey='{eventConfigKey_1}')": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: eventConfigKey */
        eventConfigKey: string;
        /** @description key: id */
        id_1: string;
        /** @description key: eventConfigKey */
        eventConfigKey_1: string;
      };
      cookie?: never;
    };
    /** Retrieves a single set of a leaderboard. */
    get: {
      parameters: {
        query?: {
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'id'
            | 'eventConfigKey'
            | 'uuid'
            | 'firstName'
            | 'lastName'
            | 'email'
            | 'leaderboardName'
            | 'hasLeaderboardOptIn'
            | 'points'
            | 'avatarImageSrc'
          )[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'Parameters')[];
        };
        header?: never;
        path: {
          /** @description key: eventConfigKey */
          eventConfigKey: string;
          /** @description key: id */
          id_1: string;
          /** @description key: eventConfigKey */
          eventConfigKey_1: string;
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
            'application/json': components['schemas']['AdminService.LeaderboardType'];
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    post?: never;
    /** Deletes a single set of a leaderboard. */
    delete: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: eventConfigKey */
          eventConfigKey: string;
          /** @description key: id */
          id_1: string;
          /** @description key: eventConfigKey */
          eventConfigKey_1: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    options?: never;
    head?: never;
    /** Changes a single set of a leaderboard. */
    patch: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: eventConfigKey */
          eventConfigKey: string;
          /** @description key: id */
          id_1: string;
          /** @description key: eventConfigKey */
          eventConfigKey_1: string;
        };
        cookie?: never;
      };
      /** @description New property values */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.LeaderboardType-update'];
        };
      };
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    trace?: never;
  };
  "/Leaderboard('{eventConfigKey}')/Set(id='{id_1}',eventConfigKey='{eventConfigKey_1}')/Parameters": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: eventConfigKey */
        eventConfigKey: string;
        /** @description key: id */
        id_1: string;
        /** @description key: eventConfigKey */
        eventConfigKey_1: string;
      };
      cookie?: never;
    };
    /** Retrieves parameters of a leaderboard. */
    get: {
      parameters: {
        query?: {
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: 'eventConfigKey'[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'Set')[];
        };
        header?: never;
        path: {
          /** @description key: eventConfigKey */
          eventConfigKey: string;
          /** @description key: id */
          id_1: string;
          /** @description key: eventConfigKey */
          eventConfigKey_1: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved parameters */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.LeaderboardParameters'];
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
  '/LearningItem': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Retrieves a list of learning item. */
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
            | 'createdAt'
            | 'createdAt desc'
            | 'createdBy'
            | 'createdBy desc'
            | 'modifiedAt'
            | 'modifiedAt desc'
            | 'modifiedBy'
            | 'modifiedBy desc'
            | 'id'
            | 'id desc'
            | 'title'
            | 'title desc'
            | 'objective'
            | 'objective desc'
            | 'link'
            | 'link desc'
          )[];
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: ('createdAt' | 'createdBy' | 'modifiedAt' | 'modifiedBy' | 'id' | 'title' | 'objective' | 'link')[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'miniGames')[];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved learning item */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              '@count'?: components['schemas']['count'];
              value?: components['schemas']['AdminService.LearningItem'][];
            };
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    /** Creates a single learning item. */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      /** @description New learning item */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.LearningItem-create'];
        };
      };
      responses: {
        /** @description Created learning item */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.LearningItem'];
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
  "/LearningItem('{id}')": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: id */
        id: string;
      };
      cookie?: never;
    };
    /** Retrieves a single learning item. */
    get: {
      parameters: {
        query?: {
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: ('createdAt' | 'createdBy' | 'modifiedAt' | 'modifiedBy' | 'id' | 'title' | 'objective' | 'link')[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'miniGames')[];
        };
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved learning item */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.LearningItem'];
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    post?: never;
    /** Deletes a single learning item. */
    delete: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    options?: never;
    head?: never;
    /** Changes a single learning item. */
    patch: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      /** @description New property values */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.LearningItem-update'];
        };
      };
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    trace?: never;
  };
  "/LearningItem('{id}')/miniGames": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: id */
        id: string;
      };
      cookie?: never;
    };
    /** Retrieves a list of mini games of a learning item. */
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
            | 'createdAt'
            | 'createdAt desc'
            | 'createdBy'
            | 'createdBy desc'
            | 'modifiedAt'
            | 'modifiedAt desc'
            | 'modifiedBy'
            | 'modifiedBy desc'
            | 'learningItem_id'
            | 'learningItem_id desc'
            | 'miniGame_id'
            | 'miniGame_id desc'
          )[];
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: ('createdAt' | 'createdBy' | 'modifiedAt' | 'modifiedBy' | 'learningItem_id' | 'miniGame_id')[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'learningItem' | 'miniGame')[];
        };
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved mini games */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              '@count'?: components['schemas']['count'];
              value?: components['schemas']['AdminService.LearningItemToMiniGame'][];
            };
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    /** Creates a single mini game of a learning item. */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      /** @description New mini game */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.LearningItemToMiniGame-create'];
        };
      };
      responses: {
        /** @description Created mini game */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.LearningItemToMiniGame'];
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
  '/LearningItemToAttendee': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Retrieves a list of learning item to attendee. */
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
            | 'createdAt'
            | 'createdAt desc'
            | 'createdBy'
            | 'createdBy desc'
            | 'modifiedAt'
            | 'modifiedAt desc'
            | 'modifiedBy'
            | 'modifiedBy desc'
            | 'learningItem_id'
            | 'learningItem_id desc'
            | 'attendee_id'
            | 'attendee_id desc'
            | 'attendee_eventConfigKey'
            | 'attendee_eventConfigKey desc'
            | 'index'
            | 'index desc'
          )[];
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'learningItem_id'
            | 'attendee_id'
            | 'attendee_eventConfigKey'
            | 'index'
          )[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'learningItem' | 'attendee')[];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved learning item to attendee */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              '@count'?: components['schemas']['count'];
              value?: components['schemas']['AdminService.LearningItemToAttendee'][];
            };
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    /** Creates a single learning item to attendee. */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      /** @description New learning item to attendee */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.LearningItemToAttendee-create'];
        };
      };
      responses: {
        /** @description Created learning item to attendee */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.LearningItemToAttendee'];
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
  "/LearningItemToAttendee(learningItem_id='{learningItem_id}',attendee_id='{attendee_id}',attendee_eventConfigKey='{attendee_eventConfigKey}')": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: learningItem_id */
        learningItem_id: string;
        /** @description key: attendee_id */
        attendee_id: string;
        /** @description key: attendee_eventConfigKey */
        attendee_eventConfigKey: string;
      };
      cookie?: never;
    };
    /** Retrieves a single learning item to attendee. */
    get: {
      parameters: {
        query?: {
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'learningItem_id'
            | 'attendee_id'
            | 'attendee_eventConfigKey'
            | 'index'
          )[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'learningItem' | 'attendee')[];
        };
        header?: never;
        path: {
          /** @description key: learningItem_id */
          learningItem_id: string;
          /** @description key: attendee_id */
          attendee_id: string;
          /** @description key: attendee_eventConfigKey */
          attendee_eventConfigKey: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved learning item to attendee */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.LearningItemToAttendee'];
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    post?: never;
    /** Deletes a single learning item to attendee. */
    delete: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: learningItem_id */
          learningItem_id: string;
          /** @description key: attendee_id */
          attendee_id: string;
          /** @description key: attendee_eventConfigKey */
          attendee_eventConfigKey: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    options?: never;
    head?: never;
    /** Changes a single learning item to attendee. */
    patch: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: learningItem_id */
          learningItem_id: string;
          /** @description key: attendee_id */
          attendee_id: string;
          /** @description key: attendee_eventConfigKey */
          attendee_eventConfigKey: string;
        };
        cookie?: never;
      };
      /** @description New property values */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.LearningItemToAttendee-update'];
        };
      };
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    trace?: never;
  };
  "/LearningItemToAttendee(learningItem_id='{learningItem_id}',attendee_id='{attendee_id}',attendee_eventConfigKey='{attendee_eventConfigKey}')/attendee": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: learningItem_id */
        learningItem_id: string;
        /** @description key: attendee_id */
        attendee_id: string;
        /** @description key: attendee_eventConfigKey */
        attendee_eventConfigKey: string;
      };
      cookie?: never;
    };
    /** Retrieves attendee of a learning item to attendee. */
    get: {
      parameters: {
        query?: {
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'id'
            | 'eventConfigKey'
            | 'uuid'
            | 'avatarImageSrc'
            | 'learningUrl'
            | 'hasLeaderboardOptIn'
            | 'checkInDate'
            | 'checkOutDate'
            | 'firstName'
            | 'industryTitle'
            | 'industryCode'
            | 'lastName'
            | 'email'
            | 'company'
            | 'salutationTitle'
            | 'salutationCode'
            | 'relationshipTitle'
            | 'relationshipCode'
            | 'jobFunctionTitle'
            | 'jobFunctionCode'
            | 'departmentTitle'
            | 'departmentCode'
            | 'yoodliData_profileId'
            | 'yoodliData_feedbackUrl'
            | 'buildYourOwn_username'
            | 'buildYourOwn_type'
            | 'persona_id'
          )[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'orders' | 'scores' | 'eventConfig' | 'persona' | 'areaAttendances' | 'learningItems')[];
        };
        header?: never;
        path: {
          /** @description key: learningItem_id */
          learningItem_id: string;
          /** @description key: attendee_id */
          attendee_id: string;
          /** @description key: attendee_eventConfigKey */
          attendee_eventConfigKey: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved attendee */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Attendee'];
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
  "/LearningItemToAttendee(learningItem_id='{learningItem_id}',attendee_id='{attendee_id}',attendee_eventConfigKey='{attendee_eventConfigKey}')/learningItem": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: learningItem_id */
        learningItem_id: string;
        /** @description key: attendee_id */
        attendee_id: string;
        /** @description key: attendee_eventConfigKey */
        attendee_eventConfigKey: string;
      };
      cookie?: never;
    };
    /** Retrieves learning item of a learning item to attendee. */
    get: {
      parameters: {
        query?: {
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: ('createdAt' | 'createdBy' | 'modifiedAt' | 'modifiedBy' | 'id' | 'title' | 'objective' | 'link')[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'miniGames')[];
        };
        header?: never;
        path: {
          /** @description key: learningItem_id */
          learningItem_id: string;
          /** @description key: attendee_id */
          attendee_id: string;
          /** @description key: attendee_eventConfigKey */
          attendee_eventConfigKey: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved learning item */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.LearningItem'];
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
  '/LearningItemToMiniGame': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Retrieves a list of learning item to mini game. */
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
            | 'createdAt'
            | 'createdAt desc'
            | 'createdBy'
            | 'createdBy desc'
            | 'modifiedAt'
            | 'modifiedAt desc'
            | 'modifiedBy'
            | 'modifiedBy desc'
            | 'learningItem_id'
            | 'learningItem_id desc'
            | 'miniGame_id'
            | 'miniGame_id desc'
          )[];
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: ('createdAt' | 'createdBy' | 'modifiedAt' | 'modifiedBy' | 'learningItem_id' | 'miniGame_id')[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'learningItem' | 'miniGame')[];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved learning item to mini game */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              '@count'?: components['schemas']['count'];
              value?: components['schemas']['AdminService.LearningItemToMiniGame'][];
            };
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    /** Creates a single learning item to mini game. */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      /** @description New learning item to mini game */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.LearningItemToMiniGame-create'];
        };
      };
      responses: {
        /** @description Created learning item to mini game */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.LearningItemToMiniGame'];
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
  "/LearningItemToMiniGame(learningItem_id='{learningItem_id}',miniGame_id='{miniGame_id}')": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: learningItem_id */
        learningItem_id: string;
        /** @description key: miniGame_id */
        miniGame_id: string;
      };
      cookie?: never;
    };
    /** Retrieves a single learning item to mini game. */
    get: {
      parameters: {
        query?: {
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: ('createdAt' | 'createdBy' | 'modifiedAt' | 'modifiedBy' | 'learningItem_id' | 'miniGame_id')[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'learningItem' | 'miniGame')[];
        };
        header?: never;
        path: {
          /** @description key: learningItem_id */
          learningItem_id: string;
          /** @description key: miniGame_id */
          miniGame_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved learning item to mini game */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.LearningItemToMiniGame'];
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    post?: never;
    /** Deletes a single learning item to mini game. */
    delete: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: learningItem_id */
          learningItem_id: string;
          /** @description key: miniGame_id */
          miniGame_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    options?: never;
    head?: never;
    /** Changes a single learning item to mini game. */
    patch: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: learningItem_id */
          learningItem_id: string;
          /** @description key: miniGame_id */
          miniGame_id: string;
        };
        cookie?: never;
      };
      /** @description New property values */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.LearningItemToMiniGame-update'];
        };
      };
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    trace?: never;
  };
  "/LearningItemToMiniGame(learningItem_id='{learningItem_id}',miniGame_id='{miniGame_id}')/learningItem": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: learningItem_id */
        learningItem_id: string;
        /** @description key: miniGame_id */
        miniGame_id: string;
      };
      cookie?: never;
    };
    /** Retrieves learning item of a learning item to mini game. */
    get: {
      parameters: {
        query?: {
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: ('createdAt' | 'createdBy' | 'modifiedAt' | 'modifiedBy' | 'id' | 'title' | 'objective' | 'link')[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'miniGames')[];
        };
        header?: never;
        path: {
          /** @description key: learningItem_id */
          learningItem_id: string;
          /** @description key: miniGame_id */
          miniGame_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved learning item */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.LearningItem'];
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
  "/LearningItemToMiniGame(learningItem_id='{learningItem_id}',miniGame_id='{miniGame_id}')/miniGame": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: learningItem_id */
        learningItem_id: string;
        /** @description key: miniGame_id */
        miniGame_id: string;
      };
      cookie?: never;
    };
    /** Retrieves mini game of a learning item to mini game. */
    get: {
      parameters: {
        query?: {
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: ('createdAt' | 'createdBy' | 'modifiedAt' | 'modifiedBy' | 'id' | 'trackingId' | 'name')[];
        };
        header?: never;
        path: {
          /** @description key: learningItem_id */
          learningItem_id: string;
          /** @description key: miniGame_id */
          miniGame_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved mini game */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.MiniGame'];
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
  '/MiniGame': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Retrieves a list of mini game. */
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
            | 'createdAt'
            | 'createdAt desc'
            | 'createdBy'
            | 'createdBy desc'
            | 'modifiedAt'
            | 'modifiedAt desc'
            | 'modifiedBy'
            | 'modifiedBy desc'
            | 'id'
            | 'id desc'
            | 'trackingId'
            | 'trackingId desc'
            | 'name'
            | 'name desc'
          )[];
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: ('createdAt' | 'createdBy' | 'modifiedAt' | 'modifiedBy' | 'id' | 'trackingId' | 'name')[];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved mini game */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              '@count'?: components['schemas']['count'];
              value?: components['schemas']['AdminService.MiniGame'][];
            };
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    /** Creates a single mini game. */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      /** @description New mini game */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.MiniGame-create'];
        };
      };
      responses: {
        /** @description Created mini game */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.MiniGame'];
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
  "/MiniGame('{id}')": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: id */
        id: string;
      };
      cookie?: never;
    };
    /** Retrieves a single mini game. */
    get: {
      parameters: {
        query?: {
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: ('createdAt' | 'createdBy' | 'modifiedAt' | 'modifiedBy' | 'id' | 'trackingId' | 'name')[];
        };
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved mini game */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.MiniGame'];
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    post?: never;
    /** Deletes a single mini game. */
    delete: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    options?: never;
    head?: never;
    /** Changes a single mini game. */
    patch: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      /** @description New property values */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.MiniGame-update'];
        };
      };
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    trace?: never;
  };
  '/MockVisitorBadge': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Retrieves a list of mock visitor badge. */
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
            | 'createdAt'
            | 'createdAt desc'
            | 'createdBy'
            | 'createdBy desc'
            | 'modifiedAt'
            | 'modifiedAt desc'
            | 'modifiedBy'
            | 'modifiedBy desc'
            | 'id'
            | 'id desc'
            | 'eventConfigKey'
            | 'eventConfigKey desc'
            | 'firstName'
            | 'firstName desc'
            | 'lastName'
            | 'lastName desc'
            | 'email'
            | 'email desc'
            | 'company'
            | 'company desc'
            | 'industryTitle'
            | 'industryTitle desc'
            | 'industryCode'
            | 'industryCode desc'
          )[];
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'id'
            | 'eventConfigKey'
            | 'firstName'
            | 'lastName'
            | 'email'
            | 'company'
            | 'industryTitle'
            | 'industryCode'
          )[];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved mock visitor badge */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              '@count'?: components['schemas']['count'];
              value?: components['schemas']['AdminService.MockVisitorBadge'][];
            };
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    /** Creates a single mock visitor badge. */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      /** @description New mock visitor badge */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.MockVisitorBadge-create'];
        };
      };
      responses: {
        /** @description Created mock visitor badge */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.MockVisitorBadge'];
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
  "/MockVisitorBadge(id='{id}',eventConfigKey='{eventConfigKey}')": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: id */
        id: string;
        /** @description key: eventConfigKey */
        eventConfigKey: string;
      };
      cookie?: never;
    };
    /** Retrieves a single mock visitor badge. */
    get: {
      parameters: {
        query?: {
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'id'
            | 'eventConfigKey'
            | 'firstName'
            | 'lastName'
            | 'email'
            | 'company'
            | 'industryTitle'
            | 'industryCode'
          )[];
        };
        header?: never;
        path: {
          /** @description key: id */
          id: string;
          /** @description key: eventConfigKey */
          eventConfigKey: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved mock visitor badge */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.MockVisitorBadge'];
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    post?: never;
    /** Deletes a single mock visitor badge. */
    delete: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: id */
          id: string;
          /** @description key: eventConfigKey */
          eventConfigKey: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    options?: never;
    head?: never;
    /** Changes a single mock visitor badge. */
    patch: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: id */
          id: string;
          /** @description key: eventConfigKey */
          eventConfigKey: string;
        };
        cookie?: never;
      };
      /** @description New property values */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.MockVisitorBadge-update'];
        };
      };
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    trace?: never;
  };
  '/Order': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Retrieves a list of order. */
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
            | 'createdAt'
            | 'createdAt desc'
            | 'createdBy'
            | 'createdBy desc'
            | 'modifiedAt'
            | 'modifiedAt desc'
            | 'modifiedBy'
            | 'modifiedBy desc'
            | 'id'
            | 'id desc'
            | 'pickupSlot'
            | 'pickupSlot desc'
            | 'platform'
            | 'platform desc'
            | 'status'
            | 'status desc'
            | 'attendee_id'
            | 'attendee_id desc'
            | 'attendee_eventConfigKey'
            | 'attendee_eventConfigKey desc'
            | 'companionAppUrl'
            | 'companionAppUrl desc'
          )[];
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'id'
            | 'pickupSlot'
            | 'platform'
            | 'status'
            | 'attendee_id'
            | 'attendee_eventConfigKey'
            | 'companionAppUrl'
          )[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'attendee')[];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved order */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              '@count'?: components['schemas']['count'];
              value?: components['schemas']['AdminService.Order'][];
            };
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    /** Creates a single order. */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      /** @description New order */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.Order-create'];
        };
      };
      responses: {
        /** @description Created order */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Order'];
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
  '/Order({id})': {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: id */
        id: string;
      };
      cookie?: never;
    };
    /** Retrieves a single order. */
    get: {
      parameters: {
        query?: {
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'id'
            | 'pickupSlot'
            | 'platform'
            | 'status'
            | 'attendee_id'
            | 'attendee_eventConfigKey'
            | 'companionAppUrl'
          )[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'attendee')[];
        };
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved order */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Order'];
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    post?: never;
    /** Deletes a single order. */
    delete: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    options?: never;
    head?: never;
    /** Changes a single order. */
    patch: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      /** @description New property values */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.Order-update'];
        };
      };
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    trace?: never;
  };
  '/Order({id})/attendee': {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: id */
        id: string;
      };
      cookie?: never;
    };
    /** Retrieves attendee of a order. */
    get: {
      parameters: {
        query?: {
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'id'
            | 'eventConfigKey'
            | 'uuid'
            | 'avatarImageSrc'
            | 'learningUrl'
            | 'hasLeaderboardOptIn'
            | 'checkInDate'
            | 'checkOutDate'
            | 'firstName'
            | 'industryTitle'
            | 'industryCode'
            | 'lastName'
            | 'email'
            | 'company'
            | 'salutationTitle'
            | 'salutationCode'
            | 'relationshipTitle'
            | 'relationshipCode'
            | 'jobFunctionTitle'
            | 'jobFunctionCode'
            | 'departmentTitle'
            | 'departmentCode'
            | 'yoodliData_profileId'
            | 'yoodliData_feedbackUrl'
            | 'buildYourOwn_username'
            | 'buildYourOwn_type'
            | 'persona_id'
          )[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'orders' | 'scores' | 'eventConfig' | 'persona' | 'areaAttendances' | 'learningItems')[];
        };
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved attendee */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Attendee'];
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
  '/PassiveTrackingSession': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Retrieves a list of passive tracking session. */
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
            | 'id'
            | 'id desc'
            | 'attendanceType'
            | 'attendanceType desc'
            | 'attendanceArea'
            | 'attendanceArea desc'
            | 'eventConfigKey'
            | 'eventConfigKey desc'
          )[];
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: ('id' | 'attendanceType' | 'attendanceArea' | 'eventConfigKey')[];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved passive tracking session */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              '@count'?: components['schemas']['count'];
              value?: components['schemas']['AdminService.PassiveTrackingSession'][];
            };
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    /** Creates a single passive tracking session. */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      /** @description New passive tracking session */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.PassiveTrackingSession-create'];
        };
      };
      responses: {
        /** @description Created passive tracking session */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.PassiveTrackingSession'];
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
  "/PassiveTrackingSession('{id}')": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: id */
        id: string;
      };
      cookie?: never;
    };
    /** Retrieves a single passive tracking session. */
    get: {
      parameters: {
        query?: {
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: ('id' | 'attendanceType' | 'attendanceArea' | 'eventConfigKey')[];
        };
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved passive tracking session */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.PassiveTrackingSession'];
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    post?: never;
    /** Deletes a single passive tracking session. */
    delete: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    options?: never;
    head?: never;
    /** Changes a single passive tracking session. */
    patch: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      /** @description New property values */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.PassiveTrackingSession-update'];
        };
      };
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    trace?: never;
  };
  '/Persona': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Retrieves a list of persona. */
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
            | 'createdAt'
            | 'createdAt desc'
            | 'createdBy'
            | 'createdBy desc'
            | 'modifiedAt'
            | 'modifiedAt desc'
            | 'modifiedBy'
            | 'modifiedBy desc'
            | 'id'
            | 'id desc'
            | 'shortRole'
            | 'shortRole desc'
            | 'role'
            | 'role desc'
            | 'quote'
            | 'quote desc'
            | 'needs'
            | 'needs desc'
            | 'challenges'
            | 'challenges desc'
            | 'focusTopics/iconSrc'
            | 'focusTopics/iconSrc desc'
            | 'focusTopics/title'
            | 'focusTopics/title desc'
          )[];
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'id'
            | 'shortRole'
            | 'role'
            | 'quote'
            | 'needs'
            | 'challenges'
            | 'focusTopics'
          )[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'attendees')[];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved persona */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              '@count'?: components['schemas']['count'];
              value?: components['schemas']['AdminService.Persona'][];
            };
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    /** Creates a single persona. */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      /** @description New persona */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.Persona-create'];
        };
      };
      responses: {
        /** @description Created persona */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Persona'];
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
  "/Persona('{id}')": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: id */
        id: string;
      };
      cookie?: never;
    };
    /** Retrieves a single persona. */
    get: {
      parameters: {
        query?: {
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'id'
            | 'shortRole'
            | 'role'
            | 'quote'
            | 'needs'
            | 'challenges'
            | 'focusTopics'
          )[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'attendees')[];
        };
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved persona */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Persona'];
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    post?: never;
    /** Deletes a single persona. */
    delete: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    options?: never;
    head?: never;
    /** Changes a single persona. */
    patch: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      /** @description New property values */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.Persona-update'];
        };
      };
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    trace?: never;
  };
  "/Persona('{id}')/attendees": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: id */
        id: string;
      };
      cookie?: never;
    };
    /** Retrieves a list of attendees of a persona. */
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
            | 'createdAt'
            | 'createdAt desc'
            | 'createdBy'
            | 'createdBy desc'
            | 'modifiedAt'
            | 'modifiedAt desc'
            | 'modifiedBy'
            | 'modifiedBy desc'
            | 'id'
            | 'id desc'
            | 'eventConfigKey'
            | 'eventConfigKey desc'
            | 'uuid'
            | 'uuid desc'
            | 'avatarImageSrc'
            | 'avatarImageSrc desc'
            | 'learningUrl'
            | 'learningUrl desc'
            | 'hasLeaderboardOptIn'
            | 'hasLeaderboardOptIn desc'
            | 'checkInDate'
            | 'checkInDate desc'
            | 'checkOutDate'
            | 'checkOutDate desc'
            | 'firstName'
            | 'firstName desc'
            | 'industryTitle'
            | 'industryTitle desc'
            | 'industryCode'
            | 'industryCode desc'
            | 'lastName'
            | 'lastName desc'
            | 'email'
            | 'email desc'
            | 'company'
            | 'company desc'
            | 'salutationTitle'
            | 'salutationTitle desc'
            | 'salutationCode'
            | 'salutationCode desc'
            | 'relationshipTitle'
            | 'relationshipTitle desc'
            | 'relationshipCode'
            | 'relationshipCode desc'
            | 'jobFunctionTitle'
            | 'jobFunctionTitle desc'
            | 'jobFunctionCode'
            | 'jobFunctionCode desc'
            | 'departmentTitle'
            | 'departmentTitle desc'
            | 'departmentCode'
            | 'departmentCode desc'
            | 'yoodliData_profileId'
            | 'yoodliData_profileId desc'
            | 'yoodliData_feedbackUrl'
            | 'yoodliData_feedbackUrl desc'
            | 'buildYourOwn_username'
            | 'buildYourOwn_username desc'
            | 'buildYourOwn_type'
            | 'buildYourOwn_type desc'
            | 'persona_id'
            | 'persona_id desc'
          )[];
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'id'
            | 'eventConfigKey'
            | 'uuid'
            | 'avatarImageSrc'
            | 'learningUrl'
            | 'hasLeaderboardOptIn'
            | 'checkInDate'
            | 'checkOutDate'
            | 'firstName'
            | 'industryTitle'
            | 'industryCode'
            | 'lastName'
            | 'email'
            | 'company'
            | 'salutationTitle'
            | 'salutationCode'
            | 'relationshipTitle'
            | 'relationshipCode'
            | 'jobFunctionTitle'
            | 'jobFunctionCode'
            | 'departmentTitle'
            | 'departmentCode'
            | 'yoodliData_profileId'
            | 'yoodliData_feedbackUrl'
            | 'buildYourOwn_username'
            | 'buildYourOwn_type'
            | 'persona_id'
          )[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'orders' | 'scores' | 'eventConfig' | 'persona' | 'areaAttendances' | 'learningItems')[];
        };
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved attendees */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              '@count'?: components['schemas']['count'];
              value?: components['schemas']['AdminService.Attendee'][];
            };
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    /** Creates a single attendee of a persona. */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      /** @description New attendee */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.Attendee-create'];
        };
      };
      responses: {
        /** @description Created attendee */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Attendee'];
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
  '/Question': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Retrieves a list of question. */
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
            | 'createdAt'
            | 'createdAt desc'
            | 'createdBy'
            | 'createdBy desc'
            | 'modifiedAt'
            | 'modifiedAt desc'
            | 'modifiedBy'
            | 'modifiedBy desc'
            | 'id'
            | 'id desc'
            | 'text'
            | 'text desc'
            | 'type'
            | 'type desc'
            | 'details'
            | 'details desc'
          )[];
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: ('createdAt' | 'createdBy' | 'modifiedAt' | 'modifiedBy' | 'id' | 'text' | 'type' | 'details')[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'answers')[];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved question */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              '@count'?: components['schemas']['count'];
              value?: components['schemas']['AdminService.Question'][];
            };
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    /** Creates a single question. */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      /** @description New question */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.Question-create'];
        };
      };
      responses: {
        /** @description Created question */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Question'];
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
  '/Question({id})': {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: id */
        id: string;
      };
      cookie?: never;
    };
    /** Retrieves a single question. */
    get: {
      parameters: {
        query?: {
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: ('createdAt' | 'createdBy' | 'modifiedAt' | 'modifiedBy' | 'id' | 'text' | 'type' | 'details')[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'answers')[];
        };
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved question */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Question'];
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    post?: never;
    /** Deletes a single question. */
    delete: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    options?: never;
    head?: never;
    /** Changes a single question. */
    patch: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      /** @description New property values */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.Question-update'];
        };
      };
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    trace?: never;
  };
  '/Question({id})/answers': {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: id */
        id: string;
      };
      cookie?: never;
    };
    /** Retrieves a list of answers of a question. */
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
            | 'createdAt'
            | 'createdAt desc'
            | 'createdBy'
            | 'createdBy desc'
            | 'modifiedAt'
            | 'modifiedAt desc'
            | 'modifiedBy'
            | 'modifiedBy desc'
            | 'id'
            | 'id desc'
            | 'text'
            | 'text desc'
            | 'isCorrect'
            | 'isCorrect desc'
            | 'question_id'
            | 'question_id desc'
          )[];
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'id'
            | 'text'
            | 'isCorrect'
            | 'question_id'
          )[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'question')[];
        };
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved answers */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              '@count'?: components['schemas']['count'];
              value?: components['schemas']['AdminService.Answer'][];
            };
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    /** Creates a single answer of a question. */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: id */
          id: string;
        };
        cookie?: never;
      };
      /** @description New answer */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.Answer-create'];
        };
      };
      responses: {
        /** @description Created answer */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Answer'];
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
  '/Score': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Retrieves a list of score. */
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
            | 'createdAt'
            | 'createdAt desc'
            | 'createdBy'
            | 'createdBy desc'
            | 'modifiedAt'
            | 'modifiedAt desc'
            | 'modifiedBy'
            | 'modifiedBy desc'
            | 'attendeeId'
            | 'attendeeId desc'
            | 'areaId'
            | 'areaId desc'
            | 'points'
            | 'points desc'
          )[];
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: ('createdAt' | 'createdBy' | 'modifiedAt' | 'modifiedBy' | 'attendeeId' | 'areaId' | 'points')[];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved score */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              '@count'?: components['schemas']['count'];
              value?: components['schemas']['AdminService.Score'][];
            };
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    /** Creates a single score. */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      /** @description New score */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.Score-create'];
        };
      };
      responses: {
        /** @description Created score */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Score'];
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
  "/Score(attendeeId='{attendeeId}',areaId='{areaId}')": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: attendeeId */
        attendeeId: string;
        /** @description key: areaId */
        areaId: string;
      };
      cookie?: never;
    };
    /** Retrieves a single score. */
    get: {
      parameters: {
        query?: {
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: ('createdAt' | 'createdBy' | 'modifiedAt' | 'modifiedBy' | 'attendeeId' | 'areaId' | 'points')[];
        };
        header?: never;
        path: {
          /** @description key: attendeeId */
          attendeeId: string;
          /** @description key: areaId */
          areaId: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved score */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Score'];
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    post?: never;
    /** Deletes a single score. */
    delete: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: attendeeId */
          attendeeId: string;
          /** @description key: areaId */
          areaId: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    options?: never;
    head?: never;
    /** Changes a single score. */
    patch: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: attendeeId */
          attendeeId: string;
          /** @description key: areaId */
          areaId: string;
        };
        cookie?: never;
      };
      /** @description New property values */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.Score-update'];
        };
      };
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    trace?: never;
  };
  '/Session': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Retrieves a list of session. */
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
            | 'createdAt'
            | 'createdAt desc'
            | 'createdBy'
            | 'createdBy desc'
            | 'modifiedAt'
            | 'modifiedAt desc'
            | 'modifiedBy'
            | 'modifiedBy desc'
            | 'uuid'
            | 'uuid desc'
            | 'sessionId'
            | 'sessionId desc'
            | 'sessionCode'
            | 'sessionCode desc'
            | 'title'
            | 'title desc'
            | 'description'
            | 'description desc'
            | 'type'
            | 'type desc'
            | 'startDate'
            | 'startDate desc'
            | 'duration'
            | 'duration desc'
            | 'location'
            | 'location desc'
            | 'itemOfInterest'
            | 'itemOfInterest desc'
            | 'eventConfig_id'
            | 'eventConfig_id desc'
          )[];
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'uuid'
            | 'sessionId'
            | 'sessionCode'
            | 'title'
            | 'description'
            | 'type'
            | 'startDate'
            | 'duration'
            | 'location'
            | 'itemOfInterest'
            | 'eventConfig_id'
          )[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'eventConfig' | 'relatedIndustryIds' | 'relatedPersonas')[];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved session */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              '@count'?: components['schemas']['count'];
              value?: components['schemas']['AdminService.Session'][];
            };
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    /** Creates a single session. */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      /** @description New session */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.Session-create'];
        };
      };
      responses: {
        /** @description Created session */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Session'];
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
  '/Session({uuid})': {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: uuid */
        uuid: string;
      };
      cookie?: never;
    };
    /** Retrieves a single session. */
    get: {
      parameters: {
        query?: {
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'uuid'
            | 'sessionId'
            | 'sessionCode'
            | 'title'
            | 'description'
            | 'type'
            | 'startDate'
            | 'duration'
            | 'location'
            | 'itemOfInterest'
            | 'eventConfig_id'
          )[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'eventConfig' | 'relatedIndustryIds' | 'relatedPersonas')[];
        };
        header?: never;
        path: {
          /** @description key: uuid */
          uuid: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved session */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Session'];
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    post?: never;
    /** Deletes a single session. */
    delete: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: uuid */
          uuid: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    options?: never;
    head?: never;
    /** Changes a single session. */
    patch: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: uuid */
          uuid: string;
        };
        cookie?: never;
      };
      /** @description New property values */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.Session-update'];
        };
      };
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    trace?: never;
  };
  '/Session({uuid})/eventConfig': {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: uuid */
        uuid: string;
      };
      cookie?: never;
    };
    /** Retrieves event config of a session. */
    get: {
      parameters: {
        query?: {
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'id'
            | 'title'
            | 'badgeDataDestinationName'
            | 'badgeDataEventId'
            | 'endDate'
            | 'isOrderingDisabled'
            | 'companionAppBaseUrl'
            | 'timezoneOffset'
            | 'passiveTrackingEventCode'
          )[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'orders' | 'attendees' | 'sessions')[];
        };
        header?: never;
        path: {
          /** @description key: uuid */
          uuid: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved event config */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.EventConfig'];
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
  '/Session({uuid})/relatedIndustryIds': {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: uuid */
        uuid: string;
      };
      cookie?: never;
    };
    /** Retrieves a list of related industry ids of a session. */
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
          $orderby?: ('up__uuid' | 'up__uuid desc' | 'industryId' | 'industryId desc')[];
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: ('up__uuid' | 'industryId')[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'up_')[];
        };
        header?: never;
        path: {
          /** @description key: uuid */
          uuid: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved related industry ids */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              '@count'?: components['schemas']['count'];
              value?: components['schemas']['AdminService.Session_relatedIndustryIds'][];
            };
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    /** Creates a single related industry id of a session. */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: uuid */
          uuid: string;
        };
        cookie?: never;
      };
      /** @description New related industry id */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.Session_relatedIndustryIds-create'];
        };
      };
      responses: {
        /** @description Created related industry id */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Session_relatedIndustryIds'];
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
  '/Session({uuid})/relatedPersonas': {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: uuid */
        uuid: string;
      };
      cookie?: never;
    };
    /** Retrieves a list of related personas of a session. */
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
          $orderby?: ('up__uuid' | 'up__uuid desc' | 'persona_id' | 'persona_id desc')[];
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: ('up__uuid' | 'persona_id')[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'up_' | 'persona')[];
        };
        header?: never;
        path: {
          /** @description key: uuid */
          uuid: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved related personas */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              '@count'?: components['schemas']['count'];
              value?: components['schemas']['AdminService.Session_relatedPersonas'][];
            };
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    /** Creates a single related persona of a session. */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: uuid */
          uuid: string;
        };
        cookie?: never;
      };
      /** @description New related persona */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.Session_relatedPersonas-create'];
        };
      };
      responses: {
        /** @description Created related persona */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Session_relatedPersonas'];
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
  '/Session_relatedIndustryIds': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Retrieves a list of session_related industry ids. */
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
          $orderby?: ('up__uuid' | 'up__uuid desc' | 'industryId' | 'industryId desc')[];
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: ('up__uuid' | 'industryId')[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'up_')[];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved session_related industry ids */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              '@count'?: components['schemas']['count'];
              value?: components['schemas']['AdminService.Session_relatedIndustryIds'][];
            };
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    /** Creates a single session_related industry id. */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      /** @description New session_related industry id */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.Session_relatedIndustryIds-create'];
        };
      };
      responses: {
        /** @description Created session_related industry id */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Session_relatedIndustryIds'];
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
  "/Session_relatedIndustryIds(up__uuid={up__uuid},industryId='{industryId}')": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: up__uuid */
        up__uuid: string;
        /** @description key: industryId */
        industryId: string;
      };
      cookie?: never;
    };
    /** Retrieves a single session_related industry id. */
    get: {
      parameters: {
        query?: {
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: ('up__uuid' | 'industryId')[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'up_')[];
        };
        header?: never;
        path: {
          /** @description key: up__uuid */
          up__uuid: string;
          /** @description key: industryId */
          industryId: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved session_related industry id */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Session_relatedIndustryIds'];
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    post?: never;
    /** Deletes a single session_related industry id. */
    delete: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: up__uuid */
          up__uuid: string;
          /** @description key: industryId */
          industryId: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    options?: never;
    head?: never;
    /** Changes a single session_related industry id. */
    patch: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: up__uuid */
          up__uuid: string;
          /** @description key: industryId */
          industryId: string;
        };
        cookie?: never;
      };
      /** @description New property values */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.Session_relatedIndustryIds-update'];
        };
      };
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    trace?: never;
  };
  "/Session_relatedIndustryIds(up__uuid={up__uuid},industryId='{industryId}')/up_": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: up__uuid */
        up__uuid: string;
        /** @description key: industryId */
        industryId: string;
      };
      cookie?: never;
    };
    /** Retrieves up_ of a session_related industry id. */
    get: {
      parameters: {
        query?: {
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'uuid'
            | 'sessionId'
            | 'sessionCode'
            | 'title'
            | 'description'
            | 'type'
            | 'startDate'
            | 'duration'
            | 'location'
            | 'itemOfInterest'
            | 'eventConfig_id'
          )[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'eventConfig' | 'relatedIndustryIds' | 'relatedPersonas')[];
        };
        header?: never;
        path: {
          /** @description key: up__uuid */
          up__uuid: string;
          /** @description key: industryId */
          industryId: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved up_ */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Session'];
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
  '/Session_relatedPersonas': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Retrieves a list of session_related personas. */
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
          $orderby?: ('up__uuid' | 'up__uuid desc' | 'persona_id' | 'persona_id desc')[];
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: ('up__uuid' | 'persona_id')[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'up_' | 'persona')[];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved session_related personas */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              '@count'?: components['schemas']['count'];
              value?: components['schemas']['AdminService.Session_relatedPersonas'][];
            };
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    /** Creates a single session_related persona. */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      /** @description New session_related persona */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.Session_relatedPersonas-create'];
        };
      };
      responses: {
        /** @description Created session_related persona */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Session_relatedPersonas'];
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
  "/Session_relatedPersonas(up__uuid={up__uuid},persona_id='{persona_id}')": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: up__uuid */
        up__uuid: string;
        /** @description key: persona_id */
        persona_id: string;
      };
      cookie?: never;
    };
    /** Retrieves a single session_related persona. */
    get: {
      parameters: {
        query?: {
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: ('up__uuid' | 'persona_id')[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'up_' | 'persona')[];
        };
        header?: never;
        path: {
          /** @description key: up__uuid */
          up__uuid: string;
          /** @description key: persona_id */
          persona_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved session_related persona */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Session_relatedPersonas'];
          };
        };
        '4XX': components['responses']['error'];
      };
    };
    put?: never;
    post?: never;
    /** Deletes a single session_related persona. */
    delete: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: up__uuid */
          up__uuid: string;
          /** @description key: persona_id */
          persona_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    options?: never;
    head?: never;
    /** Changes a single session_related persona. */
    patch: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description key: up__uuid */
          up__uuid: string;
          /** @description key: persona_id */
          persona_id: string;
        };
        cookie?: never;
      };
      /** @description New property values */
      requestBody: {
        content: {
          'application/json': components['schemas']['AdminService.Session_relatedPersonas-update'];
        };
      };
      responses: {
        /** @description Success */
        204: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        '4XX': components['responses']['error'];
      };
    };
    trace?: never;
  };
  "/Session_relatedPersonas(up__uuid={up__uuid},persona_id='{persona_id}')/persona": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: up__uuid */
        up__uuid: string;
        /** @description key: persona_id */
        persona_id: string;
      };
      cookie?: never;
    };
    /** Retrieves persona of a session_related persona. */
    get: {
      parameters: {
        query?: {
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'id'
            | 'shortRole'
            | 'role'
            | 'quote'
            | 'needs'
            | 'challenges'
            | 'focusTopics'
          )[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'attendees')[];
        };
        header?: never;
        path: {
          /** @description key: up__uuid */
          up__uuid: string;
          /** @description key: persona_id */
          persona_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved persona */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Persona'];
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
  "/Session_relatedPersonas(up__uuid={up__uuid},persona_id='{persona_id}')/up_": {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description key: up__uuid */
        up__uuid: string;
        /** @description key: persona_id */
        persona_id: string;
      };
      cookie?: never;
    };
    /** Retrieves up_ of a session_related persona. */
    get: {
      parameters: {
        query?: {
          /** @description Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect) */
          $select?: (
            | 'createdAt'
            | 'createdBy'
            | 'modifiedAt'
            | 'modifiedBy'
            | 'uuid'
            | 'sessionId'
            | 'sessionCode'
            | 'title'
            | 'description'
            | 'type'
            | 'startDate'
            | 'duration'
            | 'location'
            | 'itemOfInterest'
            | 'eventConfig_id'
          )[];
          /** @description The value of $expand query option is a comma-separated list of navigation property names, stream property names, or $value indicating the stream content of a media-entity. The corresponding related entities and stream values will be represented inline, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand) */
          $expand?: ('*' | 'eventConfig' | 'relatedIndustryIds' | 'relatedPersonas')[];
        };
        header?: never;
        path: {
          /** @description key: up__uuid */
          up__uuid: string;
          /** @description key: persona_id */
          persona_id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Retrieved up_ */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': components['schemas']['AdminService.Session'];
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
  '/uploadSessions': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Invokes action uploadSessions */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      /** @description Action parameters */
      requestBody?: {
        content: {
          'application/json': {
            eventConfigKey?: string | null;
            sessions?: (components['schemas']['AdminService.Session'] | null)[];
          };
        };
      };
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            'application/json': {
              value?: string | null;
            };
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
    /** Answer */
    'AdminService.Answer': {
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04.0000000Z
       */
      createdAt?: string | null;
      createdBy?: string | null;
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04.0000000Z
       */
      modifiedAt?: string | null;
      modifiedBy?: string | null;
      /**
       * Format: uuid
       * @example 01234567-89ab-cdef-0123-456789abcdef
       */
      id?: string;
      text?: string;
      /** @default false */
      isCorrect?: boolean;
      question?: components['schemas']['AdminService.Question'];
      /**
       * Format: uuid
       * @example 01234567-89ab-cdef-0123-456789abcdef
       */
      question_id?: string;
    };
    /** Answer (for create) */
    'AdminService.Answer-create': {
      /**
       * Format: uuid
       * @example 01234567-89ab-cdef-0123-456789abcdef
       */
      id?: string;
      text?: string;
      /** @default false */
      isCorrect: boolean;
      /**
       * Format: uuid
       * @example 01234567-89ab-cdef-0123-456789abcdef
       */
      question_id?: string;
    };
    /** Answer (for update) */
    'AdminService.Answer-update': {
      text?: string;
      /** @default false */
      isCorrect: boolean;
      /**
       * Format: uuid
       * @example 01234567-89ab-cdef-0123-456789abcdef
       */
      question_id?: string;
    };
    /** Attendee */
    'AdminService.Attendee': {
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04.0000000Z
       */
      createdAt?: string | null;
      createdBy?: string | null;
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04.0000000Z
       */
      modifiedAt?: string | null;
      modifiedBy?: string | null;
      id?: string;
      eventConfigKey?: string;
      /**
       * Format: uuid
       * @example 01234567-89ab-cdef-0123-456789abcdef
       */
      uuid?: string;
      avatarImageSrc?: string | null;
      learningUrl?: string;
      /** @default false */
      hasLeaderboardOptIn: boolean;
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04Z
       */
      checkInDate?: string | null;
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04Z
       */
      checkOutDate?: string | null;
      firstName?: string;
      industryTitle?: string | null;
      industryCode?: string | null;
      lastName?: string | null;
      email?: string | null;
      company?: string | null;
      salutationTitle?: string | null;
      salutationCode?: string | null;
      relationshipTitle?: string | null;
      relationshipCode?: string | null;
      jobFunctionTitle?: string | null;
      jobFunctionCode?: string | null;
      departmentTitle?: string | null;
      departmentCode?: string | null;
      yoodliData_profileId?: string | null;
      yoodliData_feedbackUrl?: string | null;
      buildYourOwn_username?: string | null;
      buildYourOwn_type?: string | null;
      orders?: components['schemas']['AdminService.Order'][];
      'orders@count'?: components['schemas']['count'];
      scores?: components['schemas']['AdminService.Score'][];
      'scores@count'?: components['schemas']['count'];
      eventConfig?: components['schemas']['AdminService.EventConfig'] | null;
      persona?: components['schemas']['AdminService.Persona'] | null;
      persona_id?: string | null;
      areaAttendances?: components['schemas']['AdminService.AttendeeAreaAttendance'][];
      'areaAttendances@count'?: components['schemas']['count'];
      learningItems?: components['schemas']['AdminService.LearningItemToAttendee'][];
      'learningItems@count'?: components['schemas']['count'];
    };
    /** Attendee (for create) */
    'AdminService.Attendee-create': {
      id: string;
      eventConfigKey: string;
      /**
       * Format: uuid
       * @example 01234567-89ab-cdef-0123-456789abcdef
       */
      uuid?: string;
      avatarImageSrc?: string | null;
      learningUrl?: string;
      /** @default false */
      hasLeaderboardOptIn: boolean;
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04Z
       */
      checkInDate?: string | null;
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04Z
       */
      checkOutDate?: string | null;
      firstName?: string;
      industryTitle?: string | null;
      industryCode?: string | null;
      yoodliData_profileId?: string | null;
      yoodliData_feedbackUrl?: string | null;
      buildYourOwn_username?: string | null;
      buildYourOwn_type?: string | null;
      orders?: components['schemas']['AdminService.Order-create'][];
      scores?: components['schemas']['AdminService.Score-create'][];
      persona_id?: string | null;
      learningItems?: components['schemas']['AdminService.LearningItemToAttendee-create'][];
    };
    /** Attendee (for update) */
    'AdminService.Attendee-update': {
      /**
       * Format: uuid
       * @example 01234567-89ab-cdef-0123-456789abcdef
       */
      uuid?: string;
      avatarImageSrc?: string | null;
      learningUrl?: string;
      /** @default false */
      hasLeaderboardOptIn: boolean;
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04Z
       */
      checkInDate?: string | null;
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04Z
       */
      checkOutDate?: string | null;
      firstName?: string;
      industryTitle?: string | null;
      industryCode?: string | null;
      yoodliData_profileId?: string | null;
      yoodliData_feedbackUrl?: string | null;
      buildYourOwn_username?: string | null;
      buildYourOwn_type?: string | null;
      orders?: components['schemas']['AdminService.Order-create'][];
      scores?: components['schemas']['AdminService.Score-create'][];
      persona_id?: string | null;
      learningItems?: components['schemas']['AdminService.LearningItemToAttendee-create'][];
    };
    /** AttendeeAreaAttendance */
    'AdminService.AttendeeAreaAttendance': {
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04.0000000Z
       */
      createdAt?: string | null;
      createdBy?: string | null;
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04.0000000Z
       */
      modifiedAt?: string | null;
      modifiedBy?: string | null;
      attendeeId?: string;
      eventConfigKey?: string;
      /** @enum {string} */
      area?: 'OVERALL' | 'BUSINESS_TRAFO' | 'JOULE' | 'SCM' | 'CX' | 'HCM' | 'SPEND_FINANCE';
      /** @enum {string} */
      attendanceType?: 'SHORT' | 'MEDIUM' | 'LONG';
    };
    /** AttendeeAreaAttendance (for create) */
    'AdminService.AttendeeAreaAttendance-create': {
      attendeeId: string;
      eventConfigKey: string;
      /** @enum {string} */
      area: 'OVERALL' | 'BUSINESS_TRAFO' | 'JOULE' | 'SCM' | 'CX' | 'HCM' | 'SPEND_FINANCE';
      /** @enum {string} */
      attendanceType: 'SHORT' | 'MEDIUM' | 'LONG';
    };
    /** AttendeeAreaAttendance (for update) */
    'AdminService.AttendeeAreaAttendance-update': Record<string, never>;
    /** EventConfig */
    'AdminService.EventConfig': {
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04.0000000Z
       */
      createdAt?: string | null;
      createdBy?: string | null;
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04.0000000Z
       */
      modifiedAt?: string | null;
      modifiedBy?: string | null;
      id?: string;
      title?: string;
      badgeDataDestinationName?: string | null;
      badgeDataEventId?: string | null;
      /**
       * Format: date
       * @example 2017-04-13
       */
      endDate?: string | null;
      /** @default false */
      isOrderingDisabled: boolean;
      /** @default https://six-event-companion-app.cfapps.eu10.hana.ondemand.com/sapphire-ec-25 */
      companionAppBaseUrl: string;
      /** @default Z */
      timezoneOffset: string;
      passiveTrackingEventCode?: string | null;
      orders?: components['schemas']['AdminService.Order'][];
      'orders@count'?: components['schemas']['count'];
      attendees?: components['schemas']['AdminService.Attendee'][];
      'attendees@count'?: components['schemas']['count'];
      sessions?: components['schemas']['AdminService.Session'][];
      'sessions@count'?: components['schemas']['count'];
    };
    /** EventConfig (for create) */
    'AdminService.EventConfig-create': {
      id: string;
      title?: string;
      badgeDataDestinationName?: string | null;
      badgeDataEventId?: string | null;
      /**
       * Format: date
       * @example 2017-04-13
       */
      endDate?: string | null;
      /** @default false */
      isOrderingDisabled: boolean;
      /** @default https://six-event-companion-app.cfapps.eu10.hana.ondemand.com/sapphire-ec-25 */
      companionAppBaseUrl: string;
      /** @default Z */
      timezoneOffset: string;
      passiveTrackingEventCode?: string | null;
    };
    /** EventConfig (for update) */
    'AdminService.EventConfig-update': {
      title?: string;
      badgeDataDestinationName?: string | null;
      badgeDataEventId?: string | null;
      /**
       * Format: date
       * @example 2017-04-13
       */
      endDate?: string | null;
      /** @default false */
      isOrderingDisabled: boolean;
      /** @default https://six-event-companion-app.cfapps.eu10.hana.ondemand.com/sapphire-ec-25 */
      companionAppBaseUrl: string;
      /** @default Z */
      timezoneOffset: string;
      passiveTrackingEventCode?: string | null;
    };
    /** LeaderboardParameters */
    'AdminService.LeaderboardParameters': {
      eventConfigKey?: string;
      Set?: components['schemas']['AdminService.LeaderboardType'][];
      'Set@count'?: components['schemas']['count'];
    };
    /** LeaderboardType */
    'AdminService.LeaderboardType': {
      id?: string;
      eventConfigKey?: string;
      /**
       * Format: uuid
       * @example 01234567-89ab-cdef-0123-456789abcdef
       */
      uuid?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      email?: string | null;
      leaderboardName?: string | null;
      hasLeaderboardOptIn?: boolean | null;
      /** Format: int32 */
      points?: number | null;
      avatarImageSrc?: string | null;
      Parameters?: components['schemas']['AdminService.LeaderboardParameters'] | null;
    };
    /** LeaderboardType (for create) */
    'AdminService.LeaderboardType-create': {
      id: string;
      eventConfigKey: string;
      /**
       * Format: uuid
       * @example 01234567-89ab-cdef-0123-456789abcdef
       */
      uuid?: string | null;
      firstName?: string | null;
      hasLeaderboardOptIn?: boolean | null;
      avatarImageSrc?: string | null;
    };
    /** LeaderboardType (for update) */
    'AdminService.LeaderboardType-update': {
      /**
       * Format: uuid
       * @example 01234567-89ab-cdef-0123-456789abcdef
       */
      uuid?: string | null;
      firstName?: string | null;
      hasLeaderboardOptIn?: boolean | null;
      avatarImageSrc?: string | null;
    };
    /** LearningItem */
    'AdminService.LearningItem': {
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04.0000000Z
       */
      createdAt?: string | null;
      createdBy?: string | null;
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04.0000000Z
       */
      modifiedAt?: string | null;
      modifiedBy?: string | null;
      id?: string;
      title?: string;
      objective?: string;
      link?: string;
      miniGames?: components['schemas']['AdminService.LearningItemToMiniGame'][];
      'miniGames@count'?: components['schemas']['count'];
    };
    /** LearningItem (for create) */
    'AdminService.LearningItem-create': {
      id: string;
      title?: string;
      objective?: string;
      link?: string;
      miniGames?: components['schemas']['AdminService.LearningItemToMiniGame-create'][];
    };
    /** LearningItem (for update) */
    'AdminService.LearningItem-update': {
      title?: string;
      objective?: string;
      link?: string;
      miniGames?: components['schemas']['AdminService.LearningItemToMiniGame-create'][];
    };
    /** LearningItemToAttendee */
    'AdminService.LearningItemToAttendee': {
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04.0000000Z
       */
      createdAt?: string | null;
      createdBy?: string | null;
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04.0000000Z
       */
      modifiedAt?: string | null;
      modifiedBy?: string | null;
      learningItem?: components['schemas']['AdminService.LearningItem'];
      learningItem_id?: string;
      attendee?: components['schemas']['AdminService.Attendee'];
      attendee_id?: string;
      attendee_eventConfigKey?: string;
      /**
       * Format: int32
       * @default 0
       */
      index: number;
    };
    /** LearningItemToAttendee (for create) */
    'AdminService.LearningItemToAttendee-create': {
      learningItem_id: string;
      attendee_id: string;
      attendee_eventConfigKey: string;
      /**
       * Format: int32
       * @default 0
       */
      index: number;
    };
    /** LearningItemToAttendee (for update) */
    'AdminService.LearningItemToAttendee-update': {
      /**
       * Format: int32
       * @default 0
       */
      index: number;
    };
    /** LearningItemToMiniGame */
    'AdminService.LearningItemToMiniGame': {
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04.0000000Z
       */
      createdAt?: string | null;
      createdBy?: string | null;
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04.0000000Z
       */
      modifiedAt?: string | null;
      modifiedBy?: string | null;
      learningItem?: components['schemas']['AdminService.LearningItem'];
      learningItem_id?: string;
      miniGame?: components['schemas']['AdminService.MiniGame'];
      miniGame_id?: string;
    };
    /** LearningItemToMiniGame (for create) */
    'AdminService.LearningItemToMiniGame-create': {
      learningItem_id: string;
      miniGame_id: string;
    };
    /** LearningItemToMiniGame (for update) */
    'AdminService.LearningItemToMiniGame-update': Record<string, never>;
    /** MiniGame */
    'AdminService.MiniGame': {
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04.0000000Z
       */
      createdAt?: string | null;
      createdBy?: string | null;
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04.0000000Z
       */
      modifiedAt?: string | null;
      modifiedBy?: string | null;
      id?: string;
      trackingId?: string;
      name?: string | null;
    };
    /** MiniGame (for create) */
    'AdminService.MiniGame-create': {
      id: string;
      trackingId?: string;
      name?: string | null;
    };
    /** MiniGame (for update) */
    'AdminService.MiniGame-update': {
      trackingId?: string;
      name?: string | null;
    };
    /** MockVisitorBadge */
    'AdminService.MockVisitorBadge': {
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04.0000000Z
       */
      createdAt?: string | null;
      createdBy?: string | null;
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04.0000000Z
       */
      modifiedAt?: string | null;
      modifiedBy?: string | null;
      id?: string;
      /** @default Orlando */
      eventConfigKey: string;
      firstName?: string;
      lastName?: string;
      /** @default  */
      email: string;
      company?: string | null;
      industryTitle?: string | null;
      industryCode?: string | null;
    };
    /** MockVisitorBadge (for create) */
    'AdminService.MockVisitorBadge-create': {
      id: string;
      /** @default Orlando */
      eventConfigKey: string;
      firstName?: string;
      lastName?: string;
      /** @default  */
      email: string;
      company?: string | null;
      industryTitle?: string | null;
      industryCode?: string | null;
    };
    /** MockVisitorBadge (for update) */
    'AdminService.MockVisitorBadge-update': {
      firstName?: string;
      lastName?: string;
      /** @default  */
      email: string;
      company?: string | null;
      industryTitle?: string | null;
      industryCode?: string | null;
    };
    /** Order */
    'AdminService.Order': {
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04.0000000Z
       */
      createdAt?: string | null;
      createdBy?: string | null;
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04.0000000Z
       */
      modifiedAt?: string | null;
      modifiedBy?: string | null;
      /**
       * Format: uuid
       * @example 01234567-89ab-cdef-0123-456789abcdef
       */
      id?: string;
      /** Format: int32 */
      pickupSlot?: number | null;
      /** @enum {string} */
      platform?: 'IOS' | 'ANDROID';
      /** @enum {string} */
      status?: 'CREATED' | 'IN_PRODUCTION' | 'READY_FOR_PICKUP' | 'PICKED_UP';
      attendee?: components['schemas']['AdminService.Attendee'];
      attendee_id?: string;
      attendee_eventConfigKey?: string;
      companionAppUrl?: string;
    };
    /** Order (for create) */
    'AdminService.Order-create': {
      /**
       * Format: uuid
       * @example 01234567-89ab-cdef-0123-456789abcdef
       */
      id?: string;
      /** Format: int32 */
      pickupSlot?: number | null;
      /** @enum {string} */
      platform?: 'IOS' | 'ANDROID';
      /** @enum {string} */
      status?: 'CREATED' | 'IN_PRODUCTION' | 'READY_FOR_PICKUP' | 'PICKED_UP';
      attendee_id?: string;
      attendee_eventConfigKey?: string;
      companionAppUrl?: string;
    };
    /** Order (for update) */
    'AdminService.Order-update': {
      /** Format: int32 */
      pickupSlot?: number | null;
      /** @enum {string} */
      platform?: 'IOS' | 'ANDROID';
      /** @enum {string} */
      status?: 'CREATED' | 'IN_PRODUCTION' | 'READY_FOR_PICKUP' | 'PICKED_UP';
      attendee_id?: string;
      attendee_eventConfigKey?: string;
      companionAppUrl?: string;
    };
    /** PassiveTrackingSession */
    'AdminService.PassiveTrackingSession': {
      id?: string;
      /** @enum {string} */
      attendanceType?: 'SHORT' | 'MEDIUM' | 'LONG';
      /** @enum {string} */
      attendanceArea?: 'OVERALL' | 'BUSINESS_TRAFO' | 'JOULE' | 'SCM' | 'CX' | 'HCM' | 'SPEND_FINANCE';
      eventConfigKey?: string;
    };
    /** PassiveTrackingSession (for create) */
    'AdminService.PassiveTrackingSession-create': {
      id: string;
      /** @enum {string} */
      attendanceType?: 'SHORT' | 'MEDIUM' | 'LONG';
      /** @enum {string} */
      attendanceArea?: 'OVERALL' | 'BUSINESS_TRAFO' | 'JOULE' | 'SCM' | 'CX' | 'HCM' | 'SPEND_FINANCE';
      eventConfigKey?: string;
    };
    /** PassiveTrackingSession (for update) */
    'AdminService.PassiveTrackingSession-update': {
      /** @enum {string} */
      attendanceType?: 'SHORT' | 'MEDIUM' | 'LONG';
      /** @enum {string} */
      attendanceArea?: 'OVERALL' | 'BUSINESS_TRAFO' | 'JOULE' | 'SCM' | 'CX' | 'HCM' | 'SPEND_FINANCE';
      eventConfigKey?: string;
    };
    /** Persona */
    'AdminService.Persona': {
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04.0000000Z
       */
      createdAt?: string | null;
      createdBy?: string | null;
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04.0000000Z
       */
      modifiedAt?: string | null;
      modifiedBy?: string | null;
      id?: string;
      shortRole?: string;
      role?: string;
      quote?: string | null;
      attendees?: components['schemas']['AdminService.Attendee'][];
      'attendees@count'?: components['schemas']['count'];
      needs?: (string | null)[];
      challenges?: (string | null)[];
      focusTopics?: (components['schemas']['AdminService.Persona_focusTopics'] | null)[];
    };
    /** Persona (for create) */
    'AdminService.Persona-create': {
      id: string;
      shortRole?: string;
      role?: string;
      quote?: string | null;
      needs?: (string | null)[];
      challenges?: (string | null)[];
      focusTopics?: (components['schemas']['AdminService.Persona_focusTopics-create'] | null)[];
    };
    /** Persona (for update) */
    'AdminService.Persona-update': {
      shortRole?: string;
      role?: string;
      quote?: string | null;
      needs?: (string | null)[];
      challenges?: (string | null)[];
      focusTopics?: (components['schemas']['AdminService.Persona_focusTopics-update'] | null)[];
    };
    /** Persona_focusTopics */
    'AdminService.Persona_focusTopics': {
      iconSrc?: string;
      title?: string;
    };
    /** Persona_focusTopics (for create) */
    'AdminService.Persona_focusTopics-create': {
      iconSrc?: string;
      title?: string;
    };
    /** Persona_focusTopics (for update) */
    'AdminService.Persona_focusTopics-update': {
      iconSrc?: string;
      title?: string;
    };
    /** Question */
    'AdminService.Question': {
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04.0000000Z
       */
      createdAt?: string | null;
      createdBy?: string | null;
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04.0000000Z
       */
      modifiedAt?: string | null;
      modifiedBy?: string | null;
      /**
       * Format: uuid
       * @example 01234567-89ab-cdef-0123-456789abcdef
       */
      id?: string;
      text?: string;
      /** @enum {string} */
      type?: 'MULTIPLE' | 'FACT';
      details?: string | null;
      answers?: components['schemas']['AdminService.Answer'][];
      'answers@count'?: components['schemas']['count'];
    };
    /** Question (for create) */
    'AdminService.Question-create': {
      /**
       * Format: uuid
       * @example 01234567-89ab-cdef-0123-456789abcdef
       */
      id?: string;
      text?: string;
      /** @enum {string} */
      type?: 'MULTIPLE' | 'FACT';
      details?: string | null;
      answers?: components['schemas']['AdminService.Answer-create'][];
    };
    /** Question (for update) */
    'AdminService.Question-update': {
      text?: string;
      /** @enum {string} */
      type?: 'MULTIPLE' | 'FACT';
      details?: string | null;
      answers?: components['schemas']['AdminService.Answer-create'][];
    };
    /** Score */
    'AdminService.Score': {
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04.0000000Z
       */
      createdAt?: string | null;
      createdBy?: string | null;
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04.0000000Z
       */
      modifiedAt?: string | null;
      modifiedBy?: string | null;
      attendeeId?: string;
      areaId?: string;
      /** Format: int32 */
      points?: number | null;
    };
    /** Score (for create) */
    'AdminService.Score-create': {
      attendeeId: string;
      areaId: string;
      /** Format: int32 */
      points?: number | null;
    };
    /** Score (for update) */
    'AdminService.Score-update': {
      /** Format: int32 */
      points?: number | null;
    };
    /** Session */
    'AdminService.Session': {
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04.0000000Z
       */
      createdAt?: string | null;
      createdBy?: string | null;
      /**
       * Format: date-time
       * @example 2017-04-13T15:51:04.0000000Z
       */
      modifiedAt?: string | null;
      modifiedBy?: string | null;
      /**
       * Format: uuid
       * @example 01234567-89ab-cdef-0123-456789abcdef
       */
      uuid?: string;
      sessionId?: string | null;
      sessionCode?: string | null;
      title?: string;
      description?: string;
      /** @enum {string} */
      type?:
        | 'ASK_EXPERT'
        | 'EXPERT_BAR'
        | 'STRATEGY_TALK'
        | 'SOLUTION_DEMO'
        | 'DEMO_STATION'
        | 'CUSTOMER_SUCCESS_STORY'
        | 'LEARNING';
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
      location?: string;
      itemOfInterest?: string | null;
      eventConfig?: components['schemas']['AdminService.EventConfig'];
      eventConfig_id?: string;
      relatedIndustryIds?: components['schemas']['AdminService.Session_relatedIndustryIds'][];
      'relatedIndustryIds@count'?: components['schemas']['count'];
      relatedPersonas?: components['schemas']['AdminService.Session_relatedPersonas'][];
      'relatedPersonas@count'?: components['schemas']['count'];
    };
    /** Session (for create) */
    'AdminService.Session-create': {
      /**
       * Format: uuid
       * @example 01234567-89ab-cdef-0123-456789abcdef
       */
      uuid?: string;
      sessionId?: string | null;
      sessionCode?: string | null;
      title?: string;
      description?: string;
      /** @enum {string} */
      type?:
        | 'ASK_EXPERT'
        | 'EXPERT_BAR'
        | 'STRATEGY_TALK'
        | 'SOLUTION_DEMO'
        | 'DEMO_STATION'
        | 'CUSTOMER_SUCCESS_STORY'
        | 'LEARNING';
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
      location?: string;
      itemOfInterest?: string | null;
      eventConfig_id?: string;
      relatedIndustryIds?: components['schemas']['AdminService.Session_relatedIndustryIds-create'][];
      relatedPersonas?: components['schemas']['AdminService.Session_relatedPersonas-create'][];
    };
    /** Session (for update) */
    'AdminService.Session-update': {
      sessionId?: string | null;
      sessionCode?: string | null;
      title?: string;
      description?: string;
      /** @enum {string} */
      type?:
        | 'ASK_EXPERT'
        | 'EXPERT_BAR'
        | 'STRATEGY_TALK'
        | 'SOLUTION_DEMO'
        | 'DEMO_STATION'
        | 'CUSTOMER_SUCCESS_STORY'
        | 'LEARNING';
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
      location?: string;
      itemOfInterest?: string | null;
      eventConfig_id?: string;
      relatedIndustryIds?: components['schemas']['AdminService.Session_relatedIndustryIds-create'][];
      relatedPersonas?: components['schemas']['AdminService.Session_relatedPersonas-create'][];
    };
    /** Session_relatedIndustryIds */
    'AdminService.Session_relatedIndustryIds': {
      up_?: components['schemas']['AdminService.Session'];
      /**
       * Format: uuid
       * @example 01234567-89ab-cdef-0123-456789abcdef
       */
      up__uuid?: string;
      industryId?: string;
    };
    /** Session_relatedIndustryIds (for create) */
    'AdminService.Session_relatedIndustryIds-create': {
      /**
       * Format: uuid
       * @example 01234567-89ab-cdef-0123-456789abcdef
       */
      up__uuid: string;
      industryId: string;
    };
    /** Session_relatedIndustryIds (for update) */
    'AdminService.Session_relatedIndustryIds-update': Record<string, never>;
    /** Session_relatedPersonas */
    'AdminService.Session_relatedPersonas': {
      up_?: components['schemas']['AdminService.Session'];
      /**
       * Format: uuid
       * @example 01234567-89ab-cdef-0123-456789abcdef
       */
      up__uuid?: string;
      persona?: components['schemas']['AdminService.Persona'] | null;
      persona_id?: string;
    };
    /** Session_relatedPersonas (for create) */
    'AdminService.Session_relatedPersonas-create': {
      /**
       * Format: uuid
       * @example 01234567-89ab-cdef-0123-456789abcdef
       */
      up__uuid: string;
      persona_id: string;
    };
    /** Session_relatedPersonas (for update) */
    'AdminService.Session_relatedPersonas-update': Record<string, never>;
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
