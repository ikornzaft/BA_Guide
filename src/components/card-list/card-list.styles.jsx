import styled from 'styled-components';

const ListContainer = styled.div`
  position: relative;
  width: 80%;
  margin: 2rem;
  padding: 0 5rem;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, 16rem);
  grid-auto-rows: 9rem;
  grid-gap: 2rem;
`;

const Pic = styled.img`
  position: absolute;
  width: 25rem;
  height: 25rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  
`;


export { ListContainer, Pic };