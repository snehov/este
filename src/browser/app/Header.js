// @flow
import type { State, User } from '../../common/types';
import React from 'react';
import linksMessages from '../../common/app/linksMessages';
import { Box } from '../../common/components';
import { FormattedMessage } from 'react-intl';
import { Link } from '../components';
import { compose } from 'ramda';
import { connect } from 'react-redux';

const HeaderLink = ({ to, message, ...props }) => (
  <FormattedMessage {...message}>
    {message => (
      <Link
        backgroundColor="primary"
        bold
        color="white"
        paddingHorizontal={0.5}
        paddingVertical={0.5}
        to={to}
        {...props}
      >
        {message}
      </Link>
    )}
  </FormattedMessage>
);

type HeaderProps = {
  viewer: ?User,
};

const Header = ({ viewer }: HeaderProps) => (
        
  <Box
    backgroundColor="primary"
    flexWrap="wrap"
    flexDirection="row"
    marginVertical={0.5}
    paddingHorizontal={0.5}
  >
    { JSON.stringify(viewer)}
    {!viewer &&<HeaderLink exact to="/" message={linksMessages.home} />}
    
    {viewer && <HeaderLink to="/events" message={linksMessages.todos} />}
    {viewer && <HeaderLink to="/newevent" message={linksMessages.fields} />}
    {viewer && <HeaderLink to="/intl" message={linksMessages.intl} />}
    {viewer && <HeaderLink to="/me" message={linksMessages.me} />}
    {!viewer && <HeaderLink to="/signin" message={linksMessages.signIn} />}
  </Box>
);

export default compose(
  connect((state: State) => ({ viewer: state.users.viewer })),
)(Header);
