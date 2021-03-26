import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Text } from './info-button.styles';

const InfoButton = ({ page, text, location }) => {
    let history = useHistory();
    const handleClick = () => {
      history.push(`Places/${location}`)
    };
    return (
        <Container onClick={handleClick}>
                <Text>{text}</Text>
        </Container>
    )
};

export { InfoButton };