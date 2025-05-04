"use client"

import { TrendingUp } from "lucide-react"
import { RadialBar, RadialBarChart } from "recharts"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart"


const chartData = [
    { browser: "chrome", visitors: 100, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 20, fill: "var(--color-safari)" },
]

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    chrome: {
        label: "Chrome",
        color: "hsl(var(--chart-1))",
    },
    safari: {
        label: "Safari",
        color: "hsl(var(--chart-2))",
    },
    firefox: {
        label: "Firefox",
        color: "hsl(var(--chart-3))",
    },
    edge: {
        label: "Edge",
        color: "hsl(var(--chart-4))",
    },
    other: {
        label: "Other",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig

export function Component() {
    return (
        <Card className="flex z-10 min-w-2xs flex-col gap-0  flex-1 h-[380px] bg-white/60 rounded-4xl">
            <CardHeader className="items-center pb-0">
                <CardTitle>Radial Chart</CardTitle>
            </CardHeader>
            <CardContent className=" p-5">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <RadialBarChart data={chartData} innerRadius={50} outerRadius={150}>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel nameKey="browser" />}
                        />
                        <RadialBar dataKey="visitors" background={false} />
                    </RadialBarChart>
                </ChartContainer>
            </CardContent>
          
        </Card>
    )
}
