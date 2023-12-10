export default function TestPage({
    params,
}: {
    params: {
        slug: string[];
    };
}) {
    return <h1>test slug page: {params.slug.join("/")}</h1>
}