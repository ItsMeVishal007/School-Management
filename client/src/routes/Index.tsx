import Home from '../Pages/home/Index';
import About from '../Pages/home/About';
import Project from '../Pages/home/Project';

export const AllRoutes: { path: string;  component: any }[] = [
  {
    path: '/',
  
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/project',
    component: Project,
  },
];
