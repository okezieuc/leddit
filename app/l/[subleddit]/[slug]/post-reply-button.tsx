"use client";

import Button from "@/components/button";
import TextArea from "@/components/ui/textarea";
import { useState } from "react";

export default function PostReplyButton() {
    const [showReplyInput, setShowReplyInput] = useState(false);

    return <div className="flex flex-col gap-4 mt-8">
        {
            showReplyInput ? <>
                <TextArea />
                <div className="flex">
                    <div className="flex-1"></div>
                    <div>
                        <Button text="reply" onClick={() => {
                            // submit the reply then show the reply add reply button again
                            setShowReplyInput(!showReplyInput)
                        }} />
                    </div>
                </div>
            </> : <div>
                <Button text="add reply" onClick={() => setShowReplyInput(!showReplyInput)} />
            </div>
        }
    </div>
}