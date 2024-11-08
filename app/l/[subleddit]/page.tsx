import PostListItem from "./post-list-item";

const samplePostData = {
    title: "this is a sample, possibly mutli line post title for a leddit post",
    body: "this is a sample body of a post. it could span multiple lines or it could be short. it should ideally be able to contain links, but right now, that is not supported.",
    slug: "test",
}

export default async function Page({ params }: { params: Promise<{ subleddit: string }> }) {
    const { subleddit } = await params;

    return <div>
        <div className="mb-16">
            <h1 className="text-3xl mb-4">
                l/{subleddit}
            </h1>
            <p>
                everything fisk.
            </p>
        </div>

        <div className="grid grid-cols-1 divide-y divide-black">
            <PostListItem post={samplePostData} subleddit={subleddit} />
            <PostListItem post={samplePostData} subleddit={subleddit} />
            <PostListItem post={samplePostData} subleddit={subleddit} />
            <PostListItem post={samplePostData} subleddit={subleddit} />
            <PostListItem post={samplePostData} subleddit={subleddit} />
            <PostListItem post={samplePostData} subleddit={subleddit} />
        </div>
    </div>;
}
