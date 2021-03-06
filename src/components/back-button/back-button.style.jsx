import styled from 'styled-components';
import { colors, secondaryFont, device } from '../../styled'


const Container = styled.button`
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
    border: none;
    &:focus {
        outline: none;
        text-decoration: underline ${colors.neutral_light};
    }
    @media ${device.tablet} {
        top: 1rem;
        left: 8rem;
        width: 9.5rem;
        border-radius: 10px;
    }
    @media ${device.laptop_small} {
        left: 3.7rem;
    }
    @media ${device.laptop_large} {
        left: 4rem;
    }
    @media ${device.desktop} {
        left: 5.5rem;
    }
    @media ${device.desktop_large} {
        left: 8.5rem;
    }
    &.scrolled {
        top: 0.2rem;
        @media ${device.tablet} {
        position: relative; 
        top: 1rem;
        left: 2rem;
        width: 5.5rem;
        min-width: 5.5rem;
        }
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
    &.scrolled {
        @media ${device.tablet} {
        font-size: 0.6rem;
        }
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