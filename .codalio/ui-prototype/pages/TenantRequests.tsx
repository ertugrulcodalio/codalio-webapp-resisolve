import React from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import MaintenanceRequestCard from "../components/MaintenanceRequestCard";

import { Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function TenantRequests() {
    const [query, setQuery] = useState("");
    const [status, setStatus] = useState("all");
    const requests = [{ id: "1042", category: "Plumbing", description: "Kitchen faucet is dripping continuously.", status: "In Progress", building: "Oakridge", unit: "402", updatedAt: "2 hours ago" }, { id: "1038", category: "Electrical", description: "Bedroom outlet needs attention.", status: "Submitted", building: "Oakridge", unit: "402", updatedAt: "Yesterday" }];
  return (
   <div className="min-h-screen w-full bg-background text-foreground min-w-0 overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-5xl flex-col px-4 py-6 pb-24 md:px-6 min-w-0">
          <section className="space-y-5"><div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><h1 className="text-3xl font-bold">My requests</h1><Button asChild><Link to="/tenant/requests/new"><Plus className="size-4" />New request</Link></Button></div><div className="flex flex-col gap-3 sm:flex-row"><Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search requests" /><Select value={status} onValueChange={setStatus}><SelectTrigger className="sm:w-48"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="all">All statuses</SelectItem><SelectItem value="Submitted">Submitted</SelectItem><SelectItem value="In Progress">In Progress</SelectItem></SelectContent></Select></div><div className="grid gap-3">{requests.filter((request) => (status === "all" || request.status === status) && request.description.toLowerCase().includes(query.toLowerCase())).map((request) => <MaintenanceRequestCard key={request.id} {...request} detailRoute={`/tenant/requests/${request.id}`} />)}</div></section>
      </div>
    </div>
  );
}