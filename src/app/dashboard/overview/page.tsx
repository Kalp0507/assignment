"use client"

import { useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    AreaChart,
    Area,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Dashboard() {
    // Dummy chart + table data
    const submissionsData = useMemo(
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

    const salesData = useMemo(
        () => [
            { name: "Product A", value: 400 },
            { name: "Product B", value: 300 },
            { name: "Product C", value: 300 },
            { name: "Product D", value: 200 },
        ],
        []
    )

    const recentSales = [
        { id: 1, user: "John Doe", amount: "$120", status: "Completed" },
        { id: 2, user: "Jane Smith", amount: "$80", status: "Pending" },
        { id: 3, user: "Sam Wilson", amount: "$220", status: "Completed" },
        { id: 4, user: "Lisa Ray", amount: "$150", status: "Failed" },
    ]

    return (
        <main className="flex-1space-y-6 overflow-auto">
            {/* Tabs */}
            <Tabs defaultValue="overview">
                <TabsList className="flex gap-2 rounded-lg bg-muted p-1 h-12">
                    <TabsTrigger
                        value="overview"
                        className="rounded-md px-4 py-3 text-sm font-medium transition-all data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-primary hover:text-primary"
                    >
                        Overview
                    </TabsTrigger>
                    <TabsTrigger
                        value="analytics"
                        className="rounded-md px-4 py-3 text-sm font-medium transition-all data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-primary hover:text-primary"
                    >
                        Analytics
                    </TabsTrigger>
                    <TabsTrigger
                        value="notifications"
                        disabled
                        className="rounded-md px-4 py-3 text-sm font-medium opacity-50 cursor-not-allowed"
                    >
                        Notifications
                    </TabsTrigger>
                </TabsList>


                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-6">
                    {/* Metric Cards */}
                    <div className="grid gap-6 md:grid-cols-4">
                        <Card>
                            <CardHeader><CardTitle>Total Revenue</CardTitle></CardHeader>
                            <CardContent><p className="text-3xl font-bold">$45,000</p></CardContent>
                        </Card>
                        <Card>
                            <CardHeader><CardTitle>Users</CardTitle></CardHeader>
                            <CardContent><p className="text-3xl font-bold">1,240</p></CardContent>
                        </Card>
                        <Card>
                            <CardHeader><CardTitle>Sales</CardTitle></CardHeader>
                            <CardContent><p className="text-3xl font-bold">320</p></CardContent>
                        </Card>
                        <Card>
                            <CardHeader><CardTitle>Active Now</CardTitle></CardHeader>
                            <CardContent><p className="text-3xl font-bold">58</p></CardContent>
                        </Card>
                    </div>

                    {/* Charts */}
                    <div className="grid gap-6 md:grid-cols-2">
                        <Card>
                            <CardHeader><CardTitle>Submissions Over Time</CardTitle></CardHeader>
                            <CardContent className="h-72">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={submissionsData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Area type="monotone" dataKey="submissions" stroke="#3b82f6" fill="#3b82f6" strokeWidth={2} />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader><CardTitle>Sales Breakdown</CardTitle></CardHeader>
                            <CardContent className="h-72">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie data={salesData} dataKey="value" nameKey="name" outerRadius={100}>
                                            {salesData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={["#3b82f6", "#10b981", "#f59e0b", "#ef4444"][index % 4]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Table */}
                    <Card>
                        <CardHeader className="flex items-center justify-between">
                            <CardTitle>Recent Sales</CardTitle>
                            <Button variant="outline">Download</Button>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>User</TableHead>
                                        <TableHead>Amount</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {recentSales.map((sale) => (
                                        <TableRow key={sale.id}>
                                            <TableCell>{sale.user}</TableCell>
                                            <TableCell>{sale.amount}</TableCell>
                                            <TableCell>{sale.status}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Analytics Tab */}
                <TabsContent value="analytics">
                    <Card>
                        <CardHeader><CardTitle>Bar Chart Example</CardTitle></CardHeader>
                        <CardContent className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={submissionsData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="submissions" fill="#10b981" />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </main>
    )
}
