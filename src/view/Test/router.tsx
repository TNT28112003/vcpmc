import React from 'react';

import { UserOutlined } from '@ant-design/icons';
import { IRouter } from '@routers/interface';

const routerTest: IRouter = {
  path: '/test',
  loader: React.lazy(() => import('./index')),
  exact: true,
  name: 'test.name', //translate here for breadcrumb and sidebar
  masterLayout: true,
  menu: {
    icon: <UserOutlined />,
  },
};

export default routerTest;
