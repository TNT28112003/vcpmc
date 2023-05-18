import React from 'react';
import { IRouter } from '@routers/interface';
import Playlist from '@assets/icon/playlist';

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
};
