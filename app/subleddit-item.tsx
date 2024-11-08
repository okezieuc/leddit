import Link from "next/link";

type Subleddit = {
    name: string;
}

export default function SubledditItem({ subleddit }: { subleddit: Subleddit }) {
    return <div>
        <Link href={`/l/${subleddit.name}`}>l/{subleddit.name}</Link>
    </div>
}