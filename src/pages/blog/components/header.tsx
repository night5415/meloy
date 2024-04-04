import { H3 } from "../../../components/typograph";


function BlogHeader({ title }: { title: string }) {
    return (<H3>{title}</H3>);
}

export default BlogHeader;