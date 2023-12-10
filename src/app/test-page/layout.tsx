
export default function TestPageLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <div>Test page Layout Header</div>
            <div>{children}</div>
            <div>Test page Layout Footer</div>
        </div>
    )
}