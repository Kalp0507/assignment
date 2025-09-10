"use client"

import { useFormContext } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select"
import type { FormData } from "@/stores/formStore"

export default function StepTwo() {
    const { register, setValue, formState: { errors } } = useFormContext<FormData>()

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <Label>Street Address</Label>
                <Input {...register("street", { required: "Street is required" })} />
                {errors.street && <p className="text-red-500 text-sm">{errors.street.message}</p>}
            </div>

            <div className="space-y-2">
                <Label>City</Label>
                <Input {...register("city", { required: "City is required" })} />
                {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
            </div>

            <div className="space-y-2">
                <Label>Zip Code</Label>
                <Input
                    type="text"
                    {...register("zip", {
                        required: "Zip Code is required",
                        pattern: { value: /^[0-9]+$/, message: "Zip must be numeric" },
                    })}
                />
                {errors.zip && <p className="text-red-500 text-sm">{errors.zip.message}</p>}
            </div>

            <div className="space-y-2">
                <Label>Country</Label>
                <Select onValueChange={(val) => setValue("country", val)}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="USA">USA</SelectItem>
                        <SelectItem value="India">India</SelectItem>
                        <SelectItem value="UK">UK</SelectItem>
                        <SelectItem value="Canada">Canada</SelectItem>
                    </SelectContent>
                </Select>
                {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
            </div>
        </div>
    )
}
