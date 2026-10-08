import { useState } from "react";
import { useItemStore } from "../store/dataStore";
import { categoryOptions, type InventoryItem } from "../types/datatypes";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Plus } from "lucide-react";

export function AddItemDialog() {
  const [open, setOpen] = useState(false);
  const addInventoryItem = useItemStore((state) => state.addInventoryItem);

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState<number | string>("");
  const [price, setPrice] = useState<number | string>("");
  const [category, setCategory] = useState<InventoryItem["category"]>("Electronics");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || quantity === "" || price === "") {
      return;
    }

    addInventoryItem(
      name.trim(),
      Number(quantity),
      Number(price),
      category
    );

    setName("");
    setQuantity("");
    setPrice("");
    setCategory("Electronics");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="inline-flex items-center justify-center rounded-md font-medium transition-colors bg-indigo-600 hover:bg-indigo-700 text-white gap-1 text-xs h-9 px-4 py-2">
        <Plus className="w-4 h-4" /> Add Product
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="text-sm font-semibold">New Product</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-3 mt-2">
          <div>
            <Label htmlFor="name" className="text-xs text-slate-600">
              Product Name
            </Label>
            <Input
              id="name"
              placeholder="e.g. Wireless Mouse"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 text-xs"
            />
          </div>

          <div>
            <Label htmlFor="quantity" className="text-xs text-slate-600">
              Quantity
            </Label>
            <Input
              id="quantity"
              type="number"
              min="1"
              placeholder="0"
              required
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="mt-1 text-xs"
            />
          </div>

          <div>
            <Label htmlFor="price" className="text-xs text-slate-600">
              Unit Price (฿)
            </Label>
            <Input
              id="price"
              type="number"
              step="0.01"
              min="0"
              placeholder="0.00"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1 text-xs"
            />
          </div>

          <div>
            <Label htmlFor="category" className="text-xs text-slate-600">
              Category
            </Label>
            <Select
              value={category}
              onValueChange={(val) => setCategory(val as InventoryItem["category"])}
            >
              <SelectTrigger className="mt-1 text-xs">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {categoryOptions.map((cat) => (
                  <SelectItem key={cat.id} value={cat.value as string} className="text-xs">
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4 text-xs">
            Save Product
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
