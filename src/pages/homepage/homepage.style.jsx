import styled from 'styled-components';

import { colors, device, secondaryFont } from '../../styled' 

const Container = styled.div`
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media ${device.tablet} {
            justify-content: space-space-around;
    }
`;

const Main = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    @media ${device.tablet} {
        flex-direction: row-reverse;
    }
    @media ${device.laptop_small} {
        max-width: 1000px;
    }
    @media ${device.laptop_large} {
        max-width: 1700px;
    }
    @media ${device.desktop} {
        max-width: 2000px;
        padding-bottom: 1rem;
    }
    @media ${device.desktop_large} {
        max-width: 2400px;
        padding-bottom: 10rem;
    }
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
    @media ${device.laptop_small} {
        margin-top: 0;
        height: 30rem;
        justify-content: flex-start;
    }
    @media ${device.laptop_large} {
        margin-top: 3rem;
        height: 40rem;
        justify-content: flex-start;
    }
    @media ${device.desktop} {
        margin-top: 2rem;
        padding-top: 2rem;
        height: 60rem;
        justify-content: flex-start;
    }
    @media ${device.desktop_large} {
        margin-top: 2rem;
        height: 60rem;
        justify-content: center;
    }
`;

const Header = styled.header`
    height: 8rem;
    width: 100%;
    background-color: ${colors.neutral_light};
    font-family: ${secondaryFont};
    color: ${colors.blue};
    @media ${device.tablet} {
        background-color: ${colors.neutral_medium};
    }
    @media ${device.laptop_large} {
        height: 10rem;
    }
    @media ${device.desktop} {
        height: 15rem;
    }
    @media ${device.desktop_large} {
        height: 20rem;
    }


    .header-kicker {
        margin: 1.2rem 0.9rem 0.3rem 0.9rem;
        font-weight: 100;
        font-size: 1.25rem;
        @media ${device.tablet} {
            font-size: 1.8rem;
        }
        @media ${device.desktop} {
            font-size: 3rem;
        }
        @media ${device.desktop_large} {
            font-size: 4rem;
        }
    }
    .header-title {
        margin: 0 0.9rem 0.2rem 0.9rem;
        font-size: 1.9rem;
        @media ${device.mobile} {
            font-size: 1.8rem;
        }
        @media ${device.tablet} {
            font-size: 2rem;
        }
        @media ${device.laptop_small} {
            font-size: 2.3rem;
        }
        @media ${device.desktop} {
            font-size: 4rem;
        }
        @media ${device.desktop_large} {
            font-size: 5rem;
        }
    }
    .header-subtitle {
        font-size: 1.5rem;
        margin: 0 0.9rem 0.8rem 0.9rem;
        color: ${colors.blue_medium};
        font-weight: 100;
        @media ${device.mobile} {
            font-size: 1.3rem;
        }
        @media ${device.tablet} {
            font-size: 1.7rem;
        }
        @media ${device.desktop} {
            font-size: 3rem;
        }
        @media ${device.desktop_large} {
            font-size: 3.7rem;
        }
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
        @media ${device.laptop_small} {
            margin-top: 1rem;
            margin-bottom: 1rem;
            font-size: 1.1rem;
        }
        @media ${device.desktop} {
            margin-top: 1rem;
            margin-bottom: 3rem;
            font-size: 2rem;
        }
        @media ${device.desktop_large} {
            margin-top: 1rem;
            margin-bottom: 5rem;
            font-size: 2.5rem;
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
    @media ${device.laptop_large} {
        width: 100%;
        align-items: flex-start;
        justify-content: center;
        margin-right: 2rem;
    }
    @media ${device.desktop} {
        width: 30rem;
        justify-content: flex-start;
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
        margin-left: 1rem;
        justify-content: center;
        gap: 2rem;
        height: 35rem;
        width: 35rem;
    }
    @media ${device.desktop} {
        margin-top: 1rem;
        padding-top: 2rem;
        height: 45rem;
    }
    @media ${device.desktop_large} {
        margin-top: 5rem;
        padding-top: 5rem;
        height: 70rem;
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
    @media ${device.laptop_small} {
        top: 0;
        opacity: 0.8;
        width: 30rem;
    }
    @media ${device.desktop} {
        top: 0;
        opacity: 0.8;
        width: 45rem;
    }
    @media ${device.desktop_large} {
        top: 10rem;
        opacity: 0.8;
        width: 65rem;
    }
`;

export { Container, Main, TextSection, Header, IconsContainer, TextContainer, ButtonContainer, MapImage, LeftIconsContainer, RightIconsContainer };