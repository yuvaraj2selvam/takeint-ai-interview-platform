"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader } from '../../ui/card'
import { Input } from '../../ui/input'
import {InterviewHistoryTable}  from '../interview-history-table'




const InterviewHistory = () => {
    const [globalFilter, setglobalFilter] = useState("");    
    return (
        <Card className="flex border-none h-full gap-0 bg-[#c1cbef] z-10 pt-0 px-0 rounded-4xl pb-0 w-full">
            <CardHeader className="flex py-4 justify-end flex-row">
                <Input
                    className="p-5 bg-white rounded-full text-sm max-w-sm border border-[#2a314e] active:outline-none active:ring-0 focus:outline-none focus:ring-0 focus:ring-offset-0"
                    placeholder="Search"
                    value={globalFilter}
                    onChange={(e) => setglobalFilter(e.target.value)}
                />
            </CardHeader>
            <CardContent className="w-full h-full py-0 px-0">
                <InterviewHistoryTable globalFilterValue={globalFilter}  />
            </CardContent>
        </Card>
    );
}

export default InterviewHistory


