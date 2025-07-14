import GraficaBarChart from "./GraficaBarChart";

export function DistribucionPorProvincia({
  superficiePorProvincia,
  inmueblesPorProvincia,
}) {
  const topProvincias = Object.entries(superficiePorProvincia)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 8)
    .map(([name, value]) => {
      const inmuebles = inmueblesPorProvincia[name] || 0;
      const label = `${name} (${inmuebles} inmueble${
        inmuebles !== 1 ? "s" : ""
      })`;
      return { name: label, value };
    });

  return (
    <GraficaBarChart
      title="Distribución por Provincias"
      description="Top 8 provincias por superficie"
      data={topProvincias}
    />
  );
}
