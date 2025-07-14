import GraficaDonutChart from "./GraficaDonutActive";

export function ComposicionPortafolioChart({ data }) {
  const topTipos = Object.entries(data)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 6)
    .map(([name, value]) => ({ name, value }));

  return (
    <GraficaDonutChart
      title="Composición del Portafolio"
      description="Distribución visual de los principales tipos de uso"
      data={topTipos}
    />
  );
}
