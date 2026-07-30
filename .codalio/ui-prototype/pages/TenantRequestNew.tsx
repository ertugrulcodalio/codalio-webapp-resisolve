import React from "react";
import { Alert, AlertDescription } from "../components/ui/alert";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function TenantRequestNew() {
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [severity, setSeverity] = useState("Medium");
    const navigate = useNavigate();
    const submit = (event: React.FormEvent) => { event.preventDefault(); navigate("/tenant/requests"); };
  return (
   <div className="min-h-screen w-full bg-background text-foreground min-w-0 overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-2xl flex-col px-4 py-6 pb-24 md:px-6 min-w-0">
          <Card><CardHeader><Button asChild variant="ghost" className="w-fit px-0"><Link to="/tenant/requests">← My requests</Link></Button><CardTitle>Tell us what needs attention</CardTitle></CardHeader><CardContent><form className="grid gap-5" onSubmit={submit}><div className="grid gap-2"><Label>Category</Label><Select value={category} onValueChange={setCategory}><SelectTrigger><SelectValue placeholder="Choose a category" /></SelectTrigger><SelectContent><SelectItem value="Plumbing">Plumbing</SelectItem><SelectItem value="Electrical">Electrical</SelectItem><SelectItem value="Appliances">Appliances</SelectItem></SelectContent></Select></div><div className="grid gap-2"><Label>Description</Label><Textarea value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Describe the issue and location" required /></div><div className="grid gap-2"><Label>Severity</Label><RadioGroup value={severity} onValueChange={setSeverity} className="flex flex-wrap gap-3">{["Low", "Medium", "High", "Emergency"].map((item) => <label key={item} className="flex items-center gap-2 text-sm"><RadioGroupItem value={item} />{item}</label>)}</RadioGroup></div><Button type="submit">Submit request</Button></form></CardContent></Card>
      </div>
    </div>
  );
}