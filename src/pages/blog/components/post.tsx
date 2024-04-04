import { Paragraph } from "../../../components/typograph";

const Post = ({ body }: { body: string }) => {
    const paragraphs = body.split('...');

    return paragraphs.map((para, index) => <Paragraph key={index}>{para}</Paragraph>)
}

export { Post as default }