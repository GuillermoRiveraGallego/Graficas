// components/sidebar/SidebarHeaderTitle.tsx
import { Building2 } from "lucide-react";

export const SidebarHeaderTitle = ({ onClick }) => {
  return (
    <div
      className="flex items-center gap-2 px-4 py-2 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-black text-white">
        <Building2 className="size-4" />
      </div>

      <div className="flex flex-col gap-0.5 leading-none">
        <span className="font-semibold">Datos Catastrales</span>
        <span className="text-xs text-muted-foreground">Hoteles</span>
      </div>
    </div>
  );
};
