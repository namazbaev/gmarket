import styled from "styled-components";
import { ReactComponent as IconClose } from "assets/icons/close.svg";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  background: transparent;
  display: grid;
  place-items: center;
  overflow-y: hidden;
  transition: transform 0.3s ease;
  transform: ${({ open }) => (open ? "scale(1)" : "scale(0)")};
`;

export const Content = styled.div`
  min-width: 16rem;
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  background: white;
  border-radius: 8px;
  box-shadow: black;
  box-shadow: -4px 1px 22px -6px rgba(0, 0, 0, 0.36);
`;

export const Header = styled.div`
  height: 3.4rem;
  background: white;
  display: flex;
  border-bottom: 1px solid #ebebf3;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

export const Title = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

export const CloseButton = styled.button`
  padding: 0;
  margin: 0;
  width: 2rem;
  height: 2rem;
  display: grid;
  place-items: center;
  border: none;
  overflow: hidden;
  border-radius: 0.25rem;
  background: transparent;
  cursor: pointer;
  transition: transform 0.5s ease-in;
  transform: ${({ open }) => (!open ? "scale(1)" : "scale(0)")};
  &:focus {
    outline: none;
    background: #f8f8f8;
  }
  &:hover {
    background: #f8f8f8;
  }
`;

export const Body = styled.div`
  padding: 1.5rem;
  height: 100%;
  overflow: auto;
`;

export const CloseIcon = styled(IconClose)``;