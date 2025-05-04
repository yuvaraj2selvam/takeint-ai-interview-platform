import React from 'react'
import { DataTableDemo } from '../interview-table'
import { Card, CardContent } from '../../ui/card'

const MockInterviewTab = () => {
  return (
    <Card className="flex bg-white/60 z-10 p-5 rounded-4xl flex-1 w-full gap-10">
      <CardContent className="w-full h-full">
        <DataTableDemo />
      </CardContent>
    </Card>
  );
};

export default MockInterviewTab