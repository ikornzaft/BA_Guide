import styled from 'styled-components';
import { colors, device } from '../../styled'

const PageFooter = styled.footer`
    width: 100vw;
    height: 1.6rem;
    background-color: ${colors.blue_light};
    display: flex;
    justify-content: center;    
    align-items: center;
    text-align: center;
    z-index: 30;
    @media ${device.desktop} {
        height: 2.5rem;
    }
    @media ${device.desktop_large} {
        height: 3rem;
    }
    .madeBy {
        font-size: 0.7rem;
        @media ${device.desktop} {
            font-size: 1rem;
        }
        @media ${device.desktop_large} {
            font-size: 1.5rem;
        }
    }
    .footer-link {
        font-size: 0.7rem;
        text-decoration: none;
        color: ${colors.blue};
        &:hover {
            color: ${colors.blue_medium};
        }
        @media ${device.desktop} {
            font-size: 1rem;
        }
        @media ${device.desktop_large} {
            font-size: 1.5rem;
        }
    }
`;

export { PageFooter };