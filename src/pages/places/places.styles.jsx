import styled from 'styled-components';
import { colors, device, secondaryFont } from '../../styled'

const Main = styled.main`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow-x: hidden;
`;

const Container = styled.div`
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    padding-top: 2rem;
    @media ${device.laptop_small} {
        max-height: 100vh;
        padding-top: 3rem;
    }
    @media ${device.desktop} {
        padding-top: 5rem;
    }
    .leaflet-container {
        width: 250px;
        height: 250px;
        @media ${device.tablet} {
            width: 25rem;
            height: 17rem;
        }
        @media ${device.laptop_large} {
            width: 33rem;
            height: 21rem;
        }
        @media ${device.desktop} {
            width: 50rem;
            height: 35rem;
        }
        @media ${device.desktop_large} {
            width: 60rem;
            height: 45rem;
        }
    }
`;

const Header = styled.div`
    margin-top: 1.2rem;
    max-width: 320;
    text-align: center;
    @media ${device.tablet} {
        text-align: left;
        max-width: 60rem;
        padding-left: 8rem;
    }
    @media ${device.desktop} {
        margin-top: 1.6rem;
        max-width: 70vw;
    }
    @media ${device.desktop_large} {
        margin-top: 2rem;
        max-width: 70vw;
    }
`;

const Title = styled.h1`
    color: ${colors.blue};
    font-family: ${secondaryFont};
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    @media ${device.tablet} {
        margin-bottom: 0.8rem;
        font-size: 1.5rem;
    }
    @media ${device.laptop_small} {
        font-size: 1.8rem;
    }
    @media ${device.desktop} {
        font-size: 3rem;
    }
    @media ${device.desktop_large} {
        font-size: 4.5rem;
    }
`;

const Address = styled.h2`
    color: ${colors.blue_medium};
    font-family: ${secondaryFont};
    font-weight: 100;
    font-size: 1rem;
    margin-bottom: 1rem;
    @media ${device.tablet} {
        font-size: 1.5rem;
        margin-bottom: 2.5rem;
    }
    @media ${device.desktop} {
        font-size: 2rem;
    }
    @media ${device.desktop_large} {
        font-size: 4rem;
    }
`;

const DataContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${colors.neutral_light};
    border-radius: 10px;
    padding: 1rem 0;
    margin-bottom: 1rem;
    @media ${device.tablet} {
        padding: 0;
        flex-direction: row;
        height: 20rem;
    }
    @media ${device.laptop_large} {
        height: 25rem;
    }
    @media ${device.desktop} {
        height: 40rem;
    }
    @media ${device.desktop_large} {
        height: 60rem;
    }
`;

const NoDataContainer = styled.div`
    min-width: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1rem 0 1rem 0; 
    & h3 {
        color: ${colors.grey};
        font-weight: 300;
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
        @media ${device.desktop_large} {
            margin-top: 1rem;
            font-size: 2.5rem;
        }
    }
`;

const NoDataImage = styled.img`
    width: 25rem;
    height: 15rem;
    @media ${device.desktop_large} {
        width: 45rem;
        height: 25rem;
    }
`;

export { Main, Container, Header, Title, Address, DataContainer, NoDataContainer, NoDataImage };