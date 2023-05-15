import enUS from 'antd/lib/locale/en_US';

import areas from './areas';
import auth from './auth';
import brands from './brands';
import common from './common';
import customer from './customer';
import device from './device';
import gift from './gift';
import locations from './locations';
import menu from './menu';
import pageError from './pageError';
import products from './products';
import recycle from './recycle';
import robot from './robot';
import roles from './roles';
import server from './server';
import transactions from './transactions';
import user from './user';

export default {
  ...enUS,
  ...common,
  ...server,
  ...auth,
  ...pageError,
  ...roles,
  ...user,
  ...customer,
  ...gift,
  ...device,
  ...transactions,
  ...products,
  ...menu,
  ...brands,
  ...recycle,
  ...robot,
  ...locations,
  ...robot,
  ...recycle,
  ...areas,
};
