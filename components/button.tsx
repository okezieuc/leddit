export default function Button({ text }: { text: string }) {
    return <button className="bg-black text-white text-sm px-6 py-2 hover:bg-slate-800 transition">
        {text}
    </button>
}
