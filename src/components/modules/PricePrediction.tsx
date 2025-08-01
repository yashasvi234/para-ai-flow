import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { TrendingUp, AlertTriangle, BarChart3 } from "lucide-react";

const priceData = [
  { date: "01 Aug", historical: 2680, predicted: 2680, upperBound: 2720, lowerBound: 2640 },
  { date: "05 Aug", historical: null, predicted: 2695, upperBound: 2740, lowerBound: 2650 },
  { date: "10 Aug", historical: null, predicted: 2710, upperBound: 2760, lowerBound: 2660 },
  { date: "15 Aug", historical: null, predicted: 2725, upperBound: 2780, lowerBound: 2670 },
  { date: "20 Aug", historical: null, predicted: 2740, upperBound: 2800, lowerBound: 2680 },
  { date: "25 Aug", historical: null, predicted: 2755, upperBound: 2820, lowerBound: 2690 },
  { date: "30 Aug", historical: null, predicted: 2780, upperBound: 2850, lowerBound: 2710 }
];

const factors = [
  { factor: "Raw Material Cost", impact: "+2.8%", description: "Acetaminophen precursor prices rising" },
  { factor: "Transportation", impact: "+0.8%", description: "Fuel price increase affecting logistics" },
  { factor: "Demand Surge", impact: "+1.2%", description: "Seasonal demand uptick in Q3" },
  { factor: "Currency Fluctuation", impact: "-0.8%", description: "INR strengthening vs USD" }
];

export function PricePrediction() {
  const predictedIncrease = 4.0;
  const currentPrice = 2680;
  const predictedPrice = Math.round(currentPrice * (1 + predictedIncrease / 100));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <BarChart3 className="h-5 w-5" />
          <span>Price Prediction</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-primary/10 rounded-lg">
            <div className="text-2xl font-bold text-primary">₹{currentPrice.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Current Price/kg</div>
          </div>
          <div className="text-center p-3 bg-warning/10 rounded-lg">
            <div className="text-2xl font-bold text-warning">₹{predictedPrice.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Predicted Price/kg</div>
          </div>
          <div className="text-center p-3 bg-destructive/10 rounded-lg">
            <div className="text-2xl font-bold text-destructive">+{predictedIncrease}%</div>
            <div className="text-sm text-muted-foreground">Expected Increase</div>
          </div>
        </div>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={priceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[2600, 2900]} />
              <Tooltip 
                formatter={(value, name) => [
                  `₹${value}`, 
                  name === 'historical' ? 'Historical Price' : 
                  name === 'predicted' ? 'Predicted Price' :
                  name === 'upperBound' ? 'Upper Bound' : 'Lower Bound'
                ]}
              />
              <ReferenceLine y={currentPrice} stroke="#3b82f6" strokeDasharray="5 5" label="Current Price" />
              
              <Line 
                type="monotone" 
                dataKey="historical" 
                stroke="#10b981" 
                strokeWidth={3}
                connectNulls={false}
                name="historical"
              />
              <Line 
                type="monotone" 
                dataKey="predicted" 
                stroke="#f59e0b" 
                strokeWidth={2}
                strokeDasharray="5 5"
                name="predicted"
              />
              <Line 
                type="monotone" 
                dataKey="upperBound" 
                stroke="#ef4444" 
                strokeWidth={1}
                strokeDasharray="2 2"
                name="upperBound"
              />
              <Line 
                type="monotone" 
                dataKey="lowerBound" 
                stroke="#ef4444" 
                strokeWidth={1}
                strokeDasharray="2 2"
                name="lowerBound"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-3">
          <h4 className="font-medium">Price Impact Factors</h4>
          {factors.map((factor, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <div className="font-medium text-sm">{factor.factor}</div>
                <div className="text-xs text-muted-foreground">{factor.description}</div>
              </div>
              <Badge 
                variant={factor.impact.startsWith('+') ? "destructive" : "secondary"}
                className={factor.impact.startsWith('+') ? "bg-destructive/10 text-destructive" : "bg-success/10 text-success"}
              >
                {factor.impact.startsWith('+') ? (
                  <TrendingUp className="h-3 w-3 mr-1" />
                ) : (
                  <TrendingUp className="h-3 w-3 mr-1 rotate-180" />
                )}
                {factor.impact}
              </Badge>
            </div>
          ))}
        </div>

        <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <h4 className="font-medium text-foreground">AI Insight</h4>
          </div>
          <p className="text-sm text-foreground">
            <strong>Likely 4% increase due to acetaminophen raw material cost rise.</strong> 
            Recommend locking in current prices with preferred vendors or consider forward contracts 
            to hedge against price volatility in the next 30 days.
          </p>
          <div className="flex space-x-2 mt-3">
            <Badge variant="secondary" className="bg-warning/20 text-warning">
              Price Alert
            </Badge>
            <Badge variant="outline">
              Confidence: 78%
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}