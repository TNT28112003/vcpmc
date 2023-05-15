import ForgotPassword from '@view/Auth/ForgotPassword';
import Login from '@view/Auth/Login';
import Profile from '@view/Auth/Profiles';
import ResetPassword from '@view/Auth/ResetPassword';

const config = {
  // public routes
  login: {
    component: Login,
    path: 'login',
  },

  resetPassword: {
    component: ResetPassword,
    path: 'reset-password',
  },
  forgotPassword: {
    component: ForgotPassword,
    path: 'forgot-password',
  },

  // private routes
  profile: {
    component: Profile,
    path: '/',
  },
  recordStore: {},
  playlist: {},
  schedulePlay: {},

  // Manager
  contractManager: {},
  deviceManager: {},
  authorizedManager: {},
  unitsUsedManager: {},

  // Revenue
  salesReportRevenue: {},
  historyRevenue: {},
  distributionRevenue: {},

  // Setting
  userPermissionsSetting: {},
  configurationSetting: {},
  contractManagementSetting: {},
  informationSetting: {},
  controlSetting: {},

  // Support
  userManual: {},
  download: {},
  feedback: {},
};

export default config;
