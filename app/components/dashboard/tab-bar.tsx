import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'


const Tabitems = [
    { value: "Dashboard", key: "dashboard" }, // Overview of all activities, stats, recommendations
    { value: "Live Interviews", key: "liveinterview" }, // Predefined company-specific interviews (Amazon, Google, etc.)
    { value: "Mock Interviews", key: "mockinterview" },  // Practice with AI-generated random questions
    { value: "Create Interview", key: "createinterview" }, // Manually create custom interview flows
    { value: "Interview Sessions", key: "interviewsession" }, // View & manage all ongoing and past interview sessions
    { value: "Feedback & Scores", key: "feedbackscores" }, // View feedback, scores, and improvement suggestions
    // "Question Bank",       // Browse questions categorized by company/role/difficulty
    // "AI Recommendations",  // Personalized skill improvement advice
    // "Profile & Resume",    // Manage resume, personal info, linked accounts
    // { value: "Settings", key: "settings" }             // General user preferences
]


const TabBar = () => {
    return (
            <TabsList className='gap-2.5 px-1 py-6 rounded-r-full rounded-l-full'>
                {
                    Tabitems.map((item, index) => <TabsTrigger className='py-5 text-sm px-3 duration-300 rounded-full hover:scale-105 hover:bg-green/80 ' key={index} value={item.key}>{item.value}</TabsTrigger>)
                }
            </TabsList>

    )
}

export default TabBar