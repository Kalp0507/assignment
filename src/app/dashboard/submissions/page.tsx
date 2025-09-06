"use client"

import { useFormStore } from "@/stores/formStore"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function SubmissionsPage() {
    const submissions = useFormStore((s) => s.submissions)
    const router = useRouter();

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Submissions</h1>
                <Button onClick={() => router.push('submissions/new')}>+ Add New Submission</Button>
            </div>

            {/* Table */}
            {submissions.length === 0 ? (
                <p className="text-muted-foreground">No submissions yet.</p>
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
