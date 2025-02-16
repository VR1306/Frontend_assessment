import React from 'react'
import Public from './public'
import { useRoutes } from 'react-router-dom';

//Lazy load Home component
const Home = React.lazy(() => import('../components/modules'));

const Routes = () => {
  const routes = useRoutes([
    {
      element: <Public />,
      children: [{
          path: "/",
          exact: true,
          element: < Home/>,
      }]
  }
  ])
  return routes
}

export default Routes