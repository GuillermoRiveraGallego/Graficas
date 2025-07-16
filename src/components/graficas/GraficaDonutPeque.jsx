import * as React from "react";
import { Pie, PieChart, Label } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const GraficaDonutP = ({ title, description, data }) => {
  const colores = [
    "hsl(var(--chart-1))",
    "hsl(var(--chart-2))",
    "hsl(var(--chart-3))",
    "hsl(var(--chart-4))",
    "hsl(var(--chart-5))",
    "hsl(var(--chart-6))",
    "hsl(var(--chart-7))",
    "hsl(var(--chart-8))",
    "hsl(var(--chart-9))",
    "hsl(var(--chart-10))",
  ];

  const total = data.reduce((acc, item) => acc + item.value, 0);

  const chartConfig = React.useMemo(() => {
    const config = {
      value: { label: "Superficie" },
    };

    data.forEach((item, i) => {
      config[item.name] = {
        label: item.name,
        color: colores[i % colores.length],
      };
    });

    return config;
  }, [data]);

  const chartData = data.map((item) => {
    const porcentaje = total ? ((item.value / total) * 100).toFixed(1) : 0;
    return {
      ...item,
      fill: chartConfig[item.name]?.color || "gray",
      percentage: porcentaje,
    };
  });

  return (
    <Card className="flex flex-col w-full max-w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <PieChart width={200} height={200}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={50}
              outerRadius={80}
              stroke="none"
              isAnimationActive={false}
            >
              <Label
                value={`${total.toLocaleString()} m²`}
                position="center"
                style={{ fontSize: "12px", fontWeight: "bold" }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col gap-2 text-sm">
        <ul className="space-y-2 w-full">
          {chartData.map((item, index) => (
            <li key={index} className="flex justify-between text-sm">
              <div className="flex items-center gap-2">
                <span
                  className="inline-block size-3 rounded-full"
                  style={{ backgroundColor: item.fill }}
                ></span>
                {item.name}
              </div>
              <span>{item.percentage}%</span>
            </li>
          ))}
        </ul>
      </CardFooter>
    </Card>
  );
};

export default GraficaDonutP;
