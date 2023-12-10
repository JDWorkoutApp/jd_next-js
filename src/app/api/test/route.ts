import { NextResponse } from 'next/server';

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