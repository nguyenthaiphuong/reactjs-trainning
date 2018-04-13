import {Application} from 'components/Application';

import {
  HomePage,
  About,
  Contact
} from 'pages';

const routes = [
  {
    component: Application,
    routes: [
      {path: '/home', exact: true, component: HomePage},
      {path: '/about', exact: true, component: About},
      {path: '/contact', exact: true, component: Contact}
    ]
  }
];

export default routes;
