import styled from 'styled-components'
import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg'
import { ReactComponent as ShareIcon } from 'assets/icons/share.svg'


export const IconPlus = styled(PlusIcon)`
    width: 12px;
    height: 12px;
    path {
        fill: #fff;
    }
`
export const IconShare = styled(ShareIcon)`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`
export const Text = styled.p`
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    color: var(--orange);
    letter-spacing: -0.01em;
`
export const PlusButton = styled.button`
    width: 24px;
    height: 24px;
    cursor: pointer;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    background-color: var(--green);
    outline: none;
    border: none;
    border-radius: 50%;
    transition: 0.2s;
    &:hover {
        background-color: var(--green-hover);
    }
`
export const ShareCard = styled.div`
    cursor: pointer;
    margin: 5px 0 50px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 181px;
    height: 40px;
    border-radius: var(--brd-radius);
    background-color: var(--orange-background);
    &:hover {
        transition: var(--transition);
        background-color: var(--orange-background-hover);
    }
`
