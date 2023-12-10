export const metadata = {
    title: "Test next js",
    description: "Test next js",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
        <body>
        <div>Root Layout Header</div>
        <div>{children}</div>
        <div>Root Layout Footer</div>
        </body>
        </html>
    )
}