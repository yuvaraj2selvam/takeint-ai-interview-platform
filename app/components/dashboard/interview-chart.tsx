"use client"

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card"

const chartData = [
    { month: "Problem Solving", desktop: 186 },
    { month: "System Design", desktop: 305 },
    { month: "Communication Skills", desktop: 237 },
    { month: "Technical Accuracy", desktop: 273 },
    { month: "Behavioral Responses", desktop: 209 },
    { month: "Time Management", desktop: 214 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

export function PerformanceRadarChart() {
    return (
        <Card className="min-w-3xs p-0 m-0 z-10 gap-0 flex justify-center items-center h-fit bg-white/60 rounded-4xl">
            <CardHeader className="h-full w-full">
                <CardTitle className="p-3 pt-5">Radial Chart</CardTitle>
            </CardHeader>
            <CardContent className="px-5">
                <ChartContainer
                    config={chartConfig}
                    className="w-[280px] md:w-[500px] aspect-square flex justify-center max-h-[320px]"
                >
                    <RadarChart className="w-[180px] md:w-[500px] flex justify-center !h-[320px] !max-w-[600px]"  data={chartData}>
                        <ChartTooltip  cursor={false} content={<ChartTooltipContent />} />
                        <PolarAngleAxis className="" dataKey="month" />
                        <PolarGrid className="" />
                        <Radar
                            dataKey="desktop"
                            fill="var(--color-desktop)"
                            fillOpacity={0.8}
                        />
                    </RadarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
