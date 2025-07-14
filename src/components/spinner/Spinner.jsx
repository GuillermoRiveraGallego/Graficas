import { Loader2 } from "lucide-react";

const Spinner = () => (
  <div className="flex justify-center items-center h-32">
    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
  </div>
);

export default Spinner;
