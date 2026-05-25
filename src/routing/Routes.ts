import {useParams } from 'react-router';

export type RouteParam = {
  areaId?: string;
  customerId?: string;
};

export const useRouteParams = useParams<RouteParam>;

export enum SearchParam {
  WebSocketIp = 'wsIp',
  EventConfigKey = 'eventConfigKey',
  ScreenId = 'screenId',
  SingleScreenMode = 'singleScreenMode',
  CustomerRefsOrigin = 'customerRefsOrigin',
}

export const Routes = {
  Login: 'login',
  Map: 'map',
  Avatar: 'avatar',
  Quiz: 'quiz',
  SocialCard: 'socialCard',
  Home: '/'
} as const;
