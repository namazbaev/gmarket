import { useState } from 'react'
import { Container, LocationIcon, IconBtn, Text, DownIcon } from "./style"

export default ({ location }) => {
    const [active, setActive] = useState(false)
    return (
        <Container onClick={() => setActive(!active)}>
            <IconBtn>
                <LocationIcon />
            </IconBtn>
            <Text>{location}</Text>
            <IconBtn>
                <DownIcon active={active} />
            </IconBtn>
        </Container>
    )
}