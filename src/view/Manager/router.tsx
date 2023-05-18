import React from 'react';
import { IRouter } from '@routers/interface';
import ContractManager from '@assets/icon/contractManager';

export const routerManager: IRouter = {
  path: '/manager',
  name: 'common.management',
  loader: import('./index'),
  exact: true,
  menu: {
    icon: <ContractManager />,
    exact: true,
    activePath: /manager/i,
    hideInNavbar: false,
  },
  routes: [
    {
      path: '/manager/contract',
      name: 'common.management.contract',
      loader: import('./Contract'),
      exact: true,
      menu: {
        exact: true,
        activePath: /manage\/contract/i,
        hideInNavbar: false,
      },
    },
    {
      path: '/manager/device',
      name: 'common.management.device',
      loader: import('./Device'),
      exact: true,
      menu: {
        exact: true,
        activePath: /manage\/device/i,
        hideInNavbar: false,
      },
    },
    {
      path: '/manager/authorization',
      name: 'common.management.authorization',
      loader: import('./Authorization'),
      exact: true,
      menu: {
        exact: true,
        activePath: /manage\/authorization/i,
        hideInNavbar: false,
      },
    },
    {
      path: '/manager/units-used',
      name: 'common.management.units-used',
      loader: import('./UnitUsed'),
      exact: true,
      menu: {
        exact: true,
        activePath: /manage\/units-used/i,
        hideInNavbar: false,
      },
    },
  ],
};
