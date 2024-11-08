import Link from "next/link";

export default function LinkButton({ text, href }: { text: string, href: string }) {
    return <Link
        className="bg-black text-white text-sm px-6 py-2 hover:bg-slate-800 transition"
        href={href}
    >
        {text}
    </Link>
}
