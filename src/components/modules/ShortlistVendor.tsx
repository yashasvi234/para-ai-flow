import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Users, Star, MapPin, TrendingUp, AlertTriangle } from "lucide-react";

const vendors = [
  {
    name: "Vega Life Biotech",
    location: "Mumbai, India",
    compliance: 90,
    price: 70,
    deliveryRisk: "Low",
    rating: 4.8,
    certifications: ["GMP", "ISO 9001"]
  },
  {
    name: "Nova Pharma Ltd",
    location: "Bangalore, India", 
    compliance: 85,
    price: 85,
    deliveryRisk: "Low",
    rating: 4.6,
    certifications: ["WHO-GMP", "ISO 14001"]
  },
  {
    name: "Global API Solutions",
    location: "Guangzhou, China",
    compliance: 88,
    price: 95,
    deliveryRisk: "Medium",
    rating: 4.4,
    certifications: ["FDA", "GMP"]
  }
];

export function ShortlistVendor() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Users className="h-5 w-5" />
          <span>Shortlist Vendor</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {vendors.map((vendor, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium">{vendor.name}</h4>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{vendor.location}</span>
                  </div>
                  <div className="flex items-center space-x-1 mt-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{vendor.rating}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-sm">
                    <span>Compliance</span>
                    <span className="font-medium">{vendor.compliance}%</span>
                  </div>
                  <Progress value={vendor.compliance} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm">
                    <span>Price Score</span>
                    <span className="font-medium">{vendor.price}%</span>
                  </div>
                  <Progress value={vendor.price} className="h-2" />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Delivery Risk</span>
                  <Badge 
                    variant={vendor.deliveryRisk === "Low" ? "secondary" : "destructive"}
                    className={vendor.deliveryRisk === "Low" ? "bg-success/10 text-success" : ""}
                  >
                    {vendor.deliveryRisk === "Low" ? (
                      <TrendingUp className="h-3 w-3 mr-1" />
                    ) : (
                      <AlertTriangle className="h-3 w-3 mr-1" />
                    )}
                    {vendor.deliveryRisk}
                  </Badge>
                </div>
              </div>

              <div className="flex flex-wrap gap-1">
                {vendor.certifications.map((cert, i) => (
                  <Badge key={i} variant="outline" className="text-xs">
                    {cert}
                  </Badge>
                ))}
              </div>

              <Button className="w-full" size="sm">
                Select Vendor
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}