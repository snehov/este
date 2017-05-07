// @flow
import React from 'react';
import SwitchLocale from './SwitchLocale';
import linksMessages from '../../common/app/linksMessages';
import { Box, PageHeader, Paragraph, Text } from '../../common/components';
import {
  FormattedDate,
  FormattedMessage,
  FormattedNumber,
  FormattedRelative,
  defineMessages,
} from 'react-intl';
import { Title } from '../components';
//import axios from 'axios';
import MyAuth, {passwordLogin} from '../auth/MyAuth';

//import type, { User } from '../../common/types';
//import createUserFirebase from '../users/createUserFirebase';

const messages = defineMessages({
  unreadCount: {
    defaultMessage: `{unreadCount, plural,
      one {message}
      other {messages}
    }`,
    id: 'intl.page.unreadCount',
  },
});

const IntlPage = () => {
  const renderedAt = Date.now();
  const unreadCount = 123;

  return (
    <Box>mujLogin: {passwordLogin("brucebanner@strv.com", "kill3r", loginCallback)}
      <Title message={linksMessages.intl} />
      <PageHeader heading="react-intl" />
      <SwitchLocale />
      
    </Box>
  );
};




  


function loginCallback(data){
    console.log('callback from int',data);
    const user=  {
        displayName: data.displayName ,
        email: data.email,
        id: data.id,
        photoURL: data.photoURL || ''
      };
}

export default IntlPage;
