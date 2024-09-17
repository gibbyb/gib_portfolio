"use client"
import { Bar, BarChart, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardHeader,
} from "~/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart2"

const chartData = [
  { technology: "Linux", proficiency: 95 },
  { technology: "Docker", proficiency: 90 },
  { technology: "TypeScript", proficiency: 85 },
  { technology: "Next.js", proficiency: 80 },
  { technology: "React", proficiency: 80 },
  { technology: "SQL", proficiency: 80 },
  { technology: "React Native", proficiency: 75 },
  { technology: "Java", proficiency: 75 },
  { technology: "PHP", proficiency: 70 },
  { technology: "Python", proficiency: 70 },
  { technology: "Swift", proficiency: 60 },
]

const chartConfig = {
  proficiency: {
    label: "Proficiency",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export default function Component() {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader/>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <XAxis
              type="number"
              dataKey="proficiency"
              domain={[0, 100]}
              tickCount={0}
              axisLine={false}
              tickLine={false}
              fontSize={12}
              width={1000}
            />
            <YAxis
              dataKey="technology"
              type="category"
              tickLine={false}
              axisLine={false}
              width={100}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />
            <Bar 
              dataKey="proficiency" 
              fill="var(--color-proficiency)" 
              radius={[0, 4, 4, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
