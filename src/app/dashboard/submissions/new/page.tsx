"use client"

import { useState } from "react"
import { useForm, FormProvider } from "react-hook-form"
import { useFormStore, FormData } from "@/stores/formStore"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import StepOne from "@/components/multistepForm/StepOne"
import StepTwo from "@/components/multistepForm/StepTwo"
import StepThree from "@/components/multistepForm/StepThree"
import StepFour from "@/components/multistepForm/StepFour"
import { useRouter } from "next/navigation"

const steps = ["Personal Info", "Address", "Account", "Confirm"]

export default function MultiStepFormPage() {
    const methods = useForm<FormData>({ mode: "onBlur" })
    const { handleSubmit, watch } = methods
    const [step, setStep] = useState(1)
    const saveFormData = useFormStore((state) => state.saveFormData)
    const formData = useFormStore((state) => state.formData)
    const router = useRouter();
    const addSubmission = useFormStore((state) => state.addSubmission)

    const onSubmit = (data: FormData) => {
        saveFormData(data)
        if (step < 4) {
            setStep(step + 1)
        } else {
            addSubmission() // save final submission
            toast.success("Form submitted successfully!")
            router.push('/dashboard/submissions')
        }
    }

    return (
        <div className="p-8 space-y-10">
            {/* Stepper */}
            <div className="space-y-4">
                <div className="flex justify-between">
                    {steps.map((label, index) => (
                        <span
                            key={label}
                            className={`text-sm mx-auto font-medium ${step === index + 1
                                ? "text-blue-600 font-semibold"
                                : step > index + 1
                                    ? "text-green-600"
                                    : "text-gray-400"
                                }`}
                        >
                            {label}
                        </span>
                    ))}
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div
                        className="h-2 bg-blue-600 rounded-full transition-all duration-300"
                        style={{ width: `${(step / steps.length) * 100}%` }}
                    />
                </div>
            </div>

            {/* Form Section */}
            <div className="bg-white p-8 rounded-xl shadow-sm border">
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                        {step === 1 && <StepOne />}
                        {step === 2 && <StepTwo />}
                        {step === 3 && <StepThree />}
                        {step === 4 && <StepFour data={{ ...formData, ...watch() }} />}

                        {/* Actions */}
                        <div className="flex justify-between pt-6 border-t">
                            {step > 1 ? (
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => setStep(step - 1)}
                                >
                                    Back
                                </Button>
                            ) : (
                                <div />
                            )}
                            <Button type="submit" size="lg">
                                {step === steps.length ? "Submit" : "Next"}
                            </Button>
                        </div>
                    </form>
                </FormProvider>
            </div>
        </div>
    )
}
