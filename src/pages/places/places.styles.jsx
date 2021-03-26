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
    max-height: 100vh;
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    padding-top: 5rem;
    .leaflet-container {
        width: 30rem;
        height: 20rem;
    }
`;

const Header = styled.div`
    max-width: 60rem;
    padding-left: 8rem;
`;

const Title = styled.h1`
    color: ${colors.blue};
    font-family: ${secondaryFont};
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 0.8rem;
`;

const Address = styled.h2`
    color: ${colors.blue_medium};
    font-family: ${secondaryFont};
    font-weight: 100;
    font-size: 1.5rem;
    margin-bottom: 2.5rem;
`;

const DataContainer = styled.div`
    width: 100%;
    height: 22rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${colors.neutral_light};
    border-radius: 10px;
`;

const NoDataContainer = styled.div`
    min-width: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0 1rem 0; 
    & h3 {
        color: ${colors.grey};
        font-weight: 300;
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
    }
`;

const NoDataImage = styled.img`
  width: 25rem;
  height: 15rem;
`;

const Data = styled.div`
    max-width: 30rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 2rem;
    background-color:red;
`;

export { Main, Container, Header, Title, Address, DataContainer, NoDataContainer, NoDataImage, Data };