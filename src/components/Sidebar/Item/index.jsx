import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import { Container, Title, Link, IconContainer } from './style';

const Item = ({ title, path, Icon, collapsed, isBottom }) => {
  const location = useLocation();
  const active = location.pathname === path;
  const [hovered, setHovered] = useState(false);
  return (
    <Container active={active}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      isBottom={isBottom} collapsed={collapsed}>
      <IconContainer active={active} collapsed={collapsed}>
        <Icon />
      </IconContainer>
      <Link to={path} key={path}>
        <Title collapsed={collapsed} active={active} hovered={hovered}>{title}</Title>
      </Link>
    </Container>
  );
};
export default Item;
