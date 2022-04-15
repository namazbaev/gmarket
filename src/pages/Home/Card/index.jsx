import { card } from "utils/json";
import { Container, Card, Title, Text, Info, CardVisit } from "./style";
export default () => {
    return (
        <Container>
            {card.map(({ color, title, text, img, isVisit, brand, brandTextColor, textColor }) => (
                <Card key={text} background={color} textColor={textColor} img={img}>
                    <Info>
                        <Title>{title}</Title>
                        <Text>{text}</Text>
                    </Info>
                    {isVisit && <CardVisit btnColor={textColor} brandTextColor={brandTextColor}>{brand}</CardVisit>}
                </Card>
            ))}
        </Container>
    )
}