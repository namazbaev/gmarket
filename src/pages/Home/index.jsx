import Sidebar from "components/Sidebar";
import { Normalize } from "styled-normalize";
import { Container, Content } from "./style";
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from "styles/globalStyles";
import { childRoutes } from "utils/sidebar-elements";
export default () => (
    <Container>
        <Normalize />
        <GlobalStyle />
        <Sidebar />
        <Content>
            {childRoutes.map(({ path, component }) => (
                <Routes>
                    <Route path={path} key={path} element={component} />
                </Routes>
            ))}

        </Content>
    </Container>
);
