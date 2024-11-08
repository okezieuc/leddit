import React from 'react';

export default function TextInput(props: React.HTMLProps<HTMLInputElement>) {
    return <input type="text" className="border border-black p-2 w-full" {...props} />
}
