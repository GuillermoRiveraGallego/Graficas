import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

export function HotelSearchInput({ value, onChange }) {
  return (
    <div className="mb-3 px-4 relative">
      <Input
        placeholder="Buscar hotel..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="text-sm pr-10" // <- espacio extra para la ❌
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
