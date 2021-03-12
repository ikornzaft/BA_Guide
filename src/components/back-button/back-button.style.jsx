import styled from 'styled-components';
import { colors, secondaryFont, device } from '../../styled'


const Container = styled.div`
    position: absolute;
    z-index: 40;
    top: 0.4rem;
    left: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 50%;
    height: 2.5rem;
    width: 2.5rem;
    margin-bottom: 2rem;
    background-color: ${colors.blue};
    overflow: hidden;
    cursor: pointer;
    @media ${device.tablet} {
        top: 1rem;
        left: 8rem;
        width: 9.5rem;
        border-radius: 10px;
    }
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
    display: none;
    @media ${device.tablet} {
        display: inline;
        font-size: 1rem;
    }
`;

const Arrow = styled.img`
    width: 1rem;
    height: 1rem;
    @media ${device.tablet} {
        display: none;
        font-size: 1rem;
    }
`;

export { Container, Text, Arrow };