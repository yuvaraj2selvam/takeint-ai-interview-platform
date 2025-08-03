"use client";

import React, { useRef, useState } from 'react'
import { MockInterviewTable } from '../mock-interview-table'
import { Card, CardContent, CardHeader } from '../../ui/card'
import { Input } from '../../ui/input';
import { useQuery, useQueryClient, UseQueryResult } from '@tanstack/react-query';
import { FetchMockInterviews } from '@/hooks/react-query/functions';
import { QueryKeys } from '@/hooks/react-query/keys';


const MockInterviewTab = () => {

  const [globalFilter, setglobalFilter] = useState("");

  const queryRef = useRef<UseQueryResult<any, Error> | null>(null);
  queryRef.current = useQuery({ queryKey: [QueryKeys.fetch_interview], queryFn: FetchMockInterviews });
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
        <MockInterviewTable globalFilterValue={globalFilter} query={queryRef.current} />
      </CardContent>
    </Card>
  );
};

export default MockInterviewTab