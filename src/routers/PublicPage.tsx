import config from '../config/routes.config';

export const PublicPage = [
  {
    path: config.login.path,
    component: config.login.component,
  },
  {
    path: config.resetPassword.path,
    component: config.resetPassword.component,
  },
  {
    path: config.forgotPassword.path,
    component: config.forgotPassword.component,
  },
];
