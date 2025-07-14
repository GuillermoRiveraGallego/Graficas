import GraficaBarChart from "./GraficaBarChart";

export function DistribucionPorTipoUso({ data }) {
  const topTipos = Object.entries(data)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 6)
    .map(([name, value]) => ({ name, value }));

  return (
    <GraficaBarChart
      title="Distribución por Tipo de Uso"
      description="Top 6 categorías por superficie"
      data={topTipos}
    />
  );
}
