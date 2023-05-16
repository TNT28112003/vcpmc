import { IRouter } from '@routers/interface';

export const routerHomepage: IRouter = {
  path: '/home',
  loader: import('./index'),
  exact: true,
  name: 'common.homepage',
  // menu: {
  //   icon: <DashboardIcon />,
  //   'exact': true,
  //   activePath: /home/i,
  //   'hideInNavbar': false
  // }
};
