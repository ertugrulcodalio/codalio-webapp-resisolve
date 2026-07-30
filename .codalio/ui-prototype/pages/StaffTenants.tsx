import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";

import { UserPlus } from "lucide-react";
export default function StaffTenants() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground min-w-0 overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-6">
          <section className="space-y-5"><div className="flex items-center justify-between"><h1 className="text-3xl font-bold">Tenants</h1><Button><UserPlus className="size-4" />Add tenant</Button></div><Input placeholder="Search name, email, or unit" /><Card><CardContent className="p-4"><div className="flex justify-between"><div><p className="font-semibold">Alex Rivera</p><p className="text-sm text-muted-foreground">alex@example.com · Oakridge 402</p></div><span className="text-sm text-emerald-600">Active</span></div></CardContent></Card></section>
      </div>
    </div>
  );
}