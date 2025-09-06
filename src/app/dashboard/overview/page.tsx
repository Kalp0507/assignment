"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts"
import { useMemo } from "react"

export default function OverviewPage() {
    // Dummy chart data
    const data = useMemo(
        () => [
            { month: "Jan", submissions: 4 },
            { month: "Feb", submissions: 6 },
            { month: "Mar", submissions: 3 },
            { month: "Apr", submissions: 8 },
            { month: "May", submissions: 5 },
            { month: "Jun", submissions: 9 },
        ],
        []
    )

    return (
        <div className="space-y-6 overflow-hidden">
            {/* Cards Row */}
            <div className="grid gap-6 md:grid-cols-3">
                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle>Total Submissions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">35</p>
                        <p className="text-sm text-muted-foreground">Across all users</p>
                    </CardContent>
                </Card>

                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle>Active Users</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">12</p>
                        <p className="text-sm text-muted-foreground">Currently logged in</p>
                    </CardContent>
                </Card>

                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle>Completion Rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">78%</p>
                        <p className="text-sm text-muted-foreground">Form completion</p>
                    </CardContent>
                </Card>
            </div>

            {/* Chart Section */}
            <Card className="shadow-md">
                <CardHeader>
                    <CardTitle>Submissions Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Area
                                    type="monotone"
                                    dataKey="submissions"
                                    stroke="#3b82f6"
                                    fill="#3b82f6"
                                    strokeWidth={2}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
