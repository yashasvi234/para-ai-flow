import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Clock, Award } from "lucide-react";

export function FindVendor() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Search className="h-5 w-5" />
          <span>Find Vendor</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Region</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="india">India</SelectItem>
                <SelectItem value="china">China</SelectItem>
                <SelectItem value="europe">Europe</SelectItem>
                <SelectItem value="usa">USA</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Certification</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select certification" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gmp">GMP</SelectItem>
                <SelectItem value="who-gmp">WHO-GMP</SelectItem>
                <SelectItem value="fda">FDA</SelectItem>
                <SelectItem value="all">All Certifications</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Max Lead Time</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select lead time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">7 days</SelectItem>
                <SelectItem value="14">14 days</SelectItem>
                <SelectItem value="30">30 days</SelectItem>
                <SelectItem value="60">60+ days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex space-x-2">
          <Input placeholder="Search vendors..." className="flex-1" />
          <Button>
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg">
          <h4 className="font-medium mb-3">Top Result</h4>
          <div className="flex items-center justify-between">
            <div>
              <h5 className="font-medium">Vega Life Biotech</h5>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-3 w-3" />
                  <span>Mumbai, India</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>10 days lead time</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <Badge variant="secondary" className="bg-success/10 text-success">
                <Award className="h-3 w-3 mr-1" />
                GMP Certified
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}