import { useEffect, useRef } from "react";
import { createChart, AreaSeries } from "lightweight-charts";

export default function GraficaLineaLeyenda({
  title,
  data,
  color = "#00f0ff",
}) {
  const containerRef = useRef(null);
  const legendRef = useRef(null);

  useEffect(() => {
    const chart = createChart(containerRef.current, {
      layout: {
        background: { type: "solid", color: "#0e0e0e" },
        textColor: "#d1d4dc",
        fontSize: 12,
      },
      width: containerRef.current.clientWidth,
      height: 300,

      timeScale: {
        visible: true,
        borderVisible: false,
        fixLeftEdge: true,
        fixRightEdge: true,
        rightOffset: 20,
        barSpacing: 12,
      },

      grid: {
        vertLines: { visible: false },
        horzLines: { visible: false },
      },

      crosshair: {
        horzLine: { visible: true, labelVisible: true },
      },
    });

    const areaSeries = chart.addSeries(AreaSeries, {
      topColor: `${color}33`,
      bottomColor: `${color}08`,
      lineColor: color,
      lineWidth: 2,
      crossHairMarkerVisible: false,
    });

    areaSeries.setData(data);

    // 🧠 Lo que separa los números del borde
    chart.priceScale("right").applyOptions({
      entireTextOnly: true, // fuerza que el texto se dibuje completo dentro del canvas
    });

    const symbolName = title;
    const legend = legendRef.current;

    const getLastBar = () =>
      areaSeries.dataByIndex(Number.MAX_SAFE_INTEGER, -1);

    const formatPrice = (price) =>
      (Math.round(price * 100) / 100).toLocaleString("es-ES", {
        style: "currency",
        currency: "EUR",
      });

    const setTooltipHtml = (name, date, price) => {
      legend.innerHTML = `
        <div class="text-white font-semibold text-sm">${name}</div>
        <div class="text-cyan-400 text-lg">${price}</div>
        <div class="text-gray-400 text-xs">${date}</div>`;
    };

    const updateLegend = (param) => {
      const valid = param?.time && param.point.x >= 0 && param.point.y >= 0;
      const bar = valid
        ? param.seriesData.get(areaSeries)
        : getLastBar(areaSeries);
      if (!bar) return;

      const date = bar.time;
      const value = bar.value ?? bar.close;
      const formatted = formatPrice(value);
      setTooltipHtml(symbolName, date, formatted);
    };

    chart.subscribeCrosshairMove(updateLegend);
    updateLegend();

    return () => chart.remove();
  }, [data, color, title]);

  return (
    <div className="relative w-full">
      <div ref={legendRef} className="absolute top-2 left-3 z-10 p-" />
      <div ref={containerRef} className="rounded-xl overflow-hidden shadow" />
    </div>
  );
}
