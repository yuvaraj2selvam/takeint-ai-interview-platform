import React from 'react'
import { Component } from '../progress-chart'
import DashboardTabHeader from '../dashboard-tab-header'
import { PerformanceRadarChart } from '../interview-chart'
import LeaderBoard from '../leader-board'

const DashboardTab = () => {
  return (
    <div className='w-full  flex flex-col gap-5'>
      <div>
        <DashboardTabHeader/>
      </div>
      <div className='flex flex-col xl:flex-row gap-y-5 gap-x-1.5'>
        <Component />
        <PerformanceRadarChart />
        <LeaderBoard />
      </div>
    </div>
  )
}

export default DashboardTab