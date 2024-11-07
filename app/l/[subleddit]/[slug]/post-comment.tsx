type Comment = {
    body: string;
    author: string;
}

export default function PostComment({ comment }: { comment: Comment }) {
    return <>
        <div className="py-6">
            <div>
                u/{comment.author}
            </div>
            <div className="truncate">
                {comment.body}
            </div>
        </div>
    </>
}