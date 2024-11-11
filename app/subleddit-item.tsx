import Link from "next/link";

type Subleddit = {
    name_tag: string;
    id: number;
}

export default function SubledditItem({ subleddit }: { subleddit: Subleddit }) {
    return <div>
        <Link href={`/l/${subleddit.id}`}>l/{subleddit.name_tag}</Link>
    </div>
}