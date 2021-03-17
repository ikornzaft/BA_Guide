import React from 'react';

import { Container, Text } from './info-panel-button.style';

const InfoPanelButton = ({ text, buttonSize, onClick }) => (
    <Container buttonSize={buttonSize} onClick={onClick}>
            <Text>{text}</Text>
    </Container>
);

export { InfoPanelButton };