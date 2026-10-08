import { useItemStore } from "../store/dataStore";
import { categoryOptions } from "../types/datatypes";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { 
  Laptop, 
  ShoppingCart, 
  Shirt, 
  Wrench, 
  MoreHorizontal, 
  Pencil
} from "lucide-react";

export function CategoryCards() {
  const inventory = useItemStore((state) => state.inventory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Electronics":
        return <Laptop className="w-4 h-4 text-slate-500" />;
      case "Stationery":
        return <Pencil className="w-4 h-4 text-slate-500" />;
      case "Grocery":
        return <ShoppingCart className="w-4 h-4 text-slate-500" />;
      case "Clothing":
        return <Shirt className="w-4 h-4 text-slate-500" />;
      case "Tools":
        return <Wrench className="w-4 h-4 text-slate-500" />;
      default:
        return <MoreHorizontal className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
      {categoryOptions.map((cat) => {
        const catValue = cat.value as string;
        const items = inventory.filter((item) => item.category === catValue);
        const totalValue = items.reduce(
          (sum, item) => sum + item.quantity * item.price,
          0
        );
        const totalUnits = items.reduce((sum, item) => sum + item.quantity, 0);
        return (
          <Card key={cat.id} className="shadow-sm">
            <CardHeader className="pb-1 pt-3 px-2">
              <div className="flex flex-col items-center gap-1 text-center">
                {getCategoryIcon(catValue)}
                <CardTitle className="text-xs font-semibold text-slate-600">
                  {cat.label}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-2 pb-3 text-center">
              <div className="text-sm font-bold text-slate-800">
                ฿{totalValue.toFixed(2)}
              </div>
              <div className="text-[11px] text-slate-400">
                {totalUnits} units
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
