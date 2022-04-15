import styled, { css } from 'styled-components';
import { ReactComponent as NextIcon } from 'assets/icons/next.svg'
import { ReactComponent as PreviousIcon } from 'assets/icons/previous.svg'
export const Frame = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const common = css`cursor: pointer`
export const Next = styled(NextIcon)`${common}`
export const Previous = styled(PreviousIcon)`${common}`
export const Header = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  display: flex;
  justify-content: space-between;
`;
export const CurrentDay = styled.div``
export const NextPrev = styled.div``
export const Button = styled.div`
  cursor: pointer;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Day = styled.div`
  width: 46px;
  height: 46px;
  display: flex;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  transition: 0.3s;
  border: 1px solid #F8F8F8;
  &:not(:last-child){
    margin-right: 5px;
    margin-bottom: 5px;
  }
  &:hover {
    border: 1px solid var(--green)
  }
  ${({ isToday }) =>
    isToday &&
    css`
      border: 1px solid var(--green);
    `}
  ${({ isSelected }) =>
    isSelected &&
    css`
      color: var(--white);
      background-color: var(--green);
    `}
`;
export const Week = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  font-weight: 500;
  font-size: 14px;
  margin-right: 20px;
  text-transform: capitalize;
  margin-right:10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const DeliveryTimes = styled.div`
    margin-top: 40px;
`
export const TimePicker = styled.div`
  height: 48px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
  padding: 15px 20px 16px;
  background-color: #F8F8F8;
  border-radius: var(--brd-radius);
  &:not(:last-child) {
    margin-bottom: 6px;
  }
`
export const Time = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: var(--black);
`
