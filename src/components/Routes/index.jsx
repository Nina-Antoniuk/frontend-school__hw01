import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NewsFeed from '../../pages/NewsFeed';
import Profile from '../../pages/Profile';
import LoaderComponent from '../LoaderComponent';
import { ROUTES } from '../../shared/js/consts';

const Routes = function Routes() {
  return (
    <div className="content">
      <React.Suspense fallback={<LoaderComponent />}>
        <Switch>
          <Route exact path={ROUTES.HOME}>
            <NewsFeed />
          </Route>
          <Route path={`${ROUTES.USER_PROFILE}/:id`}>
            <Profile />
          </Route>
          <Route>
            <Redirect exact to={ROUTES.HOME} />
          </Route>
        </Switch>
      </React.Suspense>
    </div>
  );
};

export default Routes;
