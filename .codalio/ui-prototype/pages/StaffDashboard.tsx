import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import RequestStatusBadge from "../components/RequestStatusBadge";

import { Download } from "lucide-react";
import { Link } from "react-router-dom";

export default function StaffDashboard() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground min-w-0 overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-6">
          <section className="space-y-6"><div className="flex items-center justify-between"><div><p className="text-sm text-muted-foreground">Oakridge Apartments</p><h1 className="text-3xl font-bold">Maintenance request queue</h1></div><Button variant="outline"><Download className="size-4" />Export queue</Button></div><div className="grid gap-3">{[{id:"1042", tenant:"Alex Rivera · 402", category:"Plumbing", status:"In Progress"},{id:"1038", tenant:"Jamie Chen · 115", category:"Electrical", status:"Submitted"}].map((request) => <Card key={request.id}><CardContent className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between"><div><p className="font-semibold">#{request.id} · {request.category}</p><p className="text-sm text-muted-foreground">{request.tenant}</p></div><div className="flex items-center gap-3"><RequestStatusBadge status={request.status} /><Button asChild size="sm" variant="outline"><Link to={`/staff/requests/${request.id}`}>Manage</Link></Button></div></CardContent></Card>)}</div></section>
      </div>
    </div>
  );
}