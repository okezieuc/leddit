import Link from "next/link";

type Post = {
    title: string;
    body: string;
    author_id: {
        id: string;
        username: string;
    };
    id: number;
}

export default function PostListItem({ post, subleddit }: { post: Post, subleddit: string }) {
    return <>
        <div className="py-8">
            <Link className="font-bold" href={`/l/${subleddit}/${post.id}`}>
                {post.title}
            </Link>
            <div className="truncate">
                {post.body}
            </div>
        </div>
    </>
}