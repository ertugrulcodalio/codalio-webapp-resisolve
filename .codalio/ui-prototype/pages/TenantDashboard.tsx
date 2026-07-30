import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import MaintenanceRequestCard from "../components/MaintenanceRequestCard";

import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function TenantDashboard() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground min-w-0 overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-6 pb-24 md:px-6 min-w-0">
          <section className="space-y-6"><div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-sm text-muted-foreground">Oakridge Apartments · Unit 402</p><h1 className="text-3xl font-bold text-foreground">Good morning, Alex</h1></div><Button asChild><Link to="/tenant/requests/new"><Plus className="size-4" />New request</Link></Button></div><div className="grid grid-cols-3 gap-3"><Card><CardContent className="p-4"><p className="text-2xl font-bold">2</p><p className="text-sm text-muted-foreground">Open</p></CardContent></Card><Card><CardContent className="p-4"><p className="text-2xl font-bold">1</p><p className="text-sm text-muted-foreground">In progress</p></CardContent></Card><Card><CardContent className="p-4"><p className="text-2xl font-bold">8</p><p className="text-sm text-muted-foreground">Resolved</p></CardContent></Card></div></section>
  <section><div className="mb-4 flex items-center justify-between"><h2 className="text-xl font-semibold">Recent requests</h2><Button asChild variant="ghost" size="sm"><Link to="/tenant/requests">View all</Link></Button></div><div className="grid gap-3"><MaintenanceRequestCard id="1042" category="Plumbing" description="Kitchen faucet is dripping continuously." status="In Progress" building="Oakridge" unit="402" updatedAt="2 hours ago" detailRoute="/tenant/requests/1042" /><MaintenanceRequestCard id="1038" category="Electrical" description="Bedroom outlet needs attention." status="Submitted" building="Oakridge" unit="402" updatedAt="Yesterday" detailRoute="/tenant/requests/1038" /></div></section>
      </div>
    </div>
  );
}