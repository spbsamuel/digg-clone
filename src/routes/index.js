import HomeRoute from './Home';
import StandardLayout from 'layouts/StandardLayout'

export const createRoutes = (store) => {

  return ({
    path: '',
    childRoutes: [
      {
        path: '',
        component: StandardLayout,
        childRoutes: [
          HomeRoute(store),
        ]
      }
    ]
  })
};

export default createRoutes;
