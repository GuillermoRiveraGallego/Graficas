import { SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Eye, EyeOff } from "lucide-react";

export function SidebarHotelItem({
  hotel,
  isActive,
  onSelect,
  toggleVisibility,
}) {
  return (
    <SidebarMenuItem>
      <div
        onClick={() => onSelect(hotel)}
        className={`w-full cursor-pointer min-h-11 flex items-center justify-between rounded-md px-3 text-sm transition-colors ${
          isActive
            ? "bg-muted text-foreground font-semibold"
            : "text-muted-foreground hover:bg-gray-100 hover:text-foreground"
        }`}
      >
        <span>{hotel.nombre}</span>

        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleVisibility(hotel.refCat);
          }}
          className="ml-4 p-1 rounded hover:bg-gray-200"
        >
          {hotel.visible ? (
            <Eye className="w-4 h-4" />
          ) : (
            <EyeOff className="w-4 h-4 text-muted-foreground" />
          )}
        </button>
      </div>
    </SidebarMenuItem>
  );
}
