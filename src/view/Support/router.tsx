import React from 'react';
import { IRouter } from '@routers/interface';
import Support from '@assets/icon/support';

export const routerSupport: IRouter = {
  path: '/support',
  name: 'common.support',
  loader: import('./index'),
  exact: true,
  menu: {
    icon: <Support />,
    exact: true,
    activePath: /support/i,
    hideInNavbar: false,
  },
  routes: [
    {
      path: '/support/user-manual',
      name: 'common.support.user-manual',
      loader: import('./UserManual'),
      exact: true,
      menu: {
        exact: true,
        activePath: /support\/user-manual/i,
        hideInNavbar: false,
      },
    },
    {
      path: '/support/download',
      name: 'common.support.download',
      loader: import('./Download'),
      exact: true,
      menu: {
        exact: true,
        activePath: /support\/download/i,
        hideInNavbar: false,
      },
    },
    {
      path: '/support/feedback',
      name: 'common.support.feedback',
      loader: import('./Feedback'),
      exact: true,
      menu: {
        exact: true,
        activePath: /support\/feedback/i,
        hideInNavbar: false,
      },
    },
  ],
};
