import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Cloud, Truck, Building, Globe, Bell } from "lucide-react";

const risks = [
  {
    type: "Weather",
    severity: "High",
    title: "Typhoon affecting China ports",
    description: "Freight delays from China port due to typhoon – consider alternate vendor.",
    impact: "18-day delay for Global API Solutions",
    recommendation: "Switch to Nova Pharma (India-based) for this order",
    icon: Cloud,
    timeframe: "Next 7 days"
  },
  {
    type: "Logistics",
    severity: "Medium", 
    title: "Highway construction delays",
    description: "Mumbai-Bangalore highway construction causing 2-3 day shipping delays",
    impact: "Additional 2-3 days for Vega Life Biotech deliveries",
    recommendation: "Inform stakeholders about extended delivery timeline",
    icon: Truck,
    timeframe: "Next 30 days"
  },
  {
    type: "Regulatory",
    severity: "Low",
    title: "New GST compliance requirements",
    description: "Updated documentation requirements for pharmaceutical imports",
    impact: "Additional paperwork, no delivery impact expected",
    recommendation: "Ensure vendor compliance documentation is updated",
    icon: Building,
    timeframe: "Starting 15 Aug"
  },
  {
    type: "Market",
    severity: "Medium",
    title: "API shortage in European market",
    description: "European demand surge affecting global Paracetamol API availability",
    impact: "Potential price increase of 3-5% if demand shifts to Asia",
    recommendation: "Secure orders with current vendors before price adjustment",
    icon: Globe,
    timeframe: "Next 60 days"
  }
];

export function ProcurementRiskMonitor() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <AlertTriangle className="h-5 w-5" />
          <span>Procurement Risk Monitor</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-destructive/10 rounded-lg">
            <div className="text-2xl font-bold text-destructive">1</div>
            <div className="text-sm text-muted-foreground">High Risk</div>
          </div>
          <div className="text-center p-3 bg-warning/10 rounded-lg">
            <div className="text-2xl font-bold text-warning">2</div>
            <div className="text-sm text-muted-foreground">Medium Risk</div>
          </div>
          <div className="text-center p-3 bg-success/10 rounded-lg">
            <div className="text-2xl font-bold text-success">1</div>
            <div className="text-sm text-muted-foreground">Low Risk</div>
          </div>
        </div>

        <div className="space-y-4">
          {risks.map((risk, index) => (
            <div 
              key={index} 
              className={`border rounded-lg p-4 space-y-3 ${
                risk.severity === 'High' ? 'border-destructive/20 bg-destructive/5' :
                risk.severity === 'Medium' ? 'border-warning/20 bg-warning/5' :
                'border-success/20 bg-success/5'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded ${
                    risk.severity === 'High' ? 'bg-destructive/10' :
                    risk.severity === 'Medium' ? 'bg-warning/10' :
                    'bg-success/10'
                  }`}>
                    <risk.icon className={`h-4 w-4 ${
                      risk.severity === 'High' ? 'text-destructive' :
                      risk.severity === 'Medium' ? 'text-warning' :
                      'text-success'
                    }`} />
                  </div>
                  <div>
                    <h4 className="font-medium">{risk.title}</h4>
                    <p className="text-sm text-muted-foreground">{risk.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge 
                    variant={
                      risk.severity === 'High' ? 'destructive' :
                      risk.severity === 'Medium' ? 'secondary' :
                      'secondary'
                    }
                    className={
                      risk.severity === 'High' ? 'bg-destructive/10 text-destructive' :
                      risk.severity === 'Medium' ? 'bg-warning/10 text-warning' :
                      'bg-success/10 text-success'
                    }
                  >
                    {risk.severity} Risk
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {risk.type}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-muted-foreground">Impact:</span>
                  <p>{risk.impact}</p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">Timeframe:</span>
                  <p>{risk.timeframe}</p>
                </div>
              </div>

              <div className="bg-card/50 p-3 rounded border">
                <span className="font-medium text-sm">AI Recommendation:</span>
                <p className="text-sm text-muted-foreground mt-1">{risk.recommendation}</p>
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <Button variant="outline" size="sm">
                  <Bell className="h-3 w-3 mr-1" />
                  Set Alert
                </Button>
                {risk.severity === 'High' && (
                  <Button size="sm" className="bg-destructive hover:bg-destructive/90">
                    Take Action
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-info/10 border border-info/20 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <AlertTriangle className="h-5 w-5 text-info" />
            <h4 className="font-medium text-foreground">Overall Risk Assessment</h4>
          </div>
          <p className="text-sm text-foreground">
            Current risk level is <strong>MODERATE</strong> due to weather disruptions in China. 
            Recommend diversifying supplier base to include more India-based vendors to reduce geographical risk exposure.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}