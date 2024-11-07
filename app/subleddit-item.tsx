type Subleddit = {
    name: string;
}

export default function SubledditItem({ subleddit }: { subleddit: Subleddit }) {
    return <div>
        l/{subleddit.name}
    </div>
}