export default function BodyContainer({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="px-8">
        {children}
    </div>
};