import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 12px 0;
    border-top: ${({ isBottom }) => isBottom ? '1px solid #E6E7EB' : ''};
    /* background: ${({ active }) => ((active) ? 'var(--aside-item-active)' : '')}; */
`;

export const Title = styled.span`
    font-size: 13px;
    font-weight: 550;
    color: ${({ hovered, active }) => ((hovered || active) ? '#000' : '#A2A3B7')};
    opacity: ${({ collapsed }) => (collapsed ? '0' : '1')};
    transition: 0.1s;
`;
export const Link = styled(NavLink)`
    text-decoration: none;
`
export const IconContainer = styled.div`
    display: 'flex';
    margin-right: 25px;
    svg {
        width: 24px;
        height: 24px;
        path {
            /* opacity: .3; */
            fill: ${({ active }) => active ? 'var(--green)' : 'var(--menu-icon-color)'};
        }
    }
`;
