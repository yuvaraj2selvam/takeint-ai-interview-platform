import { Tabs, TabsContent } from '@/app/components/ui/tabs'
import React from 'react'

const page = () => {
  return (
    <div className='h-full'>
      <TabsContent value="dashboard">Make changes to your account here.</TabsContent>
      <TabsContent value="feedbackscores">Change your password here.</TabsContent>
    </div>
  )
}

export default page