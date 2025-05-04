
import DashboardTab from '@/app/components/dashboard/tabs/dashboard'
import CreateInterviewTab from '@/app/components/dashboard/tabs/create-interview'
import { Tabs, TabsContent } from '@/app/components/ui/tabs'
import React from 'react'
import MockInterviewTab from '@/app/components/dashboard/tabs/mock-interview'

const page = () => {
  return (
    <div className='h-full'>
      <TabsContent value="dashboard">
        <DashboardTab />
      </TabsContent>
      <TabsContent value="createinterview">
        <CreateInterviewTab />
      </TabsContent>
      <TabsContent value="mockinterview">
        <MockInterviewTab />
      </TabsContent>
      <TabsContent value="feedbackscores">Change your password here.</TabsContent>
    </div>
  )
}

export default page