"use client";
import { useRouter } from "next/navigation"
import TestButton from '../components/TestButton';

export default function TestPage() {
    const router = useRouter()
    const toTestIdPage = () => {
        router.push("/test-page/55")
    }

    return (
        <div>
            <h1>TestPage</h1>
            <button onClick={toTestIdPage}>to test id page</button>
            <br/>
            <TestButton  label={'from test page'}/>
        </div>
    )
}
