import styled from 'styled-components';
import { colors, secondaryFont, device } from '../../styled'


const Container = styled.button`
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 2.2rem;
    width: ${props => props.buttonSize}rem;
    margin-bottom: 1rem;
    border-radius: 10px;
    background-color: ${colors.blue};
    overflow: hidden;
    cursor: pointer;
    border: none;
    &:focus {
        outline: none;
        text-decoration: underline ${colors.neutral_light};
    }
    @media ${device.laptop_large} {
        margin-bottom: 2rem;
        transform: translateX(-150%);
    }
    @media ${device.desktop} {
        transform: translateX(0);
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
    @media ${device.tablet} {
        font-size: 1rem;
    }
`;

export { Container, Text };