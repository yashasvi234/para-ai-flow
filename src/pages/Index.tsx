import { DashboardLayout } from "@/components/DashboardLayout";
import { FindVendor } from "@/components/modules/FindVendor";
import { ShortlistVendor } from "@/components/modules/ShortlistVendor";
import { VendorComparison } from "@/components/modules/VendorComparison";
import { VendorRiskInsights } from "@/components/modules/VendorRiskInsights";
import { VendorQcAudit } from "@/components/modules/VendorQcAudit";
import { InventoryForecast } from "@/components/modules/InventoryForecast";
import { RfqManagement } from "@/components/modules/RfqManagement";
import { QuotationAnalysis } from "@/components/modules/QuotationAnalysis";
import { AutoPurchaseOrder } from "@/components/modules/AutoPurchaseOrder";
import { PricePrediction } from "@/components/modules/PricePrediction";
import { ProcurementRiskMonitor } from "@/components/modules/ProcurementRiskMonitor";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Section 1: Sourcing Modules */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="w-1 h-8 bg-primary rounded"></div>
            <h2 className="text-2xl font-bold">Sourcing Modules</h2>
          </div>
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <FindVendor />
            <ShortlistVendor />
          </div>
          
          <VendorComparison />
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <VendorRiskInsights />
            <VendorQcAudit />
          </div>
        </div>

        {/* Section 2: Procurement Modules */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="w-1 h-8 bg-accent rounded"></div>
            <h2 className="text-2xl font-bold">Procurement Modules</h2>
          </div>
          
          <InventoryForecast />
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <RfqManagement />
            <QuotationAnalysis />
          </div>
          
          <AutoPurchaseOrder />
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <PricePrediction />
            <ProcurementRiskMonitor />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
