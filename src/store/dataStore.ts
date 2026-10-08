import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type InventoryItem } from "../types/datatypes";

interface ItemState {
  inventory: InventoryItem[];
  addInventoryItem: (
    name: string,
    quantity: number,
    price: number,
    category: InventoryItem["category"],
  ) => void;
  deleteInventoryItem: (id: string) => void;
}

export const useItemStore = create<ItemState>()(
  persist(
    (set) => ({
      // Default initial items used only if localStorage is completely empty
      inventory: [
        {
          id: "1",
          name: "เมาส์ไร้สาย Logitech",
          quantity: 25,
          price: 590,
          category: "Electronics",
          date: "2026-10-01",
        },
        {
          id: "2",
          name: "ปากกาลูกลื่น (กล่อง 50 ด้าม)",
          quantity: 12,
          price: 150,
          category: "Stationery",
          date: "2026-10-02",
        },
        {
          id: "3",
          name: "ข้าวหอมมะลิ 5 กก.",
          quantity: 40,
          price: 185,
          category: "Grocery",
          date: "2026-10-03",
        },
        {
          id: "4",
          name: "เสื้อยืดคอกลม",
          quantity: 60,
          price: 199,
          category: "Clothing",
          date: "2026-10-03",
        },
        {
          id: "5",
          name: "ไขควงชุด 12 ชิ้น",
          quantity: 8,
          price: 320,
          category: "Tools",
          date: "2026-10-03",
        },
        {
          id: "6",
          name: "สาย USB-C 1 เมตร",
          quantity: 100,
          price: 89,
          category: "Electronics",
          date: "2026-10-04",
        },
      ],
      addInventoryItem: (name, quantity, price, category) =>
        set((state) => ({
          inventory: [
            {
              id: Date.now().toString(),
              name,
              quantity,
              price,
              category,
              date: new Date().toISOString().split("T")[0],
            },
            ...state.inventory,
          ],
        })),
      deleteInventoryItem: (id: string) =>
        set((state) => ({
          inventory: state.inventory.filter((item) => item.id !== id),
        })),
    }),
    {
      name: "inv-680610707",
    },
  ),
);
