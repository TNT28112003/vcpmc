import React from 'react';
import { IRouter } from '@routers/interface';
import Playlist from '@assets/icon/playlist';

export const routerViewPlaylistDetails: IRouter = {
  path: '/playlist/:id',
  name: 'common.playlist',
  loader: import('./Details'),
  exact: true,
};

export const routerViewPlaylistEdit: IRouter = {
  path: '/playlist/edit/:id',
  name: 'common.playlist',
  loader: import('./Edit'),
  exact: true,
};

export const routerViewPlaylistAdd: IRouter = {
  path: '/playlist/add',
  name: 'common.playlist',
  loader: import('./Add'),
  exact: true,
};
export const routerViewPlaylistAddRecord: IRouter = {
  path: '/playlist/add-record',
  name: 'common.playlist',
  loader: import('./AddRecord'),
  exact: true,
};

export const routerViewPlaylist: IRouter = {
  path: '/playlist',
  name: 'common.playlist',
  loader: import('./index'),
  exact: true,
  menu: {
    icon: <Playlist />,
    exact: true,
    activePath: /playlist/i,
    hideInNavbar: false,
  },
  routes: [
    routerViewPlaylistDetails,
    routerViewPlaylistEdit,
    routerViewPlaylistAdd,
    routerViewPlaylistAddRecord,
  ],
};
