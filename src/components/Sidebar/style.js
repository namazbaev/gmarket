import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background: #fff;
    overflow: hidden;
    flex-direction: column;
    border-radius: var(--brd-radius);
    box-shadow: 2px 0px 2px rgba(223, 226, 235, 0.79)
`;

export const BodyContainer = styled.div`
    overflow: hidden;
`;

export const Layout = styled.div`
    z-index: 10;
    transition: 0.5s;
    background: var(--layout-background);
    width: ${({ collapsed }) => (collapsed ? 'var(--aside-collapsed-width)' : 'var(--aside-width)')};
    min-width: ${({ collapsed }) => (collapsed ? 'var(--aside-collapsed-width)' : 'var(--aside-width)')};
`;
