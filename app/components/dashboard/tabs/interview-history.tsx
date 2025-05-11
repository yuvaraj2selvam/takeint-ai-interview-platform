import React from 'react'
import { Card, CardContent, CardHeader } from '../../ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs'
import { Button } from '../../ui/button'
import MockInterviewTab from './mock-interview'


const InterviewHistory = () => {
    return (
        <Tabs defaultValue='live_interview'>
            <Card className='h-full w-full py-4 px-0'>
                <CardHeader className='flex justify-end'>
                    <TabsList className='bg-[#e7e9fb] py-5 rounded-4xl'>
                        <TabsTrigger className='px-3 py-4 rounded-4xl' value='live_interview'>
                            Live Interview
                        </TabsTrigger>
                        <TabsTrigger className='px-3 py-4 rounded-4xl' value='mock_interview'>
                            Mock Interview
                        </TabsTrigger>
                  </TabsList>
                </CardHeader>
                <CardContent className='px-0'>
                    <TabsContent value='live_interview'>
                        
                    </TabsContent>
                    <TabsContent value='mock_interview'>
                        
                    </TabsContent>
                </CardContent>
            </Card>
        </Tabs>
       
    )
}

export default InterviewHistory