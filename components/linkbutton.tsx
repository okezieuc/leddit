import Link from "next/link";

export default function LinkButton({ text, href, inverted=false }: { text: string, href: string, inverted?: boolean }) {
    return <Link
        className={`text-sm px-6 py-3  transition rounded-md ${inverted ? "bg-white text-blue-800 hover:bg-blue-50" : "bg-blue-800 text-white hover:bg-blue-700"}`}
        href={href}
    >
        {text}
    </Link>
}
