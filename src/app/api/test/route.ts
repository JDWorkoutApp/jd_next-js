import { NextResponse } from 'next/server';

const TEST_ENV_NAME: string = process.env.TEST_ENV_NAME as string

export async function GET() {
    const testData: Test[] =[
        {
            name: 'Test 1',
            description: 'This is a test'
        },
        {
            name: 'Test 2',
            description: 'This is another test'
        }
    ]

    return NextResponse.json(testData);
}

export async function DELETE(request: Request) {
    const { name }: { name: string } = await request.json();

    const res = await fetch(`http://localhost:3000/api/test`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const data: Test[] = await res.json();

    return NextResponse.json({
        message: `Deleted ${name}`,
        env: TEST_ENV_NAME,
        testApiData: data
    });
}