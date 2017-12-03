import React from 'react';
import { PropTypes } from 'prop-types';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import { ActivityLogPage } from './activity-log';
import { QuestsPage } from './quest';
import { DailiesPage } from './daily';
import { PitfallsPage } from './pitfall';
import { ProfilePage } from './profile';
import { NotFoundPage } from './not-found';

export default function getRoutes({ dispatch, getState }) { // eslint-disable-line no-unused-vars
  return (
    <Route path="/" component={App}>
      <IndexRoute component={QuestsPage} />
      {/* <Route path="/quests" component={QuestsPage} /> */}
      <Route path="/dailies" component={DailiesPage} />
      <Route path="/pitfalls" component={PitfallsPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/activity" component={ActivityLogPage} />
      <Route path="*" component={NotFoundPage} />
    </Route>
  );
}

getRoutes.propTypes = {
  dispatch: PropTypes.func.isRequired,
  getState: PropTypes.func.isRequired
};