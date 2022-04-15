import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { incRementProduct, decrementProduct, removeProduct } from 'redux/modules/products/actions';
import {
    Container, CartButton, CartIcon, Sum, Content, Item, Counter, Image, ItemInfo,
    IncDecBtn, Count, ItemName, Price, TotalPrice, RemoveBtn, RemoveIcon, Footer
} from "./style"
import { Drawer, DrawerHeader, HeaderTitle, CloseBtn, Close, BackDrop, DrawerBody } from "../Delivery/style"
export default () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const products = useSelector(state => state.productReducer.products)
    const remove = id => dispatch(removeProduct(id))
    const incRement = data => dispatch(incRementProduct(data))
    const decRement = data => dispatch(decrementProduct(data))
    const totalPrice = (count, price) => count * price.toFixed(2)
    const total = products.reduce((acc, curr) => acc + curr.count * curr.price, 0)
    return (
        <>
            <Container onClick={() => setOpen(!open)}>
                <CartButton><CartIcon /></CartButton>
                <Sum>${total?.toFixed(2)}</Sum>
            </Container>
            <Drawer padding="0" width="30%" open={open}>
                <DrawerHeader padding="20px 30px">
                    <HeaderTitle>
                        Selected products
                    </HeaderTitle>
                    <CloseBtn onClick={() => setOpen(false)}><Close /></CloseBtn>
                </DrawerHeader>
                <DrawerBody>
                    <Content>
                        {products
                            .filter(x => x.count !== 0)
                            .map((item) => {
                                return (
                                    <Item key={item.id}>
                                        <Counter>
                                            <IncDecBtn onClick={() => incRement(item)}>
                                                +
                                            </IncDecBtn>
                                            <Count>
                                                {item.count}
                                            </Count>
                                            <IncDecBtn onClick={() => decRement(item)}>
                                                -
                                            </IncDecBtn>
                                        </Counter>
                                        <Image src={item.image} />
                                        <ItemInfo>
                                            <ItemName>
                                                {item.title}
                                            </ItemName>
                                            <Price>
                                                {item.price.toFixed(2)}
                                            </Price>
                                        </ItemInfo>
                                        <TotalPrice>
                                            ${totalPrice(item.count, item.price)}
                                        </TotalPrice>
                                        <RemoveBtn onClick={() => remove(item)}>
                                            <RemoveIcon />
                                        </RemoveBtn>
                                    </Item>
                                )
                            })}
                    </Content>
                    <Footer>
                        Total ${total?.toFixed(2)}
                    </Footer>
                </DrawerBody>
                {open && <BackDrop />}
            </Drawer>
        </>
    )
}