"use client"

import { useRouter, usePathname } from "next/navigation"
import { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import {
    Home,
    FileText,
    HelpCircle,
    LogOut
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/hooks/useAuth"

const sidebarItems = [
    { name: "Overview", icon: Home, path: "/dashboard/overview" },
    { name: "Submissions", icon: FileText, path: "/dashboard/submissions" },
    { name: "Guide", icon: HelpCircle, path: "/dashboard/guide" },
]

export default function DashboardLayout({ children }: { children: ReactNode }) {
    const router = useRouter()
    const pathname = usePathname()
    const { logout } = useAuth()

    return (
        <div className="flex min-h-screen bg-muted/30">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r shadow-sm flex flex-col">
                <div className="p-6 font-bold text-xl text-primary">
                    Admin Dashboard
                </div>
                <nav className="flex-1 space-y-1 px-2">
                    {sidebarItems.map((item) => {
                        const isActive = pathname === item.path
                        return (
                            <Button
                                key={item.path}
                                variant={isActive ? "secondary" : "ghost"}
                                className={cn("w-full justify-start gap-2", isActive && "font-semibold")}
                                onClick={() => router.push(item.path)}
                            >
                                <item.icon className="h-4 w-4" />
                                {item.name}
                            </Button>
                        )
                    })}
                </nav>
                <div className="p-4">
                    <Button
                        variant="destructive"
                        className="w-full"
                        onClick={() => {
                            logout()
                            router.push("/login")
                        }}
                    >
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Navbar */}
                <header className="h-14 border-b bg-white flex items-center justify-between px-6 shadow-sm">
                    <h1 className="font-semibold text-lg">Dashboard</h1>
                    <div className="text-sm text-muted-foreground">
                        Welcome back 👋
                    </div>
                </header>

                {/* Content Area */}
                <main className="flex-1 p-6">{children}</main>
            </div>
        </div>
    )
}
