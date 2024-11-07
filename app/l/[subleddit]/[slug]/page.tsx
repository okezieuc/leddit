import PostComment from "./post-comment";

const sampleCommentData = {
    body: "i thought i was the only one wondering this. i already bought my swimming gear back in atlanta.",
    author: "alice"
}

export default function Page() {
    return <div>
        <div className="mb-16">
            <div className="flex flex-col gap-2">
                <div className="text-sm">
                    l/fisk
                </div>
                <h1 className="text-3xl">
                    i cannot find the swimming pool they said we had in cravath hall
                </h1>
                <div className="text-sm mb-4">
                    u/bob
                </div>
            </div>

            <p className="mt-4">
                i am frustrated fr. i like my dorm room tho
            </p>
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
