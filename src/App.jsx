import GraficaBarChart from "./components/graficas/GraficaBarChart.jsx";
import GraficaDonutChart from "./components/graficas/GraficaDonutActive.jsx";
import { ChartRadarCostes } from "./components/graficas/GraficaRadarChart.jsx";

const dataCostesTotales = [
  { name: "Coste Adquisición", value: 3735000 },
  { name: "Coste Construcción", value: 24750000 },
  { name: "Costes Generales", value: 1890000 },
  { name: "Coste Estructuración", value: 366200 },
  { name: "Coste Financiero", value: 2120000 },
];

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
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
      </main>
    </div>
  );
}

export default App;
