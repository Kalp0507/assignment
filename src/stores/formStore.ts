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
    loadFromStorage: () => void;
}

const STORAGE_KEY = "submissions";

export const useFormStore = create<FormState>((set, get) => ({
    formData: {},
    submissions: [],

    saveFormData: (data) =>
        set((state) => ({ formData: { ...state.formData, ...data } })),

    addSubmission: () => {
        const newSubmissions = [...get().submissions, get().formData];
        // Save to localStorage
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newSubmissions));

        set({
            submissions: newSubmissions,
            formData: {}, // reset form after submission
        });
    },

    loadFromStorage: () => {
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                set({ submissions: JSON.parse(stored) });
            }
        }
    },
}));
