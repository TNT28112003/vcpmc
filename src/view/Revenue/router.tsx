import React from 'react';
import { IRouter } from '@routers/interface';
import ReportSales from '@assets/icon/reportSales';

export const routerViewRevene: IRouter = {
  path: '/revenue',
  name: 'common.revenue',
  loader: import('./index'),
  exact: true,
  menu: {
    icon: <ReportSales />,
    exact: true,
    activePath: /revenue/i,
    hideInNavbar: false,
  },
  routes: [
    {
      path: '/revenue/sales',
      name: 'common.revenue.sales',
      loader: import('./SalesReport'),
      exact: true,
      menu: {
        exact: true,
        activePath: /revenue\/sales/i,
        hideInNavbar: false,
      },
    },
    {
      path: '/revenue/history',
      name: 'common.revenue.history',
      loader: import('./History'),
      exact: true,
      menu: {
        exact: true,
        activePath: /revenue\/history/i,
        hideInNavbar: false,
      },
    },
    {
      path: '/revenue/revenus',
      name: 'common.revenue.revenus',
      loader: import('./RevenueDistribution'),
      exact: true,
      menu: {
        exact: true,
        activePath: /revenue\/revenus/i,
        hideInNavbar: false,
      },
    },
  ],
};
