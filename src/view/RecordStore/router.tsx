import React from 'react';
import { RecordStore } from '@assets/icon';
import { IRouter } from '@routers/interface';

export const routerViewRecordUpdate: IRouter = {
  path: '/record/update/:id',
  name: 'common.management.contract',
  loader: import('./components/UpdateRecord'),
  exact: true,
};

export const routerViewRecordApprove: IRouter = {
  path: '/record-store/approve',
  name: 'common.management.contract',
  loader: import('./components/Approve'),
  exact: true,
};

export const routerViewRecord: IRouter = {
  path: '/record-store',
  name: 'common.record',
  loader: import('./index'),
  exact: true,
  menu: {
    icon: <RecordStore />,
    exact: true,
    activePath: /record-store/i,
    hideInNavbar: false,
  },
  routes: [routerViewRecordUpdate, routerViewRecordApprove],
};
