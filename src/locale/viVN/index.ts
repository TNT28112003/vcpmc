import viVN from 'antd/lib/locale/vi_VN';

import areas from './areas';
import auth from './auth';
import brands from './brands';
import common from './common';
import customer from './customer';
import device from './device';
import Form from './form';
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
  ...viVN,
  ...common,
  ...server,
  ...auth,
  ...pageError,
  ...roles,
  ...user,
  ...customer,
  ...transactions,
  ...device,
  ...menu,
  ...products,
  ...brands,
  ...recycle,
  ...robot,
  ...gift,
  ...locations,
  ...robot,
  ...gift,
  ...recycle,
  ...areas,
  Form,
};
