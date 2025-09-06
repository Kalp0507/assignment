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
                {errors.fullName?.message && (
                    <p className="text-red-500 text-sm">{errors.fullName.message}</p>
                )}
            </div>
            <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" {...register("email", { required: "Email is required" })} />
                {errors.email?.message && (
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
            </div>
            <div className="space-y-2">
                <Label>Phone (Optional)</Label>
                <Input type="tel" {...register("phone")} />
            </div>
        </div>
    )
}
