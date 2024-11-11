type Comment = {
    body: string;
    author_id: {
        id: string;
        username: string;
    };
}

export default function PostComment({ comment }: { comment: Comment }) {
    return <>
        <div className="py-6">
            <div>
                u/{comment.author_id.username}
            </div>
            <div>
                {comment.body}
            </div>
        </div>
    </>
}