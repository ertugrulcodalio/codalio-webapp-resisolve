import { Badge } from "./ui/badge";


        

const styles: Record<string, string> = { Submitted: "bg-blue-600 text-white", Assigned: "bg-violet-700 text-white", "In Progress": "bg-amber-600 text-white", Resolved: "bg-emerald-600 text-white", Cancelled: "bg-slate-600 text-white" };
        export default function RequestStatusBadge({ status }: { status: string }) {
        return (
            <Badge aria-label={`Request status: ${status}`} className={`shrink-0 font-medium ${styles[status] ?? "bg-slate-600 text-white"}`}>{status}</Badge>
        );
        }