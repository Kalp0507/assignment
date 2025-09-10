"use client"

import { useFormContext } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { FormData } from "@/stores/formStore"

export default function StepOne() {
    const { register, formState: { errors } } = useFormContext<FormData>()

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <Label>Full Name</Label>
                <Input {...register("fullName", { required: "Full Name is required" })} />
                {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
            </div>

            <div className="space-y-2">
                <Label>Email</Label>
                <Input
                    type="email"
                    {...register("email", {
                        required: "Email is required",
                        // Correct regex (single backslashes). Matches typical email formats.
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email format",
                        },
                        // Optional: trim whitespace before validation
                        setValueAs: (v) => (typeof v === "string" ? v.trim() : v),
                    })}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
                <Label>Phone (Optional)</Label>
                <Input type="tel" {...register("phone")} />
            </div>
        </div>
    )
}
