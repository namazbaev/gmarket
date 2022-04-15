import styled, { css } from 'styled-components';
import { ReactComponent as UserImg } from 'assets/images/user.svg';
import { ReactComponent as SettingIcon } from 'assets/icons/setting.svg'
import { ReactComponent as NotifIcon } from 'assets/icons/notification.svg'

const iconCommon = css`
    width: 24px;
    height: 24px;
    cursor: pointer;
    &:hover {
        path {
            fill: var(--black);
        }
    }
`
export const Title = styled.p`
    margin: 20px 0 10px 0;
    display: flex;
    color: #000000;
    font-size: 18px;
    font-weight: 500;
    line-height: 116.3%;
    letter-spacing: -0.01em;
`
export const Info = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const PhoneNumber = styled.span`
    font-size: 14px;
    line-height: 116.3%;
    letter-spacing: -0.01em;
    margin-bottom: 25px;
`
export const Container = styled.div`
    padding: ${({ collapsed }) => collapsed ? "37px 25px 10px 25px" : "37px 25px 10px 30px"}
`;

export const Space = styled.div`height: 34px`;
export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const User = styled(UserImg)``
export const ProfileImg = styled.img`
    width: 64px;
    height: 64px;
    cursor: pointer;
`
export const Setting = styled(SettingIcon)`${iconCommon}`
export const Notifications = styled(NotifIcon)`${iconCommon}`
export const Menu = styled.div`
    height: auto;
`
export const TopSection = styled.div``
export const BottomSection = styled.div`
    margin-top: 54px;
`
export const BalanceCard = styled.div`
    width: 181px;
    height: 84px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #FBFBFB;
    border-radius: var(--brd-radius);
`
export const Texts = styled.div`
    display: flex;
    flex-direction: column;
`
export const Balance = styled.span`
    font-weight: 700;
    font-size: 20px;
    letter-spacing: -0.4px;
    color: var(--black);
    margin-top: 8px;
`
export const Text = styled.p`
    margin: 0;
    color: var(--black);
    font-size: 14px;
    letter-spacing: -0.4px;
`
