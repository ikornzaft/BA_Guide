import styled from 'styled-components';

import { device } from '../../styled'

const ListContainer = styled.div`
  width: 80%;
  margin: 2rem;
  padding: 0 5rem;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, 16rem);
  grid-auto-rows: 10rem;
  grid-gap: 2rem;
`;

export { ListContainer };