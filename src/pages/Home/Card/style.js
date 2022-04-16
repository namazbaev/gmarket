import styled from "styled-components";
import Grocery from "assets/images/grocery.svg";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;
export const Card = styled.div`
  width: 250px;
  height: 150px;
  padding: 24px 0 20px 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;
  border-radius: var(--brd-radius);
  color: ${({ textColor }) => textColor || "var(--card-text-color)"};
  background-color: ${({ background }) => background || "var(--orange-card)"};
  background-position: 135px 40px;
  background-size: 150px;
  background-repeat: no-repeat;
  background-image: url(${({ img }) => img || ''});
`;
export const CardVisit = styled.button`
  width: 90px;
  height: 32px;
  border: none;
  outline: none;
  margin-top: auto;
  font-size: 12px;
  cursor: pointer;
  color: ${({ brandTextColor }) => brandTextColor || '#fff'};
  text-transform: uppercase;
  font-weight: 700;
  line-height: 18px;
  border-radius: 20px;
  background-color: ${({ btnColor }) => btnColor || 'var(--card-text-color)'};
`
export const GroceryImg = styled(Grocery)`
  width: 40px;
  height: 40px;
`;
export const Title = styled.h3`
  font-size: 22px;
  font-weight: 700;
  line-height: 22px;
  margin-bottom: 12px;
`;
export const Text = styled.p`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.01em;
`;
export const Info = styled.div`
  width: 65%;
`