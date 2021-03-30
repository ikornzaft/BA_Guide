import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    height: auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Main = styled.main`
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    &.scrolled {
      padding-top: 14rem;
    }
`;

const ErrorImage = styled.img`
  width: 25rem;
  height: 25rem;
`;


export { Container, Main, ErrorImage };