import { useItemStore } from "../store/dataStore";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";

export function ItemList() {
  const inventory = useItemStore((state) => state.inventory);
  const deleteInventoryItem = useItemStore((state) => state.deleteInventoryItem);
  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm">
      <h3 className="text-sm font-semibold text-slate-700 mb-3">Product List</h3>
      <Table>
        <TableHeader>
          <TableRow className="text-xs text-slate-500">
            <TableHead>Category</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead className="text-right">Qty</TableHead>
            <TableHead className="text-right">Unit Price</TableHead>
            <TableHead className="text-right">Total Value</TableHead>
            <TableHead>Date Added</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inventory.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center text-xs text-slate-400 py-6">
                No products in stock.
              </TableCell>
            </TableRow>
          ) : (
            inventory.map((item) => {
              const totalValue = item.quantity * item.price;
              return (
                <TableRow key={item.id} className="text-xs">
                  <TableCell className="text-slate-600">{item.category}</TableCell>
                  <TableCell className="font-medium text-slate-800">{item.name}</TableCell>
                  <TableCell className="text-right text-slate-700">{item.quantity}</TableCell>
                  <TableCell className="text-right text-slate-700">
                    ฿{item.price.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-right font-medium text-slate-800">
                    ฿{totalValue.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-slate-500">{item.date}</TableCell>
                  <TableCell className="text-center">
                    <Button
                      size="sm"
                      className="bg-red-500 hover:bg-red-600 text-white h-7 px-2.5 text-xs gap-1"
                      onClick={() => deleteInventoryItem(item.id)}
                    >
                      <Trash2 className="w-3 h-3" />
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </div>
  );
}
