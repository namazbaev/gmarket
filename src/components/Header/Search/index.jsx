import { Container, Input, SearchIcon, PropertyIcon } from "./style"

export default ({ placeholder }) => (
    <Container>
        <Input placeholder={placeholder} />
        <SearchIcon />
        <PropertyIcon />
    </Container>
)