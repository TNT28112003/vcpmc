import React from 'react';
import { IRouter } from '@routers/interface';
import Setting from '@assets/icon/setting';

export const routerSetting: IRouter = {
  path: '/setting',
  name: 'common.setting',
  loader: import('./index'),
  exact: true,
  menu: {
    icon: <Setting />,
    exact: true,
    activePath: /setting/i,
    hideInNavbar: false,
  },
  routes: [
    {
      path: '/setting/authorization',
      name: 'common.setting.authorization',
      loader: import('./Authorization'),
      exact: true,
      menu: {
        exact: true,
        activePath: /setting\/authorization/i,
        hideInNavbar: false,
      },
    },
    {
      path: '/setting/device',
      name: 'common.setting.configuration',
      loader: import('./Configuration'),
      exact: true,
      menu: {
        exact: true,
        activePath: /setting\/device/i,
        hideInNavbar: false,
      },
    },
    {
      path: '/setting/authorization',
      name: 'common.setting.management',
      loader: import('./ContractSetting'),
      exact: true,
      menu: {
        exact: true,
        activePath: /setting\/authorization/i,
        hideInNavbar: false,
      },
    },
    {
      path: '/setting/units-used',
      name: 'common.setting.artwork',
      loader: import('./Information'),
      exact: true,
      menu: {
        exact: true,
        activePath: /setting\/units-used/i,
        hideInNavbar: false,
      },
    },
    {
      path: '/setting/circle-control',
      name: 'common.setting.circle-control',
      loader: import('./CircleControl'),
      exact: true,
      menu: {
        exact: true,
        activePath: /setting\/circle-control/i,
        hideInNavbar: false,
      },
    },
  ],
};
