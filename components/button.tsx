import { SelectHTMLAttributes } from "react";

interface ButtonProps extends SelectHTMLAttributes<HTMLButtonElement> {
    text: string;
}


export default function Button(props: ButtonProps) {
    return <button className="bg-black text-white text-sm px-6 py-2 hover:bg-slate-800 transition" {...props}>
        {props.text}
    </button>
}
