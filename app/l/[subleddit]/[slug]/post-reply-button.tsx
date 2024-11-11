"use client";

import { postCommentAction } from "@/app/communityActions";
import Button from "@/components/button";
import TextArea from "@/components/ui/textarea";
import { useState } from "react";

export default function PostReplyButton({ post_id, route }: { post_id: number, route: string }) {
    const [showReplyInput, setShowReplyInput] = useState(false);

    return <div className="flex flex-col gap-4 mt-8">
        {
            showReplyInput ? <form action={postCommentAction}>
                <TextArea name="body" />
                <input type="hidden" name="post_id" value={post_id} />
                <input type="hidden" name="current_route" value={route} />
                <div className="flex">
                    <div className="flex-1"></div>
                    <div>
                        <Button text="reply" />
                    </div>
                </div>
            </form> : <div>
                <Button text="add reply" onClick={() => setShowReplyInput(!showReplyInput)} />
            </div>
        }
    </div>
}