import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Check, X } from "lucide-react";

const vendorData = [
  {
    vendor: "Vega Life Biotech",
    apiPurity: 99.8,
    batchSize: "500 kg",
    costPerKg: "₹2,850",
    region: "India",
    regulatory: ["GMP", "ISO 9001"],
    leadTime: "10 days"
  },
  {
    vendor: "Nova Pharma Ltd", 
    apiPurity: 99.6,
    batchSize: "750 kg",
    costPerKg: "₹2,680",
    region: "India",
    regulatory: ["WHO-GMP", "ISO 14001"],
    leadTime: "12 days"
  },
  {
    vendor: "Global API Solutions",
    apiPurity: 99.9,
    batchSize: "1000 kg",
    costPerKg: "₹2,450",
    region: "China",
    regulatory: ["FDA", "GMP"],
    leadTime: "18 days"
  }
];

export function VendorComparison() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <BarChart className="h-5 w-5" />
          <span>Vendor Comparison Dashboard</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2 font-medium">Vendor</th>
                <th className="text-left p-2 font-medium">API Purity (%)</th>
                <th className="text-left p-2 font-medium">Batch Size</th>
                <th className="text-left p-2 font-medium">Cost per kg</th>
                <th className="text-left p-2 font-medium">Region</th>
                <th className="text-left p-2 font-medium">Lead Time</th>
                <th className="text-left p-2 font-medium">Regulatory</th>
              </tr>
            </thead>
            <tbody>
              {vendorData.map((vendor, index) => (
                <tr key={index} className="border-b hover:bg-muted/50">
                  <td className="p-2">
                    <div className="font-medium">{vendor.vendor}</div>
                  </td>
                  <td className="p-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{vendor.apiPurity}</span>
                      {vendor.apiPurity >= 99.8 && (
                        <Badge variant="secondary" className="bg-success/10 text-success">
                          <Check className="h-3 w-3 mr-1" />
                          Excellent
                        </Badge>
                      )}
                    </div>
                  </td>
                  <td className="p-2">{vendor.batchSize}</td>
                  <td className="p-2">
                    <span className="font-medium text-primary">{vendor.costPerKg}</span>
                  </td>
                  <td className="p-2">{vendor.region}</td>
                  <td className="p-2">
                    <span className={vendor.leadTime.includes("10") ? "text-success font-medium" : ""}>
                      {vendor.leadTime}
                    </span>
                  </td>
                  <td className="p-2">
                    <div className="flex flex-wrap gap-1">
                      {vendor.regulatory.map((cert, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 p-3 bg-info/10 rounded-lg border border-info/20">
          <p className="text-sm text-info-foreground">
            <strong>AI Recommendation:</strong> Vega Life Biotech offers the best balance of purity, lead time, and compliance for immediate procurement needs.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}