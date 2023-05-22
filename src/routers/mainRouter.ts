import { routerForgotPassword } from '@view/Auth/ForgotPassword/router';
import { routerLogin } from '@view/Auth/Login/router';
import { routerPageError } from '@view/PageError/router';
import { IRouter } from './interface';
import { routerViewProfile } from '@view/Auth/Profiles/router';
import {
  routerManager,
  routerManagerAuthorization,
  routerManagerContract,
  routerManagerDevice,
  routerManagerUnitsUsed,
  routerManagerDetails,
} from '@view/Manager/router';
import { routerViewRecord } from '@view/RecordStore/router';
import { routerSupport } from '@view/Support/router';
import { routerSetting } from '@view/Setting/router';
import { routerViewRevene } from '@view/Revenue/router';
import { routerViewSchedule } from '@view/SchedulePlay/router';
import { routerViewPlaylist } from '@view/Playlist/router';
import { routerRegister } from '@view/Auth/Register/router';

export const privatePage: IRouter[] = [
  routerPageError,
  routerViewRecord,
  routerViewPlaylist,
  routerViewSchedule,
  routerManager,
  routerViewRevene,
  routerSetting,
  routerSupport,
  routerViewProfile,
];

export const publicPage: IRouter[] = [routerLogin, routerForgotPassword, routerRegister];
