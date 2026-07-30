
import { Link } from "react-router-dom";
import { ChevronRight, Clock, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";

import RequestStatusBadge from "./RequestStatusBadge";
        export default function MaintenanceRequestCard({ id, category, description, status, building, unit, updatedAt, detailRoute }: { id: string; category: string; description: string; status: string; building: string; unit: string; updatedAt: string; detailRoute: string }) {
        return (
            <Card className="transition-colors hover:bg-accent/40 focus-within:ring-2 focus-within:ring-ring"><CardHeader className="flex-row items-start justify-between gap-3 p-4 pb-2"><div><p className="text-sm font-semibold text-foreground">Request #{id}</p><p className="mt-1 text-sm text-muted-foreground">{category}</p></div><RequestStatusBadge status={status} /></CardHeader><CardContent className="space-y-3 p-4 pt-2"><p className="text-sm text-foreground">{description}</p><div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground"><span className="inline-flex items-center gap-1"><MapPin className="size-3.5" />{building} · {unit}</span><span className="inline-flex items-center gap-1"><Clock className="size-3.5" />Updated {updatedAt}</span></div><Button asChild variant="ghost" size="sm" className="px-0 text-primary hover:text-primary"><Link to={detailRoute}>View request <ChevronRight className="size-4" /></Link></Button></CardContent></Card>
        );
        }