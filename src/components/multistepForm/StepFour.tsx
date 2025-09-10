"use client"

import type { FormData } from "@/stores/formStore"

type Step4Props = { data: FormData }

export default function StepFour({ data }: Step4Props) {
    const hidden = ["confirmPassword", "password"]
    const entries = Object.entries(data).filter(([k, v]) => v && !hidden.includes(k))

    return (
        <div className="space-y-6">
            <h3 className="font-semibold text-xl">Confirm Your Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {entries.map(([key, value]) => (
                    <div key={key} className="p-4 border rounded-lg bg-gray-50 shadow-sm">
                        <p className="text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, " $1")}</p>
                        <p className="font-medium text-gray-900">{String(value)}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
