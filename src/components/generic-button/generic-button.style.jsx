import styled from 'styled-components';
import { colors, secondaryFont, device } from '../../styled'


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 9.5rem;
    margin-bottom: 2rem;
    border-radius: 10px;
    background-color: ${colors.blue};
    overflow: hidden;
    cursor: pointer;
    &:hover {
        transition: background-color 0.5s;
        background-color: ${colors.blue_medium};
    }
    `;

const Text = styled.h3`
    font-family: ${secondaryFont};
    color: ${colors.neutral_light};
    font-size: 0.8rem;
    font-weight: 100;
    @media ${device.tablet} {
        font-size: 1rem;
    }
`;

export { Container, Text };