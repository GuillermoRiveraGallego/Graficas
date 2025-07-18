import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function GraficaBarChartMultiple({
  title,
  data,
  color1,
  color2,
}) {
  const formatYAxis = (value) => {
    if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
    if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
    return value.toString();
  };

  return (
    <div className="w-full max-w-200">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={formatYAxis}
          />

          <Tooltip content={null} cursor={false} />
          <Legend />
          <Bar
            dataKey="A"
            name="Escenario A"
            fill={color2 || "#8EC5FF"}
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="B"
            name="Escenario B"
            fill={color1 || "#2B7FFF"}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
