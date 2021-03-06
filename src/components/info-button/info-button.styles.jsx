import styled from 'styled-components';
import { colors, secondaryFont } from '../../styled'


const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.6rem;
    width: 5rem;
    border-radius: 7px;
    background-color: ${colors.neutral_light};
    overflow: hidden;
    cursor: pointer;
    border: 0;
    &:focus {
        outline: none;
        text-decoration: underline ${colors.grey};
    }
    &:hover {
        transition: background-color 0.5s;
        background-color: ${colors.blue_light};
    }
    `;

const Text = styled.h3`
    font-family: ${secondaryFont};
    color: ${colors.grey};
    font-size: 0.6rem;
    font-weight: 100;
`;

export { Container, Text };
