import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Text } from './info-button.styles';

const InfoButton = ({ text, location }) => {
    let history = useHistory();
    const handleClick = () => {
      console.log('click');
      history.push(`Places/${location}`)
    };
    return (
        <Container onClick={handleClick}>
                <Text>{text}</Text>
        </Container>
    )
};

export { InfoButton };