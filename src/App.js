import React from 'react';
import { BrowserRouter as Router,Switch } from 'react-router-dom';
import {Home,SignUp,SignIn,Browse,MovieInfo} from './pages'
import * as Routes from './constants/route'
import { IsUserReDirect, ProtectedRoute } from './helper/routes';
import 'normalize.css';
import useAuthListener from './hooks/use-auth-listener';

export default function App() {
  const {user} = useAuthListener();
  
  return <Router>
    <Switch>
    <IsUserReDirect 
    user={user}
    loggedInPath={Routes.Browse}
    path={Routes.SignIn}
    exact
    >
      <SignIn/>
    </IsUserReDirect>

    <IsUserReDirect 
    user={user}
    loggedInPath={Routes.Browse}
    path={Routes.SignUp}
    exact
    >
      <SignUp/>
    </IsUserReDirect>

    <ProtectedRoute user={user} path={Routes.Browse} exact>
      <Browse/>
    </ProtectedRoute>

    <ProtectedRoute user={user} path={Routes.MovieInfo} exact>
      <MovieInfo/>
    </ProtectedRoute>

    <IsUserReDirect 
    user={user}
    loggedInPath={Routes.Browse}
    path={Routes.Home}
    exact
    >
 <Home/>
    </IsUserReDirect>

    
    </Switch>
  </Router>
}


