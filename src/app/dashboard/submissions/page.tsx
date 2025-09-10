"use client"

import { useFormStore } from "@/stores/formStore"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Inbox } from "lucide-react"

export default function SubmissionsPage() {
    const submissions = useFormStore((s) => s.submissions)
    const loadFromStorage = useFormStore((s) => s.loadFromStorage)
    const router = useRouter();

    useEffect(() => {
        loadFromStorage()
    }, [loadFromStorage])

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Submissions</h1>
                <Button onClick={() => router.push('submissions/new')}>+ Add New Submission</Button>
            </div>

            {/* Table */}
            {submissions.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center shadow-sm">
                    <Inbox className="h-12 w-12 text-muted-foreground mb-4" />
                    <h2 className="text-lg font-semibold">No submissions yet</h2>
                    <p className="text-sm text-muted-foreground mb-6">
                        Get started by adding your first submission.
                    </p>
                    <Button onClick={() => router.push("submissions/new")}>
                        + Add New Submission
                    </Button>
                </div>
            ) : (
                <div className="grid gap-4 md:grid-cols-2">
                    {submissions.map((sub, idx) => (
                        <Card key={idx} className="shadow-md">
                            <CardHeader>
                                <CardTitle>
                                    {sub.fullName || sub.username || `Submission #${idx + 1}`}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-1 text-sm">
                                {sub.email && <p><span className="font-medium">Email:</span> {sub.email}</p>}
                                {sub.phone && <p><span className="font-medium">Phone:</span> {sub.phone}</p>}
                                {sub.street && <p><span className="font-medium">Address:</span> {sub.street}, {sub.city} {sub.zip}, {sub.country}</p>}
                                {sub.username && <p><span className="font-medium">Username:</span> {sub.username}</p>}
                                {/* 🔒 Don't show password/confirmPassword for privacy */}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
}
