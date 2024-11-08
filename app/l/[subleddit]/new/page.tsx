"use client";

import Button from "@/components/button";
import DropDownInput from "@/components/ui/dropdowninput";
import TextArea from "@/components/ui/textarea";
import TextInput from "@/components/ui/textinput";
import { useState } from "react";

const sampleSubLedditOptions = [
    {
        label: "fisk",
        value: "fisk",
    },
    {
        label: "leddit",
        value: "leddit",
    },
    {
        label: "college",
        value: "college",
    },
]

export default function Page() {
    const [subleddit, setSubleddit] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    return <>
        <h1 className="text-3xl mb-16">
            create post
        </h1>

        <div className="flex flex-col gap-12">
            <div>
                <div className="mb-2">subleddit</div>
                <DropDownInput options={sampleSubLedditOptions} onChange={(e) => setSubleddit(e.target.value)} />
            </div>

            <div>
                <div className="mb-2">title</div>
                <TextInput onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div>
                <div className="mb-2">content</div>
                <TextArea onChange={(e) => setBody(e.target.value)} />
            </div>

            <div>
                <Button text="create" />
            </div>
        </div>
    </>;
}