import Body from './Body';
import Header from './Header';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Layout, BodyContainer } from './style';
import { collapse, expand } from 'redux/modules/aside/actions';

export default () => {
  const dispatch = useDispatch();
  const collapsed = useSelector(({ asideReducer }) => asideReducer.collapsed);

  return (
    <Layout collapsed={collapsed}>
      <Header collapsed={collapsed}
        handleExpand={() => dispatch(expand())}
        handleCollapse={() => dispatch(collapse())} />
      <Container>
        <BodyContainer suppressScrollX>
          <Body collapsed={collapsed} />
        </BodyContainer>
      </Container>
    </Layout>
  );
};
