import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "./ui/drawer";
import { Button } from "./ui/button";
import profileImg from "../assets/profile.jpg";

interface StudentInfoProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function StudentInfo({ open, onOpenChange }: StudentInfoProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="w-[340px] sm:w-[380px] bg-white h-full fixed right-0 top-0 bottom-0 left-auto flex flex-col p-4 shadow-xl border-l">
        <DrawerHeader className="p-0 mb-3 text-left">
          <DrawerTitle className="text-sm font-semibold text-slate-800">
            ข้อมูลนักศึกษา
          </DrawerTitle>
          <span className="text-[11px] text-slate-400">Student Information</span>
        </DrawerHeader>

        <div className="flex flex-col items-center flex-1 overflow-y-auto space-y-3">
          <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-slate-200 mt-2 shadow-sm">
            <img
              src={profileImg}
              alt="Student Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center">
            <h4 className="font-bold text-sm text-slate-800">
              Phurin Bansupa
            </h4>
            <p className="text-[11px] text-slate-500 mt-0.5">
              นักศึกษาสาขาวิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่
            </p>
          </div>

          <div className="w-full space-y-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-md mt-2 border">
            <div className="flex items-center gap-2">
              <span><strong>Hobbies:</strong> ฟังเพลง, เล่นฟุตบอล, เล่นเกม</span>
            </div>
            <div className="flex items-center gap-2">
              <span><strong>CMU email:</strong> phurin_b@cmu.ac.th</span>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <strong>Social:</strong>{" "}
                <a
                  href="https://www.instagram.com/mabsppr_ef/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://www.instagram.com/mabsppr_ef/
                </a>
              </span>
            </div>
            <div className="pt-2 border-t text-center text-slate-700 font-semibold">
              รหัสนักศึกษา: 680610707
            </div>
          </div>
        </div>

        <div className="pt-3 border-t">
          <Button 
            className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs"
            onClick={() => onOpenChange(false)}
          >
            Close
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
