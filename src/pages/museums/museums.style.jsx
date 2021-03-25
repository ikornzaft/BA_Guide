import styled from 'styled-components';

import { colors, device, secondaryFont } from '../../styled' 

const Container = styled.div`
    position: relative;
    height: auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Header = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 12rem;
    width: 100%;
    margin-top: 2rem;
    font-family: ${secondaryFont};
    color: ${colors.blue};

    .header-kicker {
        margin: 1.2rem 0.9rem 0.3rem 0.9rem;
        font-weight: 100;
        font-size: 1.2rem;
        @media ${device.tablet} {
            font-size: 1.8rem;
        }
    }
    .header-title {
        margin: 0 0.9rem 0.2rem 0.9rem;
        font-weight: 100;
        font-size: 1.8rem;
        @media ${device.tablet} {
            font-size: 2.5rem;
        }
    }
`;

const Main = styled.main`
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
`;

const TextSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex: 0 1 45%;
    @media ${device.tablet} {
        height: 38rem;
    }
`;


const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem; 
    z-index: 10;
    .textcontainer-article {
        margin: 1rem;   
        font-weight: 300;
        @media ${device.tablet} {
                font-weight: 100;
               margin: 2rem 7rem 0 2rem;
            font-size: 1.4rem;
        }
    }
`;
    
const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
    @media ${device.tablet} {
        justify-content: flex-start;
        padding-left: 20rem;
    }
`;

const IconsContainer = styled.div`
    position: relative;
    flex: 0 1 55%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align:center;
    margin-top: 0;
    gap: 0.2rem;
    @media ${device.tablet} {
        //max-height: 35rem;
        margin-left: 1rem;
        justify-content: center;
        gap: 2rem;
        //display: relative;
        height: 35rem;
        width: 35rem;
    }
`;

const LeftIconsContainer = styled.div`
    display: flex;
    @media ${device.tablet} {
        flex-direction: column;
        gap: 2rem;
    }
`;

const RightIconsContainer = styled.div`
`;

const MapImage = styled.img`
    position: absolute;
    opacity: 0.4;
    top: -18rem;
    @media ${device.tablet} {
        top: 0;
        opacity: 0.8;
        width: 35rem;
    }
`;

const ErrorImage = styled.img`
  width: 25rem;
  height: 25rem;
`;


export { Container, Main, TextSection, Header, IconsContainer, TextContainer, ButtonContainer, MapImage, LeftIconsContainer, RightIconsContainer, ErrorImage };