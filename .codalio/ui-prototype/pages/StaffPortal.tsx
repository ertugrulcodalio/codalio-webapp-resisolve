import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

import { ArrowRight, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function StaffPortal() {
  return (
    <div className="min-h-screen w-full bg-muted/40 text-foreground min-w-0 overflow-x-hidden">
      <div className="mx-auto flex min-h-screen w-full max-w-xl items-center justify-center px-4 py-10 min-w-0">
          <Card className="overflow-hidden"><CardContent className="p-8 text-center"><div className="mx-auto grid size-12 place-items-center rounded-xl bg-slate-950 text-white"><Building2 className="size-6" /></div><h1 className="mt-5 text-3xl font-bold text-foreground">Property operations</h1><p className="mx-auto mt-3 max-w-md text-muted-foreground">Manage requests, tenants, properties, and service categories.</p><Button asChild size="lg" className="mt-7"><Link to="/staff/dashboard">Open staff dashboard <ArrowRight className="size-4" /></Link></Button></CardContent></Card>
      </div>
    </div>
  );
}