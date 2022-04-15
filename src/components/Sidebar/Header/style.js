import styled, { css } from 'styled-components';
import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg';

const common = css`
    width: 24px;
    height: 24px;
    cursor: pointer;
`;

export const Header = styled.div`
    height: 60px;
    background: #fff;
    display: grid;
    place-items: center;
    margin-bottom: var(--margin);
    border-radius: var(--brd-radius);
    padding: ${({ collapsed }) => (!collapsed && '0 var(--aside-padding-x)')};
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: ${({ collapsed }) => (collapsed ? 'center' : '')};
    align-items: center;
`;

export const Title = styled.span`
    color: var(--black2);
    font-size: 20px;
    font-weight: 600;
`;

export const CollapseButton = styled(MenuIcon)`
    ${common}
    margin-right: 22px;
`;
export const ExpandButton = styled(MenuIcon)`
    ${common}
`;
