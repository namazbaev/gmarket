import styled, { css } from "styled-components";
import { ReactComponent as Search } from 'assets/icons/search.svg'
import { ReactComponent as Properties } from 'assets/icons/light-properties.svg'

const iconCommon = css`
    width: 20px;
    height: 20px;
    cursor: pointer;
    position: absolute;
    top: 33%;
    &:hover {
        transition: 0.3s;
        path {
            fill: #000;
        }
    }
`

export const Container = styled.div`
    width: 359px;
    position: relative;
`
export const SearchIcon = styled(Search)`
    left: 7%;
    ${iconCommon}
`
export const PropertyIcon = styled(Properties)`
    right: 10%;
    ${iconCommon}
`
export const Input = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    padding: 0 60px;
    color: var(--black2);
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    box-shadow: var(--box-shadow);
    border-radius: var(--brd-radius);
    &::placeholder {
        color: var(--menu-icon-color);
    }
`