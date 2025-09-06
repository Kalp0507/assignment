// pages/guide.tsx
import React from 'react';

const GuidePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-6 text-center">Guide</h1>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
                    <p>
                        This project is a <strong>React-based form management system</strong> using <strong>Zustand</strong> for state management.
                        It allows users to fill out forms, save progress, and persist data locally, making it suitable for
                        multi-step forms, surveys, or data collection applications.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Features</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Persistent form data using Zustand and localStorage</li>
                        <li>Partial updates to form fields without overwriting other data</li>
                        <li>Supports multi-step forms</li>
                        <li>Lightweight and fast state management</li>
                        <li>Easy integration with backend APIs</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Setup</h2>
                    <ol className="list-decimal list-inside space-y-1">
                        <li>Clone the repository: <code>git clone &lt;repo-url&gt;</code></li>
                        <li>Install dependencies: <code>npm install</code></li>
                        <li>Start the development server: <code>npm run dev</code></li>
                        <li>Open <code>http://localhost:3000</code> to view the project</li>
                    </ol>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
                    <p>
                        The project uses a Zustand store to manage form data. The store allows partial updates and can optionally
                        persist data in <strong>localStorage</strong> so that user inputs are saved across page reloads.
                    </p>
                </section>

                <p className="text-center mt-8 text-gray-600">
                    This guide provides a comprehensive overview of the project, its features, setup, and usage instructions.
                </p>
                <p className="text-center mt-8 text-gray-600">
                    I used ChatGPT to complete this.
                </p>
            </div>
        </div>
    );
};

export default GuidePage;
