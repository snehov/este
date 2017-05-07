// @flow
import type { State, User } from '../../common/types';
import React from 'react';
import SignOut from '../auth/SignOut';
import getUserPhotoUrl from '../../common/users/getUserPhotoUrl';
import linksMessages from '../../common/app/linksMessages';
import { Box, Image, Text } from '../../common/components';
import { FormattedMessage } from 'react-intl';
import { Link, Title } from '../components';
import { compose } from 'ramda';
import { connect } from 'react-redux';

const HeaderLink = ({ message, ...props }) => (
  <FormattedMessage {...message}>
    {message => (
      <Link paddingHorizontal={0.5} {...props}>
        {message}
      </Link>
    )}
  </FormattedMessage>
);

const Header = () => (
  <Box flexDirection="row" marginBottom={1} marginHorizontal={-0.5}>
    <HeaderLink exact to="/events" message={linksMessages.allEvents} />
    <HeaderLink to="/events/future" message={linksMessages.futureEvents} />
    <HeaderLink to="/events/past" message={linksMessages.pastEvents} />
  </Box>
);

type MePageProps = {
  children: any,
  viewer: ?User,
};

const OfflinePage = ({ children, viewer }: MePageProps) =>
   !viewer
    ? null
    : <Box>
        <Title message={linksMessages.me} />
        <Header />
        {children ||
          <Box>
            <Text>{viewer.displayName}</Text>
            <Box marginVertical={1}>
              <Image
                src={getUserPhotoUrl(viewer)}
                size={{ height: 100, width: 100 }}
                title={viewer.displayName}
              />
            </Box>
            <Box flexDirection="row">
              <SignOut />
            </Box>
          </Box>}
      </Box>;

export default compose(
  connect((state: State) => ({
    viewer: state.users.viewer,
  })),
)(OfflinePage);
