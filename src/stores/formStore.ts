import { create } from "zustand";

// Define the form data shape
export interface FormData {
    fullName?: string;
    email?: string;
    phone?: string;
    street?: string;
    city?: string;
    zip?: string;
    country?: string;
    username?: string;
    password?: string;
    confirmPassword?: string;
}

interface FormState {
    formData: FormData;
    submissions: FormData[];
    saveFormData: (data: Partial<FormData>) => void;
    addSubmission: () => void;
}

export const useFormStore = create<FormState>((set, get) => ({
    formData: {},
    submissions: [],
    saveFormData: (data) =>
        set((state) => ({ formData: { ...state.formData, ...data } })),
    addSubmission: () =>
        set((state) => ({
            submissions: [...state.submissions, state.formData],
            formData: {}, // reset after submit
        })),
}));
