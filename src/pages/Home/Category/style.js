import styled from "styled-components";
import { ReactComponent as Properties } from 'assets/icons/properties.svg';

export const Container = styled.div`
    display: flex;
    margin-top: 50px;
    flex-direction: column;
    justify-content: space-between;
`
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const FilterButton = styled.button`
    width: ${({ width }) => width || 'auto'};
    height: ${({ height }) => height || '50px'};
    padding: ${({ padding }) => padding || '0 24px'};
    border: none;
    outline: none;
    display: flex;
    font-size: 14px;
    cursor: pointer;
    font-weight: 500;
    color: #727476;
    align-items: center;
    justify-content: center;
    border-radius: var(--brd-radius);
    background-color: ${({ selected }) => selected ? '#fff' : 'var(--btn-color)'};
    &:hover, &:active, &:focus {
        color: var(--black);
        transition: var(--transition) ease-in;
        box-shadow: var(--box-shadow);
        background-color: var(--white);
    }
`
export const PropertyIcon = styled(Properties)`
    width: 20px;
    height: 20px;
`