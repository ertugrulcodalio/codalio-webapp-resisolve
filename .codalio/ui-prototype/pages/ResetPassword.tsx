import React from "react";
import { Alert, AlertDescription } from "../components/ui/alert";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

import { ArrowLeft, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ResetPassword() {
    const [email, setEmail] = useState("");
    const [sent, setSent] = useState(false);
  return (
   <div className="min-h-screen w-full bg-muted/40 text-foreground min-w-0 overflow-x-hidden">
      <div className="mx-auto flex min-h-screen w-full max-w-md items-center justify-center px-4 py-10 min-w-0">
          <Card className="w-full"><CardHeader><CardTitle>Reset your password</CardTitle><CardDescription>Enter your email and we’ll send secure reset instructions.</CardDescription></CardHeader><CardContent className="grid gap-5">{sent && <Alert><Mail className="size-4" /><AlertDescription>Reset instructions have been sent to {email}.</AlertDescription></Alert>}<form className="grid gap-5" onSubmit={(event) => { event.preventDefault(); setSent(true); }}><div className="grid gap-2"><Label htmlFor="reset-email">Email address</Label><Input id="reset-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required placeholder="you@example.com" /></div><Button type="submit">Send reset link</Button></form><Button asChild variant="ghost" className="justify-start px-0"><Link to="/login"><ArrowLeft className="size-4" />Back to sign in</Link></Button></CardContent></Card>
      </div>
    </div>
  );
}