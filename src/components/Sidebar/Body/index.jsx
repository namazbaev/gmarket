import React from 'react';
import Item from '../Item';
import { useSelector } from 'react-redux';
import UserImg from 'assets/images/user.svg';
import Share from 'components/Buttons/Share';
import GreenPlus from 'components/Buttons/GreenPlus';
import { childRoutes } from 'utils/sidebar-elements';
import { ReactComponent as Logout } from 'assets/icons/logout.svg';
import { ReactComponent as Help } from 'assets/icons/help-center.svg';
import {
  Container, UserInfo, Info, TopSection, BalanceCard, Setting, Title, PhoneNumber,
  Notifications, Texts, Text, Balance, BottomSection, Menu, ProfileImg
} from './style';

export const SidebarBody = ({ collapsed }) => {
  const collapse = useSelector(state => state.asideReducer.collapsed)
  return (
    <Container collapsed={collapsed}>
      {!collapse &&
        <TopSection>
          <UserInfo>
            <Setting />
            <ProfileImg src={UserImg} alt="User image" />
            <Notifications />
          </UserInfo>
          <Info>
            <Title>Roberto Cavanali</Title>
            <PhoneNumber>(+99893) 100-00-00</PhoneNumber>
          </Info>
          <BalanceCard>
            <Texts>
              <Text>Wallet balance</Text>
              <Balance>$425,97</Balance>
            </Texts>
            <GreenPlus />
          </BalanceCard>
          <Share text="Share wallet" />
        </TopSection>}
      <Menu>
        {childRoutes.map(({ title, Icon, path }, index) => (
          <Item key={`${index + 1}`}
            title={title} Icon={Icon}
            path={path} collapsed={collapsed} />
        ))}
      </Menu>
      <BottomSection>
        <Item key="Help" isBottom
          title="Help center" Icon={Help}
          path="/help" collapsed={collapsed} />
        <Item key="11" isBottom
          title="Logout" Icon={Logout}
          path="/logout" collapsed={collapsed} />
      </BottomSection>
    </Container>
  );
}
export default SidebarBody;
