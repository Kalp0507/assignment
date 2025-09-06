"use client"

import { useFormContext } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { FormData } from "@/stores/formStore"

export default function StepThree() {
    const { register, watch, formState: { errors } } = useFormContext<FormData>()
    const password = watch("password")

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <Label>Username</Label>
                <Input {...register("username", { required: "Username is required" })} />
                {errors.username?.message && <p className="text-red-500 text-sm">{errors.username.message}</p>}
            </div>
            <div className="space-y-2">
                <Label>Password</Label>
                <Input type="password" {...register("password", {
                    required: "Password is required",
                    minLength: { value: 8, message: "Password must be at least 8 characters" }
                })} />
                {errors.password?.message && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>
            <div className="space-y-2">
                <Label>Confirm Password</Label>
                <Input
                    type="password"
                    {...register("confirmPassword", {
                        required: "Confirm Password is required",
                        validate: (val) => val === password || "Passwords do not match",
                    })}
                />
                {errors.confirmPassword?.message && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
            </div>
        </div>
    )
}
