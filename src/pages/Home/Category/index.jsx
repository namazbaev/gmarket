import { useState } from "react"
import { Container, Content, FilterButton, PropertyIcon } from "./style"
export default () => {
    const [selected, setSelected] = useState(false)
    const changeActive = () => setSelected(!selected)
    return (
        <Container>
            <Content>
                <FilterButton padding="0" width="50px" height="50px" onClick={changeActive} selected={selected}>
                    <PropertyIcon />
                </FilterButton>
                <FilterButton>Pantrys</FilterButton>
                <FilterButton>Fruits and Vegetables</FilterButton>
                <FilterButton>Eggs and Dairys</FilterButton>
                <FilterButton>Frozens</FilterButton>
                <FilterButton>Beverange</FilterButton>
                <FilterButton>Snacks</FilterButton>
                <FilterButton>Households</FilterButton>
            </Content>
        </Container>
    )
}