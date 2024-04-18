import Home from '../pages/Home';
import Education from '../pages/Education';
import Target from '../pages/Target';
import Hobby from '../pages/Hobby';

const PublicRoutes = [
  { path: '/', component: Home },
  { path: '/education', component: Education },
  { path: '/target', component: Target },
  { path: '/hobby', component: Hobby },
];

const PrivateRoutes = [];

export { PublicRoutes, PrivateRoutes };
