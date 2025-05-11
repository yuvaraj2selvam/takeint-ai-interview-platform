import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import InterviewHeader from './interview-header'
import InterviewBody from './interview-body'

const InterviewCall = () => {
    return (
        <Card className='h-full w-full py-4 px-0 bg-transparent border-none shadow-none'>
            <CardHeader>
                <InterviewHeader />
            </CardHeader>
            <CardContent className='px-0 z-60'>
                <InterviewBody />
            </CardContent>
        </Card>
    )
}

export default InterviewCall