import { http } from "services";
import Skeleton from "components/Skeleton";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { incRementProduct, getProduct, decrementProduct } from "redux/modules/products/actions";
import {
    Container, Head, Text, RightArrow, ProductCard, Card, AddBtn,
    DiscountBtn, DiscountIc, Liked, Image, Name, Bottom, Price, Plus
} from "./style";
export default () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    const incRement = (data) => { dispatch(incRementProduct(data)) }
    const decrement = (data) => { dispatch(decrementProduct(data)) }
    const product = useSelector(state => state.productReducer.products)
    const getList = () => {
        setLoading(true)
        http.get('/products?limit=5')
            .then((res) => {
                setLoading(false);
                dispatch(getProduct(res.data));
            })
    }
    useEffect(() => getList(), [])
    return (
        <Container>
            <Head>
                <Text size="22px">Fresh Fruit</Text>
                <Text cursor="pointer">See all <RightArrow /></Text>
            </Head>
            {loading ? <Skeleton width={200} height={200} number={4} /> :
                <ProductCard>
                    {product.map((item) => (
                        <Card key={item.id}>
                            <DiscountBtn>
                                <DiscountIc />
                            </DiscountBtn>
                            <Liked />
                            <Image src={item.image} alt={item.title} />
                            <Name>{item.title}</Name>
                            <Bottom>
                                <Price>${item.price}</Price>
                                {item?.count > 0 && <AddBtn onClick={() => decrement(item)}>-</AddBtn>}
                                <span>{item.count > 0 && item.count}</span>
                                <AddBtn onClick={() => incRement(item)}>{<Plus />}</AddBtn>
                            </Bottom>
                        </Card>
                    ))}
                </ProductCard>}
        </Container>
    )
}