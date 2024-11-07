type Post = {
    title: string;
    body: string;
    author?: string;
}

export default function PostListItem({ post }: { post: Post }) {
    return <>
        <div className="py-6">
            <div>
                {post.title}
            </div>
            <div className="truncate">
                {post.body}
            </div>
        </div>
    </>
}