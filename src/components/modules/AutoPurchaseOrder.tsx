import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FileText, Printer, Send, CheckCircle } from "lucide-react";

export function AutoPurchaseOrder() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <FileText className="h-5 w-5" />
          <span>Auto Purchase Order Generator</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-success/10 rounded-lg border border-success/20">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-success" />
            <span className="font-medium text-foreground">
              PO Ready for Generation
            </span>
          </div>
          <Button className="bg-success hover:bg-success/90">
            <FileText className="h-4 w-4 mr-2" />
            Generate PO
          </Button>
        </div>

        <div className="border rounded-lg p-4 space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="font-medium">Purchase Order Preview</h4>
            <Badge variant="outline">PO #PAR-2025-08-001</Badge>
          </div>

          <Separator />

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <h5 className="font-medium text-sm">Vendor Details</h5>
              <div className="space-y-1 text-sm">
                <div><strong>Name:</strong> Nova Pharma Ltd</div>
                <div><strong>Address:</strong> Plot 45, KIADB Industrial Area, Bangalore - 560058</div>
                <div><strong>Contact:</strong> procurement@novapharma.in</div>
                <div><strong>GST:</strong> 29ABCDE1234F1Z5</div>
              </div>
            </div>

            <div className="space-y-3">
              <h5 className="font-medium text-sm">Delivery Details</h5>
              <div className="space-y-1 text-sm">
                <div><strong>Ship To:</strong> Your Company Warehouse</div>
                <div><strong>Address:</strong> Industrial Zone, Mumbai - 400001</div>
                <div><strong>Delivery Terms:</strong> CIF (Cost, Insurance & Freight)</div>
                <div><strong>Payment Terms:</strong> 30 days from delivery</div>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <h5 className="font-medium text-sm">Order Items</h5>
            <div className="border rounded">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-2">Item Description</th>
                    <th className="text-left p-2">Quantity</th>
                    <th className="text-left p-2">Unit Price</th>
                    <th className="text-left p-2">Total Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-2">
                      <div>
                        <div className="font-medium">Paracetamol API USP</div>
                        <div className="text-muted-foreground text-xs">
                          Purity: ≥99.6%, Batch Size: 250kg
                        </div>
                      </div>
                    </td>
                    <td className="p-2">250 kg</td>
                    <td className="p-2">₹2,680</td>
                    <td className="p-2 font-medium">₹6,70,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <Separator />

          <div className="flex justify-between items-center">
            <div className="space-y-1 text-sm">
              <div><strong>Expected Delivery:</strong> 15 Aug 2025</div>
              <div><strong>Lead Time:</strong> 12 working days</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Subtotal: ₹6,70,000</div>
              <div className="text-sm text-muted-foreground">GST (18%): ₹1,20,600</div>
              <div className="text-lg font-bold">Total: ₹7,90,600</div>
            </div>
          </div>
        </div>

        <div className="flex space-x-3">
          <Button variant="outline" className="flex-1">
            <Printer className="h-4 w-4 mr-2" />
            Preview & Print
          </Button>
          <Button variant="outline" className="flex-1">
            Save as Draft
          </Button>
          <Button className="flex-1">
            <Send className="h-4 w-4 mr-2" />
            Send to Vendor
          </Button>
        </div>

        <div className="text-xs text-muted-foreground bg-muted/50 p-3 rounded">
          <strong>Note:</strong> This PO has been auto-generated based on the selected quotation from Nova Pharma Ltd. 
          All terms and conditions as per the standard procurement agreement will apply.
        </div>
      </CardContent>
    </Card>
  );
}