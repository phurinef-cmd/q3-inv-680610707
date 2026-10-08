import { useItemStore } from "../store/dataStore";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function OverviewCards() {
  const inventory = useItemStore((state) => state.inventory);
  const totalStockValue = inventory.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  const totalProducts = inventory.length;
  const totalUnits = inventory.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-xs font-semibold text-slate-500">
            Total Stock Value
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-red-500">
            ฿{totalStockValue.toFixed(2)}
          </div>
        </CardContent>
      </Card>
      <Card className="shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-xs font-semibold text-slate-500">
            Total Products
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-600">
            {totalProducts}
          </div>
        </CardContent>
      </Card>
      <Card className="shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-xs font-semibold text-slate-500">
            Total Units in Stock
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-emerald-600">
            {totalUnits}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
