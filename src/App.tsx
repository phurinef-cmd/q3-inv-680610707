import { AddItemDialog } from "./components/AddItemDialog";
import { DashboardTabs } from "./components/DashboardTabs";
import { ItemList } from "./components/ItemList";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 text-slate-800 font-sans">
      <div className="max-w-5xl w-full mx-auto p-6 space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Inventory Dashboard
            </h1>
            <p className="text-xs text-slate-500">
              Track your products, stock levels and inventory value.
            </p>
          </div>
          <AddItemDialog />
        </div>
        <DashboardTabs />
        <ItemList />
      </div>
      <Footer />
    </div>
  );
}
export default App;
