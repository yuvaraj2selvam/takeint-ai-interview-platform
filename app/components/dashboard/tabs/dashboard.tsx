import React from 'react'
import { Component } from '../progress-chart'
import DashboardTabHeader from '../dashboard-tab-header'
import { PerformanceRadarChart } from '../interview-chart'
import LeaderBoard from '../leader-board'
import { prisma } from '@/prisma/prisma'
import { auth } from '@/app/(auth-pages)/auth'

const DashboardTab = async () => {
  const user = await auth();
  let Data = null;
  if (user != null) {
    Data = await prisma.user.findFirst({
      where: {
        id: user?.user?.id
      },
      include: {
        interviews: true,
        feedBack: true
      }
    });
  }

  const completedInterViews: number = Data?.interviews.filter((x) => x.isCompleted == true).length ?? 0;
  const totalInterViews: number = Data?.interviews?.length ?? 0 - completedInterViews;

  const chartData = [
    { type: "Problem Solving", value: Data?.feedBack.reduce((a, b) => a+ b.problemSolving ,0) },
    { type: "System Design", value: Data?.feedBack.reduce((a, b) => a + b.systemDesign, 0) },
    { type: "Communication Skills", value: Data?.feedBack.reduce((a, b) => a + b.communicationSkills, 0) },
    { type: "Technical Accuracy", value: Data?.feedBack.reduce((a, b) => a + b.technicalAccuracy, 0) },
    { type: "Behavioral Responses", value: Data?.feedBack.reduce((a, b) => a + b.behavioralResponses, 0) },
    { type: "Time Management", value: Data?.feedBack.reduce((a, b) => a + b.timeManagement, 0) },
  ]

  return (
    <div className='w-full flex flex-col gap-5'>
      <div>
        <DashboardTabHeader completedInterViews={completedInterViews} totalInterViews={totalInterViews} />
      </div>
      <div className='flex flex-col xl:flex-row gap-y-5 gap-x-1.5'>
        <Component />
        <PerformanceRadarChart ChartData={chartData} />
        <LeaderBoard />
      </div>
    </div>
  )
}

export default DashboardTab