import { ShareCard, IconShare, Text } from "./style"

export default ({ text, ...props }) => (
    <ShareCard {...props}>
        <IconShare />
        <Text>{text}</Text>
    </ShareCard>
)