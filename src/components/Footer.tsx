import { useState } from "react";
import { StudentInfo } from "./StudentInfo";

export function Footer() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <footer className="w-full border-t bg-white py-3 px-6 text-xs text-slate-500 flex items-center justify-between mt-auto">
      <div>
        <button
          onClick={() => setDrawerOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-2.5 py-1 rounded text-xs transition-colors"
        >
          Phurin Bansupa
        </button>
          &nbsp;&nbsp;© 2026 CPE207 Corp. All rights reserved.
      </div>
      <StudentInfo open={drawerOpen} onOpenChange={setDrawerOpen} />
    </footer>
  );
}
