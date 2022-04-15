import {
    Container, LeftSection, RightSection, TopSection, BottomSection, StarIcon, InfoIcon, SavedIcon,
    InfoIcons, Title, Card, Text, ShopIcon, RecipeIcon, SunlightBtn, SunlightIcon, Info, InfoItem,
    StarWrap, DeliveryIcon, InfoText
} from "./style"

export default () => {
    return (
        <Container>
            <LeftSection>
                <TopSection>
                    <SunlightBtn><SunlightIcon /></SunlightBtn>
                </TopSection>
                <BottomSection>
                    <Title>Wallmart store</Title>
                    <Info>
                        <InfoItem>
                            <InfoIcons><InfoIcon /></InfoIcons>
                            <InfoText>Store info</InfoText>
                        </InfoItem>
                        <InfoItem>
                            <InfoIcons><DeliveryIcon /></InfoIcons>
                            <InfoText>Store delivery time</InfoText>
                        </InfoItem>

                        <InfoItem>
                            <InfoIcons><SavedIcon /></InfoIcons>
                            <InfoText>Saved</InfoText>
                        </InfoItem>
                    </Info>
                    <StarWrap>
                        <StarIcon />
                        <Text star>4.5</Text>
                    </StarWrap>
                </BottomSection>
            </LeftSection>
            <RightSection>
                <Card>
                    <ShopIcon />
                    <Text>Shop</Text>
                </Card>
                <Card>
                    <RecipeIcon />
                    <Text>Recipes</Text>
                </Card>

            </RightSection>
        </Container>
    )
}