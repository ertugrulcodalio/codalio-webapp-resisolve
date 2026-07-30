
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft, LogOut, Menu, User } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";

        export default function AppHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const isStaff = location.pathname.startsWith("/staff");
  const showBack = location.pathname.includes("/requests/") || location.pathname === "/reset-password";
        return (
            <header className="sticky top-0 z-30 flex min-h-14 items-center justify-between border-b border-border bg-background/95 px-4 backdrop-blur"><div className="flex min-w-0 items-center gap-2">{showBack && <Button variant="ghost" size="icon" className="min-h-11 min-w-11" aria-label="Go back" onClick={() => navigate(-1)}><ChevronLeft className="size-5" /></Button>}<Link to={isStaff ? "/staff/dashboard" : "/tenant/dashboard"} className="truncate text-sm font-semibold text-foreground">{isStaff ? "Oakridge Apartments" : "ResiSolve"}</Link></div><div className="flex items-center gap-1"><nav className="hidden items-center gap-1 md:flex" aria-label="Resident navigation">{!isStaff && <><Button asChild variant="ghost" size="sm"><Link to="/tenant/dashboard">Dashboard</Link></Button><Button asChild variant="ghost" size="sm"><Link to="/tenant/requests">My requests</Link></Button></>}</nav><DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" size="icon" className="min-h-11 min-w-11" aria-label="Open profile menu"><Avatar className="size-8"><AvatarFallback className="bg-primary text-xs text-primary-foreground">AR</AvatarFallback></Avatar></Button></DropdownMenuTrigger><DropdownMenuContent align="end"><DropdownMenuItem asChild><Link to="/reset-password"><User className="mr-2 size-4" />Reset password</Link></DropdownMenuItem><DropdownMenuSeparator /><DropdownMenuItem onClick={() => navigate("/")}><LogOut className="mr-2 size-4" />Logout</DropdownMenuItem></DropdownMenuContent></DropdownMenu></div></header>
        );
        }