export default function HeaderContainer({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="mb-16 flex bg-blue-800 text-white items-center px-8 py-16 rounded-lg">
        {children}
    </div>;
};