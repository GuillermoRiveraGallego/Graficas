import {
  SidebarProvider,
  SidebarContent,
  SidebarRail,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { useState } from "react";
import { HotelSearchInput } from "../sidebar/Searcher";
import { SidebarHeaderTitle } from "../sidebar/SidebarHeaderTitle";
import { SidebarHotelList } from "../sidebar/SidebarHotelList";

export const Sidebar = ({
  onSelect,
  selectedHotel,
  hoteles,
  toggleVisibility,
}) => {
  const [search, setSearch] = useState("");

  const filteredHoteles = hoteles.filter((hotel) =>
    hotel.nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SidebarProvider>
      <aside className="w-70 bg-white border-r shadow-sm">
        <SidebarHeader>
          <SidebarHeaderTitle onClick={() => onSelect({ refCat: "GLOBAL" })} />

          <HotelSearchInput value={search} onChange={setSearch} />
        </SidebarHeader>

        <SidebarContent className="px-4 py-2 overflow-y-auto max-h-[calc(100vh-8rem)] no-scrollbar">
          <SidebarHotelList
            hoteles={filteredHoteles}
            selectedHotel={selectedHotel}
            onSelect={onSelect}
            toggleVisibility={toggleVisibility}
          />
        </SidebarContent>

        <SidebarRail />
      </aside>
    </SidebarProvider>
  );
};
