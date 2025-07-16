import { useState } from "react";
import GraficaBarChart from "./components/graficas/GraficaBarChart.jsx";
import GraficaDonutChart from "./components/graficas/GraficaDonutActive.jsx";
import GraficaLineaLeyenda from "./components/graficas/GraficaLineaLeyenda.jsx";
import { ChartRadarCostes } from "./components/graficas/GraficaRadarChart.jsx";
import { Button } from "@/components/ui/button";
import GraficaDonutP from "./components/graficas/GraficaDonutPeque.jsx";
import GraficaLineaLeyendaShadcn from "./components/graficas/GraficaLineaLeyendaShadcn.jsx";
import GraficaRadial from "./components/graficas/GraficaRadial.jsx";
import GraficaPieChart from "./components/graficas/GraficaPieChart.jsx";

const dataCostesTotales = [
  { name: "Coste Adquisición", value: 3735000 },
  { name: "Coste Construcción", value: 24750000 },
  { name: "Costes Generales", value: 1890000 },
  { name: "Coste Estructuración", value: 366200 },
  { name: "Coste Financiero", value: 2120000 },
];

const dataEvolucionCostes = [
  { time: "2025-01-01", value: 250000 },
  { time: "2025-01-05", value: 2500000 },
  { time: "2025-01-15", value: 2500000 },
  { time: "2025-02-01", value: 2750000 },
  { time: "2025-03-01", value: 2900000 },
  { time: "2025-04-01", value: 3100000 },
  { time: "2025-05-01", value: 3300000 },
  { time: "2025-06-01", value: 3400000 },
  { time: "2025-07-01", value: 3800000 },
  { time: "2025-08-01", value: 6800000 },
];

function App() {
  const [graficaActiva, setGraficaActiva] = useState("donut");

  return (
    <div className="flex bg-white min-h-screen">
      <main className="flex-1 p-6">
        {/* Barra de botones */}
        <div className="flex gap-4 justify-center mb-10">
          <Button
            onClick={() => setGraficaActiva("donut")}
            variant={graficaActiva === "donut" ? "default" : "outline"}
          >
            Donut
          </Button>
          <Button
            onClick={() => setGraficaActiva("donutP")}
            variant={graficaActiva === "donutP" ? "default" : "outline"}
          >
            DonutP
          </Button>
          <Button
            onClick={() => setGraficaActiva("bar")}
            variant={graficaActiva === "bar" ? "default" : "outline"}
          >
            Barras
          </Button>
          <Button
            onClick={() => setGraficaActiva("piechart")}
            variant={graficaActiva === "piechart" ? "default" : "outline"}
          >
            piechart
          </Button>

          <Button
            onClick={() => setGraficaActiva("radar")}
            variant={graficaActiva === "radar" ? "default" : "outline"}
          >
            Radar
          </Button>

          <Button
            onClick={() => setGraficaActiva("radial")}
            variant={graficaActiva === "radial" ? "default" : "outline"}
          >
            radial
          </Button>
          <Button
            onClick={() => setGraficaActiva("linea2")}
            variant={graficaActiva === "linea2" ? "default" : "outline"}
          >
            Línea2
          </Button>
          <Button
            onClick={() => setGraficaActiva("linea")}
            variant={graficaActiva === "linea" ? "default" : "outline"}
          >
            Línea
          </Button>
        </div>

        {/* Render dinámico de la gráfica */}
        <div className="flex justify-center">
          {graficaActiva === "donut" && (
            <GraficaDonutChart
              title="Costes del proyecto"
              description="Distribución global"
              data={dataCostesTotales}
            />
          )}

          {graficaActiva === "donutP" && (
            <GraficaDonutP
              title="Costes del proyecto"
              description="Distribución global"
              data={dataCostesTotales}
            />
          )}

          {graficaActiva === "bar" && (
            <GraficaBarChart
              title="Costes del proyecto"
              description="Distribución global"
              data={dataCostesTotales}
            />
          )}

          {graficaActiva === "radar" && (
            <ChartRadarCostes
              title="Costes del proyecto"
              description="Distribución global"
              data={dataCostesTotales}
            />
          )}
          {graficaActiva === "radial" && (
            <GraficaRadial
              title="Costes del proyecto"
              description="Distribución global"
              data={dataCostesTotales}
            />
          )}
          {graficaActiva === "piechart" && (
            <GraficaPieChart
              title="Costes del proyecto"
              description="Distribución global"
              data={dataCostesTotales}
            />
          )}
          {graficaActiva === "linea2" && (
            <GraficaLineaLeyendaShadcn
              title="Evolución Costes"
              data={dataEvolucionCostes}
              color="#00fff4"
            />
          )}
          {graficaActiva === "linea" && (
            <GraficaLineaLeyenda
              title="Evolución Costes"
              data={dataEvolucionCostes}
              color="#00fff4"
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
