import styled from "styled-components";
import { ReactComponent as TimeIcons } from 'assets/icons/time.svg'
import { ReactComponent as CloseIcons } from 'assets/icons/close.svg'

export const Container = styled.div`
    width: 210px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--white);
    border-radius: var(--brd-radius);
`
export const Content = styled.div`
    width: 190px;
    height: 40px;
    padding: 0 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 50px;
    background-color: var(--orange-background);
    &:hover {
        transition: var(--transition);
        background-color: var(--orange-background-hover);
    }
`
export const Time = styled.span`
    color: var(--orange);
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.02em;
`
export const CloseBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center ;
    width: 32px;
    height: 32px;
    border: none;
    cursor: pointer;
    background-color: transparent;
    &:hover {
        background-color: var(--hover-color);
    }
`
export const Close = styled(CloseIcons)`
    width: 24px;
    height: 24px;
`
export const TimeIcon = styled(TimeIcons)`
    width: 20px;
    height: 20px;
`
export const HeaderTitle = styled.h3`
    margin: 0;
    font-weight: 500;
    font-size: 22px;
    line-height: 16px;
    color: var(--black);
    letter-spacing: -0.02em;
`
export const Drawer = styled.div`
    height: 100%;
    background: white;
    position: fixed;
    top: 0;
    right: 0;
    width: 30%;
    z-index: 200;
    width: ${({ width }) => width || '30%'};
    padding: ${({ padding }) => padding || '30px 0 30px 30px'};
    box-shadow: 1px 0px 7px rgba(0,0,0,0.5); 
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-out;
`
export const DrawerHeader = styled.div`
    width: 100%;
    padding: ${({ padding }) => padding || 0};
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const DrawerBody = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 42px;
    overflow-x: hidden;
`
export const BackDrop = styled.div`
    position: fixed;
    width: 100vw;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 100;
    top: 0;
    right: 100%;
`
