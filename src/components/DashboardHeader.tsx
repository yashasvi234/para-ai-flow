import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="h-16 flex items-center justify-between px-6 bg-card border-b">
      <div className="flex items-center space-x-4">
        <div>
          <h1 className="text-xl font-semibold text-foreground">
            Paracetamol 500mg Dashboard
          </h1>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>Last Updated: 01 Aug 2025, 14:30 IST</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <Badge variant="secondary" className="bg-info/10 text-info border-info/20">
          Live Data
        </Badge>
        <div className="flex items-center space-x-2 text-sm">
          <User className="h-4 w-4" />
          <span className="font-medium">Yashasvi (Procurement Officer)</span>
        </div>
      </div>
    </header>
  );
}