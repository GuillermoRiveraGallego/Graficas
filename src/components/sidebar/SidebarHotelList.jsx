import { SidebarMenu } from "@/components/ui/sidebar";
import { SidebarHotelItem } from "./SidebarHotelItem";

export function SidebarHotelList({
  hoteles,
  selectedHotel,
  onSelect,
  toggleVisibility,
}) {
  if (!Array.isArray(hoteles)) return null;

  return (
    <SidebarMenu className="flex flex-col">
      {hoteles.length === 0 ? (
        <div className="px-3 py-2 text-sm text-muted-foreground">
          No se encontraron hoteles.
        </div>
      ) : (
        hoteles.map((hotel) => (
          <SidebarHotelItem
            key={hotel.refCat}
            hotel={hotel}
            isActive={hotel.refCat === selectedHotel?.refCat}
            onSelect={onSelect}
            toggleVisibility={toggleVisibility}
          />
        ))
      )}
    </SidebarMenu>
  );
}
