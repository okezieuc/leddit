export default function HeaderContainer({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="mb-16 flex bg-blue-800 text-white md:items-center px-8 py-16 rounded-lg gap-8 md:gap-0 flex-col md:flex-row">
        {children}
    </div>;
};