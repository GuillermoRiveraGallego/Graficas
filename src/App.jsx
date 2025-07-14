import GraficaBarChart from "./components/graficas/GraficaBarChart.jsx";
import GraficaDonutChart from "./components/graficas/GraficaDonutActive.jsx";
import GraficaLineaLeyenda from "./components/graficas/GraficaLineaLeyenda.jsx";
import { ChartRadarCostes } from "./components/graficas/GraficaRadarChart.jsx";

const dataCostesTotales = [
  { name: "Coste Adquisición", value: 3735000 },
  { name: "Coste Construcción", value: 24750000 },
  { name: "Costes Generales", value: 1890000 },
  { name: "Coste Estructuración", value: 366200 },
  { name: "Coste Financiero", value: 2120000 },
];

export const dataEvolucionCostes = [
  { time: "2025-01-01", value: 2500000 },
  { time: "2025-02-01", value: 2750000 },
  { time: "2025-03-01", value: 2900000 },
  { time: "2025-04-01", value: 3100000 },
  { time: "2025-05-01", value: 3300000 },
  { time: "2025-06-01", value: 3400000 },
  { time: "2025-07-01", value: 3800000 },
];

function App() {
  return (
    <div className="flex  bg-white">
      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-[100%] mx-auto">
          <GraficaDonutChart
            title="Costes del proyecto"
            description="Distribución global"
            data={dataCostesTotales}
          />

          <GraficaBarChart
            title="Costes del proyecto"
            description="Distribución global"
            data={dataCostesTotales}
          />

          <ChartRadarCostes
            title="Costes del proyecto"
            description="Distribución global"
            data={dataCostesTotales}
          />
        </div>
        <div className="mt-10 w-1/2 ">
          <GraficaLineaLeyenda
            title="Evolución Costes"
            data={dataEvolucionCostes}
            color="#00fff4"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
