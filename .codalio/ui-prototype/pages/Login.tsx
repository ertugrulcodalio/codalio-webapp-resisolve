import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

import { LogIn } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent) => { event.preventDefault(); navigate(email.includes("staff") ? "/staff/dashboard" : "/tenant/dashboard"); };
  return (
   <div className="min-h-screen w-full bg-muted/40 text-foreground min-w-0 overflow-x-hidden">
      <div className="mx-auto flex min-h-screen w-full max-w-md items-center justify-center px-4 py-10 min-w-0">
          <Card className="w-full shadow-sm"><CardHeader><p className="text-sm font-medium text-primary">Oakridge Apartments</p><CardTitle className="text-2xl">Welcome to ResiSolve</CardTitle><CardDescription>Sign in to manage your maintenance requests.</CardDescription></CardHeader><CardContent><form className="grid gap-5" onSubmit={handleSubmit}><div className="grid gap-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" required /></div><div className="grid gap-2"><div className="flex items-center justify-between"><Label htmlFor="password">Password</Label><Link to="/reset-password" className="text-sm text-primary hover:underline">Forgot password?</Link></div><Input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required /></div><label className="flex items-center gap-2 text-sm text-muted-foreground"><Checkbox checked={remember} onCheckedChange={(value) => setRemember(value === true)} />Remember this device</label><Button type="submit" className="w-full">Sign in <LogIn className="size-4" /></Button></form></CardContent></Card>
      </div>
    </div>
  );
}