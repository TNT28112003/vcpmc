import React from 'react';
import { IRouter } from '@routers/interface';
import ReportSales from '@assets/icon/reportSales';

export const routerViewReveneSale: IRouter = {
  path: '/revenue/sales',
  name: 'common.revenue.sales',
  loader: import('./SalesReport'),
  exact: true,
  menu: {
    icon: <ReportSales />,
    exact: true,
    activePath: /revenue/i,
    hideInNavbar: false,
  },
};

export const routerViewReveneHistory: IRouter = {
  path: '/revenue/history',
  name: 'common.revenue.history',
  loader: import('./History'),
  exact: true,
  menu: {
    icon: <ReportSales />,
    exact: true,
    activePath: /revenue/i,
    hideInNavbar: false,
  },
};

export const routerViewReveneRevenus: IRouter = {
  path: '/revenue/revenus',
  name: 'common.revenue.revenus',
  loader: import('./RevenueDistribution'),
  exact: true,
  menu: {
    icon: <ReportSales />,
    exact: true,
    activePath: /revenue/i,
    hideInNavbar: false,
  },
};

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
  routes: [routerViewReveneSale, routerViewReveneHistory, routerViewReveneRevenus],
};
