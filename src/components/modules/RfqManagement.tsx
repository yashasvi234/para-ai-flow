import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Clock, CheckCircle, AlertCircle, Send } from "lucide-react";

const rfqData = [
  {
    vendor: "Vega Life Biotech",
    sentDate: "30 Jul 2025",
    status: "Responded",
    responseTime: "6 hours",
    quotedPrice: "₹2,850/kg",
    leadTime: "10 days",
    validity: "15 days"
  },
  {
    vendor: "Nova Pharma Ltd",
    sentDate: "30 Jul 2025", 
    status: "Responded",
    responseTime: "4 hours",
    quotedPrice: "₹2,680/kg",
    leadTime: "12 days",
    validity: "20 days"
  },
  {
    vendor: "Global API Solutions",
    sentDate: "30 Jul 2025",
    status: "Pending",
    responseTime: "18+ hours",
    quotedPrice: "-",
    leadTime: "-",
    validity: "-"
  }
];

export function RfqManagement() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <FileText className="h-5 w-5" />
          <span>Request for Quotation (RFQ)</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
          <div>
            <h4 className="font-medium">RFQ #PAR-2025-08-001</h4>
            <p className="text-sm text-muted-foreground">Paracetamol API, 250kg, USP Grade</p>
            <p className="text-xs text-muted-foreground mt-1">Sent to 3 shortlisted vendors on 30 Jul 2025</p>
          </div>
          <div className="text-right">
            <Badge variant="secondary" className="bg-info/10 text-info">
              <Send className="h-3 w-3 mr-1" />
              Auto-sent
            </Badge>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">Response Status</h4>
            <div className="flex space-x-2">
              <Badge variant="secondary" className="bg-success/10 text-success">
                2 Responded
              </Badge>
              <Badge variant="secondary" className="bg-warning/10 text-warning">
                1 Pending
              </Badge>
            </div>
          </div>

          {rfqData.map((rfq, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-medium">{rfq.vendor}</h5>
                  <p className="text-sm text-muted-foreground">Sent: {rfq.sentDate}</p>
                </div>
                <div className="flex items-center space-x-2">
                  {rfq.status === "Responded" ? (
                    <CheckCircle className="h-4 w-4 text-success" />
                  ) : (
                    <Clock className="h-4 w-4 text-warning" />
                  )}
                  <Badge 
                    variant={rfq.status === "Responded" ? "secondary" : "destructive"}
                    className={rfq.status === "Responded" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}
                  >
                    {rfq.status}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Response Time</span>
                  <div className="font-medium">{rfq.responseTime}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Quoted Price</span>
                  <div className="font-medium text-primary">{rfq.quotedPrice}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Lead Time</span>
                  <div className="font-medium">{rfq.leadTime}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Validity</span>
                  <div className="font-medium">{rfq.validity}</div>
                </div>
              </div>

              {rfq.status === "Responded" && (
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    View Quote
                  </Button>
                  <Button size="sm">
                    Accept Quote
                  </Button>
                </div>
              )}

              {rfq.status === "Pending" && (
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-4 w-4 text-warning" />
                  <span className="text-sm text-foreground">Follow-up reminder sent</span>
                  <Button variant="outline" size="sm">
                    Send Reminder
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}