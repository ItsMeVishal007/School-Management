import Home from '../Pages/home/Index';
import About from '../Pages/home/About';

export const AllRoutes: { path: string; component: any }[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
];
