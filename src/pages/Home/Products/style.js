import styled, { css } from "styled-components";
import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg';
import { ReactComponent as LikedIcon } from 'assets/icons/liked.svg';
import { ReactComponent as AvocadoImg } from 'assets/images/avocado.svg';
import { ReactComponent as DiscountIcon } from 'assets/icons/discount.svg';
import { ReactComponent as RightArrowIcon } from 'assets/icons/right-arrow.svg';

const commonDisplay = css`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Container = styled.div`

`
export const Avocado = styled(AvocadoImg)`
    width: 130px;
    height: 130px;
    margin-top: 10px;
`
export const Image = styled.img`
    max-width: 100px;
    max-height: 100px;
    margin-top: 25px;
`
export const Plus = styled(PlusIcon)`
    width: 14px;
    height: 14px;
`
export const RightArrow = styled(RightArrowIcon)`
    /* width: 32px;
    height: 32px; */
`
export const Liked = styled(LikedIcon)`
    width: 24px;
    height: 24px;
    cursor: pointer;
    position: absolute;
    top: 3%;
    right: 3%;
    &:hover {
        path {
            fill: black;
        }
    }
`
export const DiscountIc = styled(DiscountIcon)``
export const Head = styled.div`
    margin-top: 42px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ProductCard = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 10px 15px;
    align-items: center;
    align-content: space-between;
    justify-content: space-between;
    box-shadow: var(--box-shadow);
    background-color: var(--white);
    border-radius: var(--brd-radius);   
`
export const Text = styled.p`
    margin: 0;
    display: flex;
    align-items: center;
    font-weight: 500;
    line-height: 16px;
    color: var(--black);
    font-size: ${({ size }) => size || '18px'};
    cursor: ${({ cursor }) => cursor || ''};
    letter-spacing: -0.02em;
    &:hover {
        color: var(--black2);
        transition: var(--transition);
    }
`
export const Card = styled.div`
    ${commonDisplay};
    width: 190px;
    height: 232px;
    flex-direction: column;
    align-content: space-between;
    position: relative;
    background-color: var(--white);
`
export const DiscountBtn = styled.button`
    ${commonDisplay};
    cursor: pointer;
    width: 38px;
    height: 38px;
    border: none;
    outline: none;
    top: 0;
    left: 0;
    position: absolute;
    border-radius: 50%;
    background-color: var(--pink);
    &:hover {
        background-color: #F5DDE2;
        transition: var(--transition);
    }
`
export const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* position: relative; */
`
export const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const Name = styled.p`
    width: 80%;
    margin: 15px 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-right: auto;
    color: var(--black);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
export const Bottom = styled.div`
    width: 100%;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Price = styled.span`
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    color: var(--black);
`
export const AddBtn = styled.button`
    ${commonDisplay};
    width: 40px;
    height: 40px;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    background-color: var(--btn-color);

    &:hover {
        transition: var(--transition);
        background-color: var(--btn-hover-color);
    }
`