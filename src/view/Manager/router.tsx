import React from 'react';
import { IRouter } from '@routers/interface';
import ContractManager from '@assets/icon/contractManager';

export const routerManagerDetails: IRouter = {
  path: '/manager/contract/authorize/:id',
  name: 'common.management.contract',
  loader: import('./Contract/AuthorizeContract/components/Detail'),
  exact: true,
};

export const routerManagerContract: IRouter = {
  path: '/manager/contract',
  name: 'common.management.contract',
  loader: import('./Contract'),
  exact: true,
  menu: {
    exact: true,
    activePath: /manager\/role/i,
    hideInNavbar: false,
  },
};

export const routerManagerAddContractAuthorize: IRouter = {
  path: '/manager/contract/add-authorize-contract',
  name: 'common.management.contract',
  loader: import('./Contract/AuthorizeContract/components/Add'),
  exact: true,
};

export const routerManagerAddRecord: IRouter = {
  path: '/manager/contract/add-record',
  name: 'common.management.contract',
  loader: import('./Contract/AuthorizeContract/components/AddRecord'),
  exact: true,
};

export const routerManagerEditContractAuthorize: IRouter = {
  path: '/manager/contract/edit-authorize-contract/:id',
  name: 'common.management.contract',
  loader: import('./Contract/AuthorizeContract/components/Edit'),
  exact: true,
};

export const routerManagerDevice: IRouter = {
  path: '/manager/device',
  name: 'common.management.device',
  loader: import('./Device'),
  exact: true,
  menu: {
    exact: true,
    activePath: /manager\/device/i,
    hideInNavbar: false,
  },
};

export const routerManagerAddDevice: IRouter = {
  path: '/manager/device/add-device',
  name: 'common.management.device',
  loader: import('./Device/components/AddDevice'),
  exact: true,
};

export const routerManagerDetailDevice: IRouter = {
  path: '/manager/device/:id',
  name: 'common.management.device',
  loader: import('./Device/components/Details'),
  exact: true,
};

export const routerManagerAuthorization: IRouter = {
  path: '/manager/authorization',
  name: 'common.management.authorization',
  loader: import('./Authorization'),
  exact: true,
  menu: {
    exact: true,
    activePath: /manager\/authorization/i,
    hideInNavbar: false,
  },
};

export const routerManagerUpdateAuthorization: IRouter = {
  path: '/manager/authorization/:id',
  name: 'common.management.contract',
  loader: import('./Authorization/Update'),
  exact: true,
};

export const routerManagerUnitsUsed: IRouter = {
  path: '/manager/units-used',
  name: 'common.management.units-used',
  loader: import('./UnitUsed'),
  exact: true,
  menu: {
    exact: true,
    activePath: /manager\/units-used/i,
    hideInNavbar: false,
  },
};

export const routerManagerUnitsUsedDetails: IRouter = {
  path: '/manager/units-used/:id',
  name: 'common.management.contract',
  loader: import('./UnitUsed/components/Details'),
  exact: true,
};

export const routerManagerUnitsUsedDetailsInfo: IRouter = {
  path: '/manager/units-used/info/:id',
  name: 'common.management.contract',
  loader: import('./UnitUsed/components/Details/components/Info'),
  exact: true,
};

export const routerManagerUnitsUsedEdit: IRouter = {
  path: '/manager/units-used/info/edit/:id',
  name: 'common.management.contract',
  loader: import('./UnitUsed/components/Details/components/Edit'),
  exact: true,
};

export const routerManagerUnitsUsedAdd: IRouter = {
  path: '/manager/units-used/add',
  name: 'common.management.contract',
  loader: import('./UnitUsed/components/Add'),
  exact: true,
};

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
    routerManagerContract,

    routerManagerDevice,
    routerManagerAddDevice,
    routerManagerDetailDevice,

    routerManagerUnitsUsed,
    routerManagerUnitsUsedDetails,
    routerManagerUnitsUsedAdd,
    routerManagerUnitsUsedDetailsInfo,
    routerManagerUnitsUsedEdit,

    routerManagerDetails,
    routerManagerAddContractAuthorize,
    routerManagerEditContractAuthorize,
    routerManagerAddRecord,

    routerManagerAuthorization,
    routerManagerUpdateAuthorization,
  ],
};
