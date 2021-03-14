import React from 'react';
import { withRouter } from 'react-router-dom';

import { Container, Text } from './generic-button.style';

const GenericButton = ({ name, text, history, match, style, size }) => (
    <Container className={style, size} onClick={() => history.push(`${match.url}${name}`)}>
            <Text className={size}>{text}</Text>
    </Container>
);

const GenericButtonWithRouter = withRouter(GenericButton);

export { GenericButtonWithRouter };