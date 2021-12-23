import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import LoaderComponent from '../LoaderComponent/LoaderComponent';
import NewsFeed from '../../pages/NewsFeed/NewsFeed';
import Profile from '../../pages/Profile/Profile';

const Routs = function Routs({ getFirstVideo, firstVideo }) {
  return (
    <div className="content">
      <React.Suspense fallback={<LoaderComponent />}>
        <Switch>
          <Route exact path="/">
            <NewsFeed getVideo={getFirstVideo} />
          </Route>
          <Route path="/profile/:id">
            <Profile firstVideo={firstVideo} />
          </Route>
          <Route>
            <Redirect exact to="/" />
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
