import { X } from "lucide-react";
import { ReactNode } from "react";

type DialogProps = {
  children: ReactNode;
  closeDialog?: () => void
  title?: string
};

export function Dialog({ children, closeDialog, title }: DialogProps) {
  return (
    <div className=" fixed inset-0 backdrop-blur-sm bg-black/60 flex justify-center items-center">
      <div className="w-[640px] animate-slide-down bg-zinc-900 py-5 px-6 rounded-xl shadow-shape space-y-5 ">
        {children}
      </div>
    </div>
  );
}
