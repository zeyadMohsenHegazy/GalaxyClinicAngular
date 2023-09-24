import { GeneralUserInfo } from './general-user-info';

export interface SystemUserInfo extends GeneralUserInfo {
  systemUserName: string;
  systemUserMobileNumber: string;
  systemUserEmail: string;
}
