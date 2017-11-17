import App from './containers/App';
import Categories from './containers/Categories';
import Projects from './containers/Projects';
import Technologies from './containers/Technologies';
import Descriptions from './containers/Descriptions';

import { RouteConfig } from 'react-router-config';

export const routes: RouteConfig[] = [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/categories',
        component: Categories,
      },
      {
        path: '/projects',
        component: Projects,
      },
      {
        path: '/technologies',
        component: Technologies,
      },
      {
        path: '/descriptions',
        component: Descriptions,
      },
    ],
  },
];
