import Banner from "assets/images/banner.png";
import styled, { css } from "styled-components";
import { ReactComponent as Shop } from "assets/icons/shop.svg";
import { ReactComponent as Star } from "assets/icons/star.svg";
import { ReactComponent as InfoD } from "assets/icons/info.svg";
import { ReactComponent as Saved } from "assets/icons/saved.svg";
import { ReactComponent as Recipe } from "assets/icons/recipes.svg";
import { ReactComponent as Delivery } from "assets/icons/delivery.svg";
import { ReactComponent as Sunlight } from "assets/images/sunlight.svg";
export const iconCommon = css`
  width: 32px;
  height: 32px;
  margin-bottom: 12px;
  path {
    fill: var(--menu-icon-color);
    opacity: 1;
  }
  &:hover {
    path {
      fill: var(--white);
    }
  }
`;
export const infoIconCommon = css`
  width: 20px;
  height: 20px;
  margin-right: 12px;
`;
export const Container = styled.div`
  height: 293px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;
`;
export const LeftSection = styled.div`
  width: 88%;
  height: 293px;
  display: flex;
  outline: none;
  border: none;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid #d0d3db;
  border-radius: var(--brd-radius);
`;
export const RightSection = styled.div`
  width: 12%;
  height: 293px;
  padding: 10px;
  display: flex;
  margin-left: var(--margin);
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  background-color: var(--white);
  box-shadow: var(--box-shadow);
  border-radius: var(--brd-radius);
  &:hover {
    color: var(--white);
  }
`;
export const Card = styled.div`
  height: 130px;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: var(--transition);
  background-color: transparent;
  border-radius: var(--brd-radius);
  &:hover {
    span {
      color: var(--white);
    }
    svg {
      path {
        fill: var(--white);
      }
    }
    background-color: var(--black2);
  }
`;
export const Text = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${({ star }) => (star ? "var(--black)" : "var(--menu-icon-color)")};
`;
export const TopSection = styled.div`
  width: 100%;
  height: 70%;
  position: relative;
  background: url(${Banner}) top / cover no-repeat;
`;
export const BottomSection = styled.div`
  width: 100%;
  height: 30%;
  padding: 0 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SunlightBtn = styled.button`
  width: 70px;
  height: 70px;
  border: none;
  outline: none;
  left: 2%;
  bottom: -5%;
  cursor: pointer;
  position: absolute;
  border-radius: 15px;
  backdrop-filter: blur(24.4645px);
  background: rgba(255, 255, 255, 0.58);
`;
export const ShopIcon = styled(Shop)`
  ${iconCommon}
`;
export const RecipeIcon = styled(Recipe)`
  ${iconCommon}
`;
export const SunlightIcon = styled(Sunlight)`
  width: 52.5px;
  height: 52.5px;
`;
export const Title = styled.h3`
  margin: 0;
  display: flex;
  font-weight: 500;
  font-size: 28px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: var(--black);
`;
export const Info = styled.ul`
  padding: 0;
  display: flex;
  margin-right: auto;
  align-items: center;
`;
export const InfoIcons = styled.i`
  display: flex;
`;
export const InfoItem = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  width: auto;
  line-height: 25px;
  margin-left: 26px;
  &:before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    margin-right: 20px;
    background-color: #d0d3db;
  }
`;
export const InfoText = styled.a`
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: var(--black);
  border-bottom: 2px dotted;
`;
export const StarWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const StarIcon = styled(Star)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-right: 6px;
`;
export const InfoIcon = styled(InfoD)`
  ${infoIconCommon}
`;
export const SavedIcon = styled(Saved)`
  ${infoIconCommon}
`;
export const DeliveryIcon = styled(Delivery)`
  ${infoIconCommon}
`;
