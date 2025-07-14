import { calcularResumen } from "@/hooks/calcularResumen";
import {
  TotalInmueblesCard,
  SuperficieTotalCard,
  SuperficieMediaCard,
  TotalProvinciasCard,
} from "../cards/CardInicio.jsx";
import { DistribucionPorTipoUso } from "../graficas/InicioTipoUso";
import { DistribucionPorProvincia } from "../graficas/InicioProvincias";
import { ComposicionPortafolioChart } from "../graficas/InicioGraficaDonutGeneral";

export const Inicio = ({ data }) => {
  const resumen = calcularResumen(data);

  return (
    <div className="w-full grid">
      <h2 className="text-3xl font-semibold mb-4 px-12">Resumen global</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 px-12">
        <TotalInmueblesCard total={resumen.totalInmuebles} />
        <SuperficieTotalCard superficie={resumen.totalSuperficie} />
        <SuperficieMediaCard media={Math.round(resumen.superficieMedia)} />
        <TotalProvinciasCard
          count={Object.keys(resumen.superficiePorProvincia).length}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-12 mb-8">
        <DistribucionPorTipoUso data={resumen.superficiePorTipo} />
        <ComposicionPortafolioChart data={resumen.superficiePorTipo} />
      </div>
      <div className="px-12 mb-12">
        <DistribucionPorProvincia
          superficiePorProvincia={resumen.superficiePorProvincia}
          inmueblesPorProvincia={resumen.inmueblesPorProvincia}
        />
      </div>
    </div>
  );
};
