"use client";
import { useRouter } from "next/navigation"

export default function TestPage() {
    const router = useRouter()
    const toTestIdPage = () => {
        router.push("/test-page/55")
    }

    return (
        <div>
            <h1>TestPage</h1>
            <button onClick={toTestIdPage}>to test id page</button>
        </div>
    )
}
