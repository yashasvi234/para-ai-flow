import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter } from "recharts";
import { TrendingUp, Clock, DollarSign, Award } from "lucide-react";

const quotationData = [
  { vendor: "Vega Life", costPerKg: 2850, leadTime: 10, score: 85 },
  { vendor: "Nova Pharma", costPerKg: 2680, leadTime: 12, score: 90 },
  { vendor: "Global API", costPerKg: 2450, leadTime: 18, score: 75 }
];

const comparisonData = [
  { metric: "Price", vega: 70, nova: 85, global: 95 },
  { metric: "Speed", vega: 90, nova: 80, global: 60 },
  { metric: "Quality", vega: 95, nova: 90, global: 85 },
  { metric: "Reliability", vega: 85, nova: 90, global: 70 }
];

export function QuotationAnalysis() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <TrendingUp className="h-5 w-5" />
          <span>Quotation Analysis</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-3">Cost vs Lead Time Analysis</h4>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="leadTime" 
                    domain={[8, 20]}
                    label={{ value: 'Lead Time (days)', position: 'insideBottom', offset: -5 }}
                  />
                  <YAxis 
                    dataKey="costPerKg"
                    domain={[2400, 2900]}
                    label={{ value: 'Cost per kg (₹)', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip 
                    formatter={(value, name, props) => [
                      name === 'costPerKg' ? `₹${value}` : `${value} days`,
                      name === 'costPerKg' ? 'Cost per kg' : 'Lead Time'
                    ]}
                    labelFormatter={(value, payload) => payload?.[0]?.payload?.vendor || ''}
                  />
                  <Scatter data={quotationData} fill="#3b82f6" />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Vendor Score Comparison</h4>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={comparisonData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="metric" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Bar dataKey="vega" fill="#3b82f6" name="Vega Life" />
                  <Bar dataKey="nova" fill="#10b981" name="Nova Pharma" />
                  <Bar dataKey="global" fill="#f59e0b" name="Global API" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-medium">Detailed Quotation Comparison</h4>
          {quotationData.map((quote, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h5 className="font-medium">{quote.vendor}</h5>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-3 w-3" />
                      <span>₹{quote.costPerKg.toLocaleString()}/kg</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{quote.leadTime} days</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-primary">{quote.score}</div>
                  <div className="text-xs text-muted-foreground">Overall Score</div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-lg font-medium">₹7,12,500</div>
                  <div className="text-muted-foreground">Total Cost (250kg)</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-medium">{quote.leadTime} days</div>
                  <div className="text-muted-foreground">Delivery Time</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-medium">15 days</div>
                  <div className="text-muted-foreground">Quote Validity</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-medium">CIF</div>
                  <div className="text-muted-foreground">Delivery Terms</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-info/10 border border-info/20 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Award className="h-5 w-5 text-info" />
            <h4 className="font-medium text-info-foreground">AI Recommendation</h4>
          </div>
          <p className="text-sm text-info-foreground">
            <strong>Choose 'Nova Pharma' – Balanced on price and speed.</strong> Offers competitive pricing (₹2,680/kg) 
            with reasonable lead time (12 days) and highest reliability score (90). Best value proposition for current requirements.
          </p>
          <div className="flex space-x-2 mt-3">
            <Badge variant="secondary" className="bg-success/10 text-success">
              <Award className="h-3 w-3 mr-1" />
              Recommended
            </Badge>
            <Badge variant="outline">
              Savings: ₹42,500 vs Vega Life
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}