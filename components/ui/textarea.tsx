import React from 'react';

export default function TextArea(props: React.HTMLProps<HTMLTextAreaElement>) {
    return <textarea className="border border-black p-2 w-full" rows={9} {...props} />
}
