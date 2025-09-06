"use client"

import { useFormContext } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { FormData } from "@/stores/formStore"

export default function StepTwo() {
    const { register, formState: { errors } } = useFormContext<FormData>()

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <Label>Street Address</Label>
                <Input {...register("street", { required: "Street is required" })} />
                {errors.street?.message && <p className="text-red-500 text-sm">{errors.street.message}</p>}
            </div>
            <div className="space-y-2">
                <Label>City</Label>
                <Input {...register("city", { required: "City is required" })} />
                {errors.city?.message && <p className="text-red-500 text-sm">{errors.city.message}</p>}
            </div>
            <div className="space-y-2">
                <Label>Zip Code</Label>
                <Input type="number" {...register("zip", { required: "Zip Code is required" })} />
                {errors.zip?.message && <p className="text-red-500 text-sm">{errors.zip.message}</p>}
            </div>
            <div className="space-y-2">
                <Label>Country</Label>
                <Input {...register("country", { required: "Country is required" })} />
                {errors.country?.message && <p className="text-red-500 text-sm">{errors.country.message}</p>}
            </div>
        </div>
    )
}
