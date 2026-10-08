import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { OverviewCards } from "./OverviewCards";
import { CategoryCards } from "./CategoryCards";
import { Summary , LayoutGrid } from "lucide-react";

export function DashboardTabs() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="mb-4 bg-slate-100 p-1">
        <TabsTrigger value="overview" className="flex items-center gap-1.5 text-xs">
          <Summary className="w-3.5 h-3.5" />
          Overview
        </TabsTrigger>
        <TabsTrigger value="category" className="flex items-center gap-1.5 text-xs">
          <LayoutGrid className="w-3.5 h-3.5" />
          By Category
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <OverviewCards />
      </TabsContent>
      <TabsContent value="category">
        <CategoryCards />
      </TabsContent>
    </Tabs>
  );
}
