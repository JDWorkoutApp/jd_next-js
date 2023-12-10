export default function TestId({params}: {
    params: {
        testId: string;
    }
}) {
    return <h1>test id: {params.testId}</h1>
}
