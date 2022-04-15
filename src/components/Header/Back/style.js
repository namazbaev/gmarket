import styled from "styled-components";
import { ReactComponent as LeftArrow } from 'assets/icons/left-arrow.svg'

export const LeftArrowIcon = styled(LeftArrow)`
    width: 24px;
    height: 24px;
`
export const Back = styled.button`
    width: 60px;
    height: 60px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: 0.3s;
    background-color: var(--white);
    border-radius: var(--brd-radius);
    box-shadow: 0px 2px 2px rgba(223, 226, 235, 0.79);
    &:hover {
        background-color: var(--hover-color);
    }
`