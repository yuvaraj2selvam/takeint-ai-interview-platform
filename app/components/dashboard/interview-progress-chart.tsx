"use client"

import { TrendingUp } from "lucide-react"
import { RadialBar, RadialBarChart } from "recharts"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart"




const chartConfig = {
    total: {
        label: "Total Mock Int."
    },
    inprogress: {
        label: "Inprogress"
    }
} satisfies ChartConfig



export function InterviewProgressChart({ CompletedInterviews, inProgress }: { CompletedInterviews: number, inProgress: number }) {

    const chartData = [
        { type: "total", visitors: CompletedInterviews, fill: "hsl(var(--chart-1))" },
        { type: "inprogress", visitors: inProgress, fill: "hsl(var(--chart-2))" },
    ]

    return (
        <Card className="flex z-10 min-w-2xs flex-col gap-0  flex-1 h-[380px] bg-white/60 rounded-4xl">
            <CardHeader className="items-center pb-0">
                <CardTitle>Interview Progress Summary</CardTitle>
            </CardHeader>
            <CardContent className=" p-5">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <RadialBarChart data={chartData} innerRadius={50} outerRadius={150}>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel nameKey="type" />}
                        />
                        <RadialBar dataKey="visitors" background={false} />
                    </RadialBarChart>
                </ChartContainer>
            </CardContent>

        </Card>
    )
}
