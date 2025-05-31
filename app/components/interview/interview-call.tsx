import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import InterviewHeader from './interview-header'
import InterviewBody from './interview-body'
import InterviewFooter from './interview-footer'
import StartInterview from './start-interview'

const InterviewCall = () => {
    return (
        <Card className='h-full w-full py-4 px-0 bg-transparent border-none shadow-none'>
            <CardHeader>
                <InterviewHeader />
            </CardHeader>
            <CardContent className='px-0 z-20'>
                <InterviewBody />
            </CardContent>
            <InterviewFooter />
        </Card>
    )
}

export default InterviewCall