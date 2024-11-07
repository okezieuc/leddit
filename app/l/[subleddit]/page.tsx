import PostListItem from "./post-list-item";

const samplePostData = {
    title: "i can't find the swimming pool in cravath hall",
    body: "i applied here because one of the tour guides had mentioned that there is an olympic sized swimming pool in cravath hall, but i cant find it",
}

export default function Page() {
    return <div>
        <div className="mb-16">
            <h1 className="text-3xl mb-4">
                l/fisk
            </h1>
            <p>
                everything fisk.
            </p>
        </div>

        <div className="grid grid-cols-1 divide-y divide-black">
            <PostListItem post={samplePostData}  />
            <PostListItem post={samplePostData}  />
            <PostListItem post={samplePostData}  />
            <PostListItem post={samplePostData}  />
            <PostListItem post={samplePostData}  />
            <PostListItem post={samplePostData}  />
            <PostListItem post={samplePostData}  />
            <PostListItem post={samplePostData}  />
        </div>
    </div>;
}
