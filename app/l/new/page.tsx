"use client";

import Button from "@/components/button";
import TextArea from "@/components/ui/textarea";
import TextInput from "@/components/ui/textinput";
import { useState } from "react";

export default function Page() {
    const [communityName, setCommunityName] = useState("");
    const [communityDescription, setCommunityDescription] = useState("");

    return <>
        <h1 className="text-3xl mb-16">
            create community
        </h1>

        <div className="flex flex-col gap-12">
            <div>
                <div className="mb-2">community name</div>
                <TextInput onChange={(e) => setCommunityName(e.target.value)} />
            </div>

            <div>
                <div className="mb-2">description</div>
                <TextArea onChange={(e) => setCommunityDescription(e.target.value)} />
            </div>

            <div>
                <Button text="create" />
            </div>
        </div>
    </>;
}