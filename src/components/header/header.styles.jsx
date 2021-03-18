import styled from 'styled-components';
import { colors, secondaryFont, device } from '../../styled';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 12rem;
    min-width: 100%;
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
    &.scrolled{
        position: fixed;
        flex-direction: row;
        top: 0;
        left: 0;
        margin-top:0;
        height: 3rem;
        background-color: ${colors.blue_light};
        .header-kicker {
            display: none;
            font-size: 0.5rem;
            margin: 0 0 0 3rem;
            min-width: 12rem;
            @media ${device.tablet} {
                display: block;
                font-size: 0.9rem;
            }
        }
        .header-title {
            font-size: 1rem;
            margin: 0 3rem 0 0;
            min-width: 13rem;
            display: none;
            @media ${device.tablet} {
                display: block;
                font-size: 1.3rem;
            }
        }
    }
`;

export { Container };