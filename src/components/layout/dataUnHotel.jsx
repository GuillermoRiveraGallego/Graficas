import GraficaBarChart from "@/components/graficas/GraficaBarChart";
import GraficaDonutActive from "@/components/graficas/GraficaDonutActive";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MapPinned } from "lucide-react";

const DataUnHotel = ({ data, hotel }) => {
  if (!data) return <p>No hay datos disponibles del inmueble.</p>;

  // 1. Determinar los bloques a procesar (subconsultas o consulta directa)
  const bloques = Array.isArray(data.subconsultas)
    ? data.subconsultas.map((s) => s?.consulta_dnprcResult).filter(Boolean)
    : [data?.consulta_dnprcResult];

  // 2. Extraer construcciones válidas (solo si existen y están bien formadas)
  const construcciones = bloques.flatMap((bloque) => {
    const lcons = bloque?.bico?.lcons;
    if (!bloque?.bico || !lcons) return [];
    return Array.isArray(lcons) ? lcons : [lcons];
  });

  const ciudadHotel = bloques[0]?.bico?.bi?.dt?.nm || "Ciudad no especificada";

  // Si no hay construcciones, mostramos mensaje
  if (!construcciones.length) {
    return <p>No hay datos disponibles del inmueble.</p>;
  }

  // 3. Formatear resumen
  const resumenObj = construcciones.reduce((acc, cons) => {
    const tipo = cons?.lcd?.toUpperCase() || "DESCONOCIDO";
    const metrosStr = cons?.dfcons?.stl?.trim() || "0";
    const metros = parseFloat(metrosStr) || 0;

    acc[tipo] = (acc[tipo] || 0) + metros;
    return acc;
  }, {});

  const resumenArray = Object.entries(resumenObj).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <div>
      {hotel?.nombre && (
        <div className="mb-3">
          <h2 className="text-3xl font-semibold mb-2">{hotel.nombre}</h2>

          <div className="flex gap-2">
            <MapPinned className="w-5 h-5" />
            {ciudadHotel}
            <p className="ml-5">Referencia catastral: {hotel.refCat}</p>
          </div>
        </div>
      )}

      <Card className="mb-6 max-w-500">
        <CardHeader>
          <CardTitle>Resumen por tipo de construcción</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-2">
          {resumenArray.map(({ name, value }) => (
            <div
              key={name}
              className="flex items-center justify-between border-b pb-1 last:border-none last:pb-0"
            >
              <span className="text-sm text-muted-foreground">{name}</span>
              <span className="font-medium">{value.toFixed(2)} m²</span>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-6 pt-5 md:grid-cols-2">
        <GraficaBarChart
          title="Superficie por tipo"
          description="Comparación de metros cuadrados por tipo de uso"
          data={resumenArray}
        />
        <GraficaDonutActive
          title="Distribución por tipo"
          description="Representación proporcional del uso"
          data={resumenArray}
        />
      </div>
    </div>
  );
};

export default DataUnHotel;
