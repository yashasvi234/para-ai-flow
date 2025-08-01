import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { TrendingDown, Package, AlertTriangle } from "lucide-react";

const forecastData = [
  { day: "Day 1", currentStock: 450, projectedDemand: 445, recommendedReorder: 400 },
  { day: "Day 15", currentStock: 380, projectedDemand: 375, recommendedReorder: 400 },
  { day: "Day 30", currentStock: 290, projectedDemand: 285, recommendedReorder: 400 },
  { day: "Day 45", currentStock: 180, projectedDemand: 175, recommendedReorder: 400 },
  { day: "Day 60", currentStock: 95, projectedDemand: 90, recommendedReorder: 400 },
  { day: "Day 75", currentStock: 45, projectedDemand: 40, recommendedReorder: 400 },
  { day: "Day 90", currentStock: 15, projectedDemand: 10, recommendedReorder: 400 },
];

export function InventoryForecast() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Package className="h-5 w-5" />
          <span>Inventory Forecast for Paracetamol</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-primary/10 rounded-lg">
            <div className="text-2xl font-bold text-primary">450 kg</div>
            <div className="text-sm text-muted-foreground">Current Stock</div>
          </div>
          <div className="text-center p-3 bg-warning/10 rounded-lg">
            <div className="text-2xl font-bold text-warning">67 days</div>
            <div className="text-sm text-muted-foreground">Days Until Stockout</div>
          </div>
          <div className="text-center p-3 bg-info/10 rounded-lg">
            <div className="text-2xl font-bold text-info">5.2 kg/day</div>
            <div className="text-sm text-muted-foreground">Avg Consumption</div>
          </div>
        </div>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={forecastData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip 
                formatter={(value, name) => [
                  `${value} kg`, 
                  name === 'currentStock' ? 'Current Stock' : 
                  name === 'projectedDemand' ? 'Projected Demand' : 'Reorder Level'
                ]}
              />
              <ReferenceLine y={100} stroke="#ef4444" strokeDasharray="5 5" label="Critical Level" />
              <Line 
                type="monotone" 
                dataKey="currentStock" 
                stroke="#3b82f6" 
                strokeWidth={3}
                name="currentStock"
              />
              <Line 
                type="monotone" 
                dataKey="projectedDemand" 
                stroke="#8b5cf6" 
                strokeWidth={2}
                strokeDasharray="5 5"
                name="projectedDemand"
              />
              <Line 
                type="monotone" 
                dataKey="recommendedReorder" 
                stroke="#10b981" 
                strokeWidth={1}
                strokeDasharray="10 5"
                name="recommendedReorder"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <h4 className="font-medium text-warning-foreground">AI Recommendation</h4>
          </div>
          <p className="text-sm text-warning-foreground">
            <strong>Reorder 250kg within 7 days</strong> to maintain safety stock levels. 
            Current consumption trend suggests stockout by Day 67 without replenishment.
          </p>
          <div className="flex space-x-2 mt-3">
            <Badge variant="secondary" className="bg-warning/20 text-warning">
              <TrendingDown className="h-3 w-3 mr-1" />
              High Priority
            </Badge>
            <Badge variant="outline">
              Lead Time: 10-12 days
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}