"use client";

import { TrendingUp } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const GraficaLineaLeyendaShadcn = ({
  title,
  data,
  color = "var(--chart-1)",
}) => {
  const chartData = data.map((item) => ({
    fecha: item.time,
    valor: item.value,
  }));

  const chartConfig = {
    valor: {
      label: "Evolución",
      color,
    },
  };

  return (
    <Card className="w-full max-w-200">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Evolución mensual</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={chartData}
              margin={{ top: 5, bottom: 5, left: 12, right: 12 }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="fecha"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) =>
                  new Date(value).toLocaleDateString("es-ES", {
                    month: "short",
                  })
                }
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Line
                dataKey="valor"
                type="linear"
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Tendencia al alza <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Total acumulado por mes (2025)
        </div>
      </CardFooter>
    </Card>
  );
};

export default GraficaLineaLeyendaShadcn;
