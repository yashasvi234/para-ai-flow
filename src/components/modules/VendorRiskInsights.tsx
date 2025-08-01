import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, TrendingDown, MapPin, Truck, FileWarning } from "lucide-react";

const riskFactors = [
  {
    factor: "Country Stability",
    score: 85,
    status: "Good",
    description: "India - Stable political environment"
  },
  {
    factor: "Freight Delays", 
    score: 65,
    status: "Medium",
    description: "Monsoon season may cause delays"
  },
  {
    factor: "Regulatory Warnings",
    score: 95,
    status: "Excellent", 
    description: "No recent FDA/WHO warnings"
  },
  {
    factor: "Financial Stability",
    score: 78,
    status: "Good",
    description: "Strong balance sheet, low debt ratio"
  }
];

export function VendorRiskInsights() {
  const overallRiskScore = Math.round(riskFactors.reduce((acc, factor) => acc + factor.score, 0) / riskFactors.length);
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <AlertTriangle className="h-5 w-5" />
          <span>Vendor Risk Insights</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
          <div className="text-3xl font-bold text-primary mb-2">{overallRiskScore}</div>
          <div className="text-sm text-muted-foreground">AI Risk Score (1-100)</div>
          <Badge 
            variant="secondary" 
            className={`mt-2 ${overallRiskScore >= 80 ? 'bg-success/10 text-success' : overallRiskScore >= 60 ? 'bg-warning/10 text-warning' : 'bg-destructive/10 text-destructive'}`}
          >
            {overallRiskScore >= 80 ? 'Low Risk' : overallRiskScore >= 60 ? 'Medium Risk' : 'High Risk'}
          </Badge>
        </div>

        <div className="space-y-4">
          <h4 className="font-medium">Risk Factors Analysis</h4>
          {riskFactors.map((factor, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {factor.factor === "Country Stability" && <MapPin className="h-4 w-4" />}
                  {factor.factor === "Freight Delays" && <Truck className="h-4 w-4" />}
                  {factor.factor === "Regulatory Warnings" && <FileWarning className="h-4 w-4" />}
                  {factor.factor === "Financial Stability" && <TrendingDown className="h-4 w-4" />}
                  <span className="text-sm font-medium">{factor.factor}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">{factor.score}/100</span>
                  <Badge 
                    variant="outline"
                    className={`text-xs ${
                      factor.status === "Excellent" ? 'border-success text-success' :
                      factor.status === "Good" ? 'border-info text-info' :
                      factor.status === "Medium" ? 'border-warning text-warning' : 
                      'border-destructive text-destructive'
                    }`}
                  >
                    {factor.status}
                  </Badge>
                </div>
              </div>
              <Progress value={factor.score} className="h-2" />
              <p className="text-xs text-muted-foreground">{factor.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-warning/10 rounded-lg border border-warning/20">
          <p className="text-sm text-warning-foreground">
            <strong>Alert:</strong> Monitor freight conditions during monsoon season (Jun-Sep). Consider backup suppliers from other regions.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}