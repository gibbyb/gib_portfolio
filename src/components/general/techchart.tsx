"use client"
import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardHeader, CardContent } from "~/components/ui/card"

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

export default function TechChart() {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader />
      <CardContent>
        {/* The key here is `ResponsiveContainer` */}
        <ResponsiveContainer width="100%" height={500}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            barCategoryGap="10%"  // Percent-based or pixel-based vertical space between bars
          >
            {/* XAxis, YAxis */}
            <XAxis type="number" hide />
            <YAxis 
              dataKey="technology" 
              type="category" 
              tickLine={false}
              axisLine={false}
              width={125} // Give Y-Axis ample room to show long text
              fontSize={18} 
              stroke="hsl(var(--primary)"
            />
            <Bar 
              dataKey="proficiency" 
              fill="hsl(var(--chart-1)" 
              barSize={30}
              radius={[10, 10, 10, 10]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
