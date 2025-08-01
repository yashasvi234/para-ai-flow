import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { FileCheck, Calendar, AlertCircle, CheckCircle } from "lucide-react";

export function VendorQcAudit() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <FileCheck className="h-5 w-5" />
          <span>Vendor QC Audit Summary</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-success/10 to-success/5 rounded-lg border border-success/20">
          <div>
            <div className="text-2xl font-bold text-success">96%</div>
            <div className="text-sm text-muted-foreground">Overall Compliance</div>
          </div>
          <CheckCircle className="h-8 w-8 text-success" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Last Audit: 15 Jul 2025</span>
            <Badge variant="secondary" className="bg-info/10 text-info">
              Annual Audit
            </Badge>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-medium mb-2 flex items-center space-x-2">
              <AlertCircle className="h-4 w-4 text-warning" />
              <span>AI NLP Summary</span>
            </h4>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                <strong>Finding:</strong> Minor deviation found in cleaning SOP for API production vessel. 
                Equipment cleaning validation showed 99.8% efficiency vs required 99.9%.
              </p>
              <p className="text-muted-foreground">
                <strong>CAPA Status:</strong> Corrective action implemented and verified. 
                Enhanced cleaning procedure documented and operator retrained.
              </p>
              <div className="flex items-center space-x-2 mt-3">
                <Badge variant="secondary" className="bg-success/10 text-success">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  CAPA Closed
                </Badge>
                <span className="text-xs text-muted-foreground">Verified on 28 Jul 2025</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Documentation</span>
                <span className="font-medium">98%</span>
              </div>
              <Progress value={98} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Process Control</span>
                <span className="font-medium">95%</span>
              </div>
              <Progress value={95} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Quality Systems</span>
                <span className="font-medium">97%</span>
              </div>
              <Progress value={97} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Facility & Equipment</span>
                <span className="font-medium">94%</span>
              </div>
              <Progress value={94} className="h-2" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}