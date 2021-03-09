import styled from 'styled-components';
import { colors, device, secondaryFont } from '../../styled'


const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6.5rem;
    width: 6.5rem;
    border-radius: 50%;
    border: 4px solid ${colors.blue_medium};
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 2.5rem;
    @media ${device.laptop_small} {
        margin-bottom: 0;
        height: 10rem;
        width: 10rem;
        border-width: 6px;
        left: ${props => props.positionx}rem;
        top: ${props => props.positiony}rem;
    }
`;

const Image = styled.div`
    // position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    ${Container}:hover & {
        transform: scale(1.3);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
`;

const NameTag = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 4.6rem;
    height: 1.5rem;
    opacity: 0.8;
    border-radius: 5px;
    background-color: ${colors.neutral_light};
    @media ${device.laptop_small} {
        height: 2.2rem;
        width: 7rem;
    }
    ${Container}:hover & {
        opacity: 0.9;
    }
`;

const NameText = styled.h3`
    font-family: ${secondaryFont};
    font-size: 0.6rem;
    font-weight: 100;
    @media ${device.laptop_small} {
        font-size: 0.9rem;
    }
`;

export { Container, Image, NameTag, NameText };