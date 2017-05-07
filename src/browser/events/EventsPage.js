// @flow
import Buttons from './Buttons';
import NewTodo from './NewTodo';
import React from 'react';
import Events from './Events';
import linksMessages from '../../common/app/linksMessages';
import { Box, PageHeader } from '../../common/components';
import { FormattedMessage } from 'react-intl';
import { Title, Link } from '../components';


const EventsPage = (props) => (
       
        
  <Box>
    <Title message={linksMessages.todos} />
    <Link to='/events/event1'>event1</Link>&nbsp;
    <Link to='/events/event2'>event2</Link>&nbsp;
    {
    (props.params.eventID === 'future')?
        <div>future events as hell</div>
    :
            <div>nic</div>
    } 
     { props.params.eventID && <h2>Event detail: {props.params.eventID}</h2>}
    <FormattedMessage {...linksMessages.todos}>
      {message => <PageHeader heading={message} />}
     
    </FormattedMessage>
    <NewTodo />
    <Events />
    <Buttons />
  </Box>
);

export default EventsPage;
