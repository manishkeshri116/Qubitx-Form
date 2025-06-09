import React from 'react'
import MainBar from './components/MainBar'
import OverlappingImages from './components/image'
import SystemStatus from './matrics/SystemStatus'
import ActivityFeed from './matrics/ActivitiFeed'
import Dashboard from './matrics/MatricsCard'
import MultiStepForm from '@/steps'
import { StatusItems } from './status'
import StepForm from '@/components/stepper/step'
import { InfoCard } from '@/components/hover/HoverCard'

const page = () => {
  return (
    // <MainBar />
    // <OverlappingImages/>
    <>
      {/* // <MainBar />
      // <OverlappingImages /> */}
      {/* <SystemStatus />
      <ActivityFeed />
      <Dashboard/>
      <MultiStepForm/> */}
      {/* <StatusItems/>
      <StepForm/> */}

       <main className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <InfoCard
        location="New York, USA"
        title="Main Event"
        subtitle="Annual Conference 2025"
        description="Join us for an engaging conference where industry leaders discuss the future of technology and innovation. Network with professionals and explore new opportunities."
        footerText="Updated 5 minutes ago"
     
      />
    </main>
      </>
  )
}

export default page