import styled from "styled-components";
import { ReactComponent as Cart } from 'assets/icons/cart.svg'
import { ReactComponent as CloseIcons } from 'assets/icons/close.svg'

export const Container = styled.div`
    width: 138px;
    height: 60px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: space-evenly;
    background-color: var(--white);
    border-radius: var(--brd-radius);
    &:hover {
        background-color: var(--hover-color);
    }
`
export const CartButton = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    outline: none;
    display: flex;
    cursor: pointer;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background-color: var(--green);
`
export const CartIcon = styled(Cart)`
    width: 20px;
    height: 20px;
`
export const Sum = styled.span`
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: var(--black);
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 70vh;
    overflow-y: scroll;
`
export const Item = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 25px;
    justify-content: space-around;
    border: 1px solid #F8F8F8;
`
export const Counter = styled.div`
    width: 30px;
    height: 90px;
    align-items: center;
    display: flex;
    flex-shrink: 0;
    border-radius: 200px;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--layout-background);
`
export const IncDecBtn = styled.button`
    border: none;
    background-color: transparent;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 100%;
    padding: 10px;
    cursor: pointer;
    color: rgb(119, 121, 140);
`
export const Count = styled.span`
    pointer-events: none;
`
export const Image = styled.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
    margin: 0px 20px;
`
export const ItemInfo = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
`
export const ItemName = styled.span`
    font-size: 15px;
    line-height: 1.5;
    margin-bottom: 0px;
    color: var(--black);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
export const Price = styled.span`
    font-size: 16px;
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 10px;
    color: rgb(0, 158, 127);
`
export const TotalPrice = styled.span`
    margin-left: auto;
    color: var(--black);
`
export const RemoveIcon = styled(CloseIcons)``
export const RemoveBtn = styled.button`
    padding: 5px;
    border: 0px;
    outline: 0px;
    display: flex;
    align-items: center;
    margin-left: 15px;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.25);
    transition: all 0.4s ease 0s;
    background-color: transparent;
    &:hover {
        background-color: var(--hover-color);
    }
`
export const Footer = styled.div`
    padding: 30px;
`