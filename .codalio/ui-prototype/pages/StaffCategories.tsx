import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

import { Plus } from "lucide-react";
export default function StaffCategories() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground min-w-0 overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-6">
          <section className="space-y-5"><div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><h1 className="text-3xl font-bold">Service categories</h1><p className="text-muted-foreground">Control the maintenance categories residents can select.</p></div><Button><Plus className="size-4" />New category</Button></div><div className="grid gap-3">{["Plumbing", "Electrical", "Appliances"].map((category) => <Card key={category}><CardContent className="flex items-center justify-between p-4"><div><p className="font-semibold">{category}</p><p className="text-sm text-muted-foreground">Available to residents</p></div><Badge className="bg-emerald-600 text-white">Active</Badge></CardContent></Card>)}</div></section>
      </div>
    </div>
  );
}