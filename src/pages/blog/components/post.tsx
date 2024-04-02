const Post = ({ body }: { body: string }) => {
    var paragraphs = body.split('...');

    return paragraphs.map((para, index) => <p key={index}>{para}</p>)
}

export { Post as default }