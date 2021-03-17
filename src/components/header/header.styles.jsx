import styled from 'styled-components';
import { colors, secondaryFont, device } from '../../styled';

const Container = styled.div`
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
    
    &.scrolled{
        position: fixed;
        flex-direction: row;
        top: 0;
        left: 0;
        margin-top:0;
        height: 4rem;
        background-color: ${colors.blue_light};
    }
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

export { Container };