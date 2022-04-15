import { Container } from "./style"

export default ({ width, height, number }) => {
    return number ? (
        [...Array(number)].map((skeleton, idx) => {
            return <Container width={width} height={height} key={idx} />
        })
    ) : (
        <Container width={width} height={height} />
    )
}