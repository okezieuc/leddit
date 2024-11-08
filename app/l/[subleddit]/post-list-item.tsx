import Link from "next/link";

type Post = {
    title: string;
    body: string;
    author?: string;
    slug: string;
}

export default function PostListItem({ post, subleddit }: { post: Post, subleddit: string }) {
    return <>
        <div className="py-6">
            <Link href={`/l/${subleddit}/${post.slug}`}>
                {post.title}
            </Link>
            <div className="truncate">
                {post.body}
            </div>
        </div>
    </>
}