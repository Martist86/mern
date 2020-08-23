import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';

export interface IAuth {
  token: string;
  isAuthenticated: boolean;
  loading: boolean;
  user: any;
}
export interface IAlert {
  id: string; 
  msg: string;
  alertType: string;
}
export interface IProfile {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {}
}

export interface IAppState {
  profile: IProfile;
  auth: IAuth;
  alert:  IAlert[]
}

export default combineReducers({
  alert,
  auth,
  profile
});
