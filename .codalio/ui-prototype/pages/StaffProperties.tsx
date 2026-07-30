import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

import { Plus } from "lucide-react";
export default function StaffProperties() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground min-w-0 overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-6">
          <section className="space-y-5"><div className="flex items-center justify-between"><h1 className="text-3xl font-bold">Properties & units</h1><Button><Plus className="size-4" />Add property</Button></div><Card><CardHeader><CardTitle>Oakridge Apartments</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">124 Oak Street · 36 units</p><div className="mt-4 flex gap-2"><span className="rounded-md bg-muted px-3 py-1 text-sm">Unit 115</span><span className="rounded-md bg-muted px-3 py-1 text-sm">Unit 402</span></div></CardContent></Card></section>
      </div>
    </div>
  );
}