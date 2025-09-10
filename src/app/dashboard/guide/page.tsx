// pages/guide.tsx
"use client"
import React from "react"

const GuidePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-6 text-center">Project Guide</h1>

                {/* Overview */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">Overview</h2>
                    <p className="text-gray-700 leading-relaxed">
                        This project is a <strong>React + Next.js Admin Dashboard</strong> with{" "}
                        <strong>Zustand</strong> for state management and{" "}
                        <strong>React Hook Form</strong> for form handling.
                        It provides a simple system for managing submissions, navigating through
                        different sections, and persisting user authentication using a mock localStorage-based flow.
                    </p>
                </section>

                {/* Features */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">Features</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Authentication (Signup, Login, Logout) with localStorage persistence</li>
                        <li>Multi-step form flow with validation (React Hook Form)</li>
                        <li>State management using Zustand with partial updates</li>
                        <li>Dashboard layout with sidebar navigation & top navbar</li>
                        <li>Submissions page for managing form entries</li>
                        <li>Responsive UI styled with Tailwind CSS + shadcn/ui</li>
                    </ul>
                </section>

                {/* Setup Instructions */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">Setup</h2>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>Clone the repository: <code className="bg-gray-100 px-1 rounded">git clone &lt;repo-url&gt;</code></li>
                        <li>Install dependencies: <code className="bg-gray-100 px-1 rounded">npm install</code></li>
                        <li>Start development server: <code className="bg-gray-100 px-1 rounded">npm run dev</code></li>
                        <li>Open <code className="bg-gray-100 px-1 rounded">http://localhost:3000</code> in your browser</li>
                    </ol>
                </section>

                {/* How it works */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-3">How It Works</h2>
                    <p className="text-gray-700 leading-relaxed">
                        - The <strong>Zustand store</strong> manages form data and supports partial updates without overwriting other fields.
                        - <strong>React Hook Form</strong> handles form validation and error messages.
                        - Authentication is mocked: user data is stored in <code>localStorage</code>.
                        - The dashboard layout is reusable, with a sidebar for navigation and a content area for each page.
                        - Submissions are tracked and displayed inside the dashboard.
                    </p>
                </section>

                {/* Closing */}
                <p className="text-center mt-8 text-gray-600">
                    This guide provides a complete overview of the project — including setup, features, and workflow — to help you understand and extend it easily.
                </p>
            </div>
        </div>
    )
}

export default GuidePage
