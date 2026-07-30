
import { Link, Outlet, useLocation } from "react-router-dom";
import { Building2, ClipboardList, House, LayoutDashboard, Plus, Tags, Users, Wrench } from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { Button } from "./ui/button";
import AppHeader from "./AppHeader";
        export default function Layout({ item }) {
  const location = useLocation();
  const staffLinks = [{ label: "Dashboard", to: "/staff/dashboard", icon: LayoutDashboard }, { label: "Tenants", to: "/staff/tenants", icon: Users }, { label: "Properties", to: "/staff/properties", icon: Building2 }, { label: "Categories", to: "/staff/categories", icon: Tags }];
        return (
            <SidebarProvider><Sidebar collapsible="icon" className="border-r border-slate-800 bg-slate-950 text-slate-100"><SidebarHeader className="border-b border-slate-800 px-3 py-4"><Link to="/staff/dashboard" className="flex items-center gap-2 font-semibold text-white"><span className="grid size-8 place-items-center rounded-lg bg-blue-500 text-white"><Wrench className="size-4" /></span><span>ResiSolve</span></Link></SidebarHeader><SidebarContent><SidebarGroup><SidebarGroupLabel className="text-slate-400">Oakridge Apartments</SidebarGroupLabel><SidebarGroupContent><SidebarMenu>{staffLinks.map((item) => <SidebarMenuItem key={item.to}><SidebarMenuButton asChild isActive={location.pathname === item.to} tooltip={item.label}><Link to={item.to}><item.icon className="size-4" /><span>{item.label}</span></Link></SidebarMenuButton></SidebarMenuItem>)}</SidebarMenu></SidebarGroupContent></SidebarGroup></SidebarContent><SidebarFooter className="border-t border-slate-800 p-3"><p className="text-xs text-slate-400">Property operations</p></SidebarFooter></Sidebar><SidebarInset className="min-w-0 bg-background"><div className="flex min-h-14 items-center border-b border-border px-4"><SidebarTrigger className="mr-3" /><p className="text-sm font-medium text-muted-foreground">Staff workspace</p></div><main className="w-full min-w-0 p-4 md:p-6"><Outlet /></main></SidebarInset></SidebarProvider>
        );
        }