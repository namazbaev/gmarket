import { useEffect } from "react";
import ReactDOM from "react-dom";
import {
    Header,
    Title,
    Container,
    Content,
    CloseButton,
    CloseIcon,
    Body,
} from "./style";

export default ({ children, width, open, onClose, title }) => {
    useEffect(() => {
        const modal = document.getElementById("modal-dialog")
        ReactDOM.render(
            <Container open={open}>
                <Content width={width}>
                    <Header>
                        <Title>{title}</Title>
                        <CloseButton onClick={onClose}>
                            <CloseIcon />
                        </CloseButton>
                    </Header>
                    <Body>{children}</Body>
                </Content>
            </Container>,
            modal
        );
    }, [children, open, onClose, width, title]);
    return <></>;
};