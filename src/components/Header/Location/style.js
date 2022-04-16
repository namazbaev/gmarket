import { YMaps, Map } from 'react-yandex-maps';
import styled, { css } from "styled-components";
import { ReactComponent as Down } from 'assets/icons/down-arrow.svg'
import { ReactComponent as Location } from 'assets/icons/location.svg'

export const common = css`
    width: 20px;
    height: 20px;
    cursor: pointer;
`
export const Container = styled.div`
    width: 328px;
    height: 60px;
    padding: 0 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    box-shadow: var(--box-shadow);
    background-color: var(--white);
    border-radius: var(--brd-radius);
    &:hover {
        transition: 0.3s;
        background-color: var(--hover-color);
    }
`
export const Text = styled.p`
    margin: 0;
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    color: var(--black2);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
export const DownIcon = styled(Down)`
    ${common}
    transition: 0.3s;
    transform: ${({ active }) => active ? 'rotate(180deg)' : ''};
`
export const LocationIcon = styled(Location)`
    ${common}
`
export const IconBtn = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    outline: none;
    margin: 0 5px;
    background-color: transparent;
`
export const YMap = styled(YMaps)`
    width: 900px;
    height: 500px;
    z-index: 100;
`
export const MapYandex = styled(Map)`
    width: 900px;
    height: 500px;
`