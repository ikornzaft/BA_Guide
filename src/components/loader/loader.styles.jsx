import styled from 'styled-components';
import { colors } from "../../styled/";

const Container = styled.div` 
    margin: 50px auto 0;
    text-align: center;

`;

const Loading = styled.span`
    color: ${colors.blue};
    margin-right: 0.5rem;
    font-size: 1.1rem;
`;

const Dot = styled.span`
    display: inline-block;
    height: 10px;
    width: 10px;
    background: ${colors.blue};
    border-radius: 100%;
    animation: loading 2s infinite ease;
    margin: 0.1rem;
    &.dot-2 { 
        animation-delay: .2s; 
    }
    &.dot-3 { 
        animation-delay: .4s; 
    }
    @keyframes loading {
        0% { transform: translateY(0px); }
        20% { transform: translateY(-6px); }
        40% { transform: translateY(6px); }
        60% { transform: translateY(0); }
        100% { transform: translateY(0); }
    };
`;

export { Container, Loading, Dot };