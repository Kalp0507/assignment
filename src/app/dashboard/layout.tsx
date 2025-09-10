"use client"

import { useRouter, usePathname } from "next/navigation"
import { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import {
    Home,
    FileText,
    HelpCircle,
    LogOut,
    Menu,
    Bell,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/hooks/useAuth"
import { Input } from "@/components/ui/input"

const sidebarItems = [
    { name: "Overview", icon: Home, path: "/dashboard/overview" },
    { name: "Submissions", icon: FileText, path: "/dashboard/submissions" },
    { name: "Guide", icon: HelpCircle, path: "/dashboard/guide" },
]

export default function DashboardLayout({ children }: { children: ReactNode }) {
    const router = useRouter()
    const pathname = usePathname()
    const { user, logout } = useAuth()   // ✅ get user from hook

    return (
        <div className="flex min-h-screen bg-muted/30">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r shadow-sm flex flex-col sticky top-0 left-0 h-screen">
                {/* Logo / Title */}
                <div className="p-6 font-bold text-xl text-primary tracking-tight">
                    Admin Dashboard
                </div>

                {/* Navigation */}
                <nav className="flex-1 space-y-1 px-3">
                    {sidebarItems.map((item) => {
                        const isActive = pathname.startsWith(item.path)
                        return (
                            <Button
                                key={item.path}
                                variant={isActive ? "secondary" : "ghost"}
                                className={cn(
                                    "w-full justify-start gap-2 rounded-lg",
                                    isActive
                                        ? "bg-primary/10 text-primary font-medium"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                                onClick={() => router.push(item.path)}
                            >
                                <item.icon className="h-4 w-4 shrink-0" />
                                {item.name}
                            </Button>
                        )
                    })}
                </nav>

                {/* Logout + User Info */}
                <div className="p-4 border-t space-y-2">
                    <div className="mt-auto flex items-center gap-2">
                        <div className="h-10 w-10 rounded-full bg-gray-300" />
                        <span className="font-semibold">{user?.username || "Guest"}</span> {/* ✅ display email */}
                    </div>
                    <Button
                        variant="destructive"
                        className="w-full items-center justify-center gap-2"
                        onClick={() => {
                            logout()
                            router.push("/login")
                        }}
                    >
                        <LogOut className="h-4 w-4 shrink-0" />
                        Logout
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Navbar */}
                <header className="flex items-center justify-between bg-white px-4 py-3 shadow-sm">
                    <div className="flex items-center gap-2">
                        <Menu className="md:hidden" />
                        <h1 className="text-xl font-bold">Dashboard</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <Input type="text" placeholder="Search..." className="hidden md:block w-64" />
                        <Bell className="h-5 w-5" />
                        <div className="h-8 w-8 rounded-full bg-gray-400" />
                    </div>
                </header>

                {/* Content Area */}
                <main className="flex-1 p-6">{children}</main>
            </div>
        </div>
    )
}
