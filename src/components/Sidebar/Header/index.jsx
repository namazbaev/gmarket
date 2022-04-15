import React from 'react';
import { Header, TitleContainer, Title, CollapseButton, ExpandButton } from './style';

const SidebarHeader = ({ collapsed, handleExpand, handleCollapse }) => (
  <Header collapsed={collapsed}>
    <TitleContainer collapsed={collapsed}>
      {collapsed ? <ExpandButton onClick={handleExpand} />
        : <CollapseButton onClick={handleCollapse} />}
      {!collapsed && <Title>GMarket</Title>}
    </TitleContainer>
  </Header>
);
export default SidebarHeader