import { useState, useEffect } from 'react';
import Calendar from '../Calendar';
import {
    Container, Content, TimeIcon, Time, Drawer, DrawerHeader,
    HeaderTitle, CloseBtn, Close, BackDrop, DrawerBody
} from "./style"
export default () => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        return () => setOpen(false)
    }, [])

    return (
        <>
            <Container onClick={() => setOpen(!open)}>
                <Content>
                    <TimeIcon />
                    <Time>By 09:00 — 23:00</Time>
                </Content>
            </Container>
            <Drawer open={open}>
                <DrawerHeader padding="0 30px 0 0">
                    <HeaderTitle>Delivery time</HeaderTitle>
                    <CloseBtn onClick={() => setOpen(false)}><Close /></CloseBtn>
                </DrawerHeader>
                <DrawerBody>
                    <Calendar />
                </DrawerBody>
                {open && <BackDrop />}
            </Drawer>
        </>
    )
}