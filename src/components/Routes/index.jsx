import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { ROUTES } from 'consts';
import LoaderComponent from 'components/LoaderComponent';
import NewsFeed from 'pages/NewsFeed';
import Profile from 'pages/Profile';

const Routs = function Routs({ getFirstVideo, firstVideo }) {
  return (
    <div className="content">
      <React.Suspense fallback={<LoaderComponent />}>
        <Switch>
          <Route exact path={ROUTES.HOME}>
            <NewsFeed getVideo={getFirstVideo} />
          </Route>
          <Route path={`${ROUTES.USER_PROFILE}/:id`}>
            <Profile firstVideo={firstVideo} />
          </Route>
          <Route>
            <Redirect exact to={ROUTES.HOME} />
          </Route>
        </Switch>
      </React.Suspense>
    </div>
  );
};

Routs.propTypes = {
  getFirstVideo: PropTypes.func.isRequired,
  firstVideo: PropTypes.object.isRequired,
};
export default Routs;
