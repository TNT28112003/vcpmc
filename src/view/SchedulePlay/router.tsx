import React from 'react';
import { IRouter } from '@routers/interface';
import Calendar from '@assets/icon/calender';

export const routerViewSchedule: IRouter = {
  path: '/device',
  name: 'common.schedule-play',
  loader: import('./index'),
  exact: true,
  menu: {
    icon: <Calendar />,
    exact: true,
    activePath: /schedule-play/i,
    hideInNavbar: false,
  },
};
