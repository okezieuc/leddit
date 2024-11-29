import { SelectHTMLAttributes } from "react";

interface ButtonProps extends SelectHTMLAttributes<HTMLButtonElement> {
    text: string;
    inverted?: boolean;
}


export default function Button(props: ButtonProps) {
    return <button className={`text-sm px-6 py-3 transition rounded-md ${props.inverted
        ? "bg-white text-blue-800 hover:bg-blue-50"
        : "bg-blue-800 text-white hover:bg-blue-700"}`} {...props}>
        {props.text}
    </button>
}
