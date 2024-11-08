import Link from "next/link";
import PostComment from "./post-comment";
import PostReplyButton from "./post-reply-button";

const sampleCommentData = {
    body: "this is a sample body of a comment. it could span multiple lines or it could be short. it should ideally be able to contain links, but right now, that is not supported.",
    author: "alice"
}

export default async function Page({ params }: { params: Promise<{ subleddit: string, slug: string }> }) {
    const { subleddit, slug } = await params;

    return <div>
        <div className="mb-16">
            <div className="flex flex-col gap-2">
                <Link className="text-sm" href={`/l/${subleddit}`}>
                    l/{subleddit}
                </Link>
                <h1 className="text-3xl">
                    this is a sample, possibly mutli line post title for a leddit post
                </h1>
                <div className="text-sm mb-4">
                    u/bob
                </div>
            </div>

            <p className="mt-4">
                this is a sample post body.
            </p>
            <PostReplyButton />
        </div>


        <div className="grid grid-cols-1 divide-y divide-black">
            <PostComment comment={sampleCommentData} />
            <PostComment comment={sampleCommentData} />
            <PostComment comment={sampleCommentData} />
            <PostComment comment={sampleCommentData} />
            <PostComment comment={sampleCommentData} />
            <PostComment comment={sampleCommentData} />
        </div>
    </div>;
}
