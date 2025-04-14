import {
    HomeIcon,
    BookOpenIcon,
    ClockIcon,
    UserIcon,
    CogIcon,
    LifeBuoyIcon,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "../ui/sidebar"

export const items = [
    { title: "Dashboard", url: "/dashboard", icon: HomeIcon },
    { title: "Practice", url: "/practice", icon: BookOpenIcon },
    { title: "Interview History", url: "/history", icon: ClockIcon },
    { title: "AI Coach", url: "/coach", icon: UserIcon },
    { title: "Settings", url: "/settings", icon: CogIcon },
    { title: "Support", url: "/support", icon: LifeBuoyIcon },
];
export function AppSidebar() {
    return (
        <Sidebar variant="sidebar" className="h-full" collapsible="icon">
            <SidebarHeader className="bg-gray py-10 w-full flex text-3xl overflow-hidden font-semibold items-center justify-center">
                TakeInt
            </SidebarHeader>
            <SidebarContent className="bg-gray flex items-center justify-start">
                <SidebarGroup className="px-2">
                    <SidebarGroupContent className="flex gap-10">
                        <SidebarMenu className="gap-5">
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton className="text-lg p-5 hover:bg-black hover:text-white" asChild>
                                        <a href={item.url}>
                                            <item.icon className="h-10 w-10" />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
