
import '../../styles/pages/blog.css'
import { BlogCard, BlogHeader, BlogPost } from "./components";
import { blogPosts } from "./test";

function Blog() {
    return (<div>
        {blogPosts.map(({ id, body, title }) =>
            <BlogCard key={id}>
                <BlogHeader {...{ title }} />
                <BlogPost {...{ body }} />
            </BlogCard>
        )}
    </div>);
}

export default Blog;