import React from 'react';
import { withRouter } from 'react-router-dom';

import arrow from '../../assets/icons/arrow.svg';
import { Container, Text, Arrow } from './back-button.style';

const BackButton = ({ text, history }) => (
    <Container onClick={() => history.goBack()}>
            <Arrow src={arrow} alt="Back to Homepage" />
            <Text>{text}</Text>
    </ Container>
);

const BackButtonWithRouter = withRouter(BackButton);

export { BackButtonWithRouter };