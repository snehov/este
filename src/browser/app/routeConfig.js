// @flow
import type { State } from '../../common/types';
import HttpError from 'found/lib/HttpError';
import React from 'react';
import queryFirebase from './queryFirebase';
import { makeRouteConfig, Route } from 'found/lib/jsx';
import { onUsersPresence } from '../../common/users/actions';

// Pages
import App from './App';
import FieldsPage from '../fields/FieldsPage';
import HomePage from '../home/HomePage';
import IntlPage from '../intl/IntlPage';
import MePage from '../me/MePage';
import ProfilePage from '../me/ProfilePage';
import SettingsPage from '../me/SettingsPage';
import SignInPage from '../auth/SignInPage';
import EventsPage from '../events/EventsPage';
import UsersPage from '../users/UsersPage';
import OfflinePage from '../offline/offlinePage';

// Custom route to require viewer aka authenticated user.
const AuthorizedRoute = () => {};
AuthorizedRoute.createRoute = props => ({
  ...props,
  render: ({ Component, match, props }) => {
    const state: State = match.context.store.getState();
    if (!state.users.viewer) {
      // No redirect, just 401 Unauthorized, so we don't have to handle pesky
      // redirections manually. Check app/renderError.
      throw new HttpError(401);
    }
    return <Component {...props} />;
  },
});

const routeConfig = makeRouteConfig(
  <Route path="/" Component={App}>
    <Route Component={SignInPage} />
    
    <Route path="intl" Component={IntlPage} />
    <AuthorizedRoute path="/" Component={OfflinePage}>
        <Route path="/events" Component={EventsPage} />
        <Route path="/events/:eventID" Component={EventsPage} />
        <Route path="newevent" Component={FieldsPage} />
    </AuthorizedRoute>
    <AuthorizedRoute path="me" Component={MePage}>
      <Route path="profile" Component={ProfilePage} />
      <Route path="settings" Component={SettingsPage} />
      
    </AuthorizedRoute>
    
    <Route path="signin" Component={SignInPage} />
    
  </Route>,
);

const Nic = () => (
        <div></div>
);

export default routeConfig;
