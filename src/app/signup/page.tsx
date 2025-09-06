"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function SignupPage() {
    const { signup, loading, error } = useAuth();
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [localError, setLocalError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLocalError(null);

        if (password !== confirmPassword) {
            setLocalError("Passwords do not match");
            return;
        }

        try {
            await signup(email, password)
            toast.success("Signed up successfully!")
            router.push("/")
        } catch (err) {
            console.log(err);
            toast.error("Signup failed. Please try again.")
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-muted px-4">
            <Card className="w-full max-w-md shadow-lg border">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">
                        Create an Account
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="********"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                placeholder="********"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>

                        {/* Inline errors */}
                        {(localError || error) && (
                            <p className="text-sm text-red-500">
                                {localError || error}
                            </p>
                        )}

                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? "Signing up..." : "Sign Up"}
                        </Button>
                    </form>

                    <p
                        onClick={() => router.push("/auth/login")}
                        className="text-sm mt-6 text-center text-blue-600 hover:underline cursor-pointer"
                    >
                        Already have an account? Login
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
