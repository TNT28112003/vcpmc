import React from 'react';
import { RecordStore } from '@assets/icon';
import { IRouter } from '@routers/interface';

export const routerViewRecord: IRouter = {
  path: '/',
  name: 'common.record',
  loader: import('./index'),
  exact: true,
  menu: {
    icon: <RecordStore />,
    exact: true,
    activePath: /record/i,
    hideInNavbar: false,
  },
};
