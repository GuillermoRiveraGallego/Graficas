import { TrendingUp } from "lucide-react";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

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

const colores = [
  "#3b82f6", // chart-1
  "#10b981", // chart-2
  "#f59e0b", // chart-3
  "#ef4444", // chart-4
  "#6366f1", // chart-5
  "#8b5cf6", // chart-6
  "#ec4899", // chart-7
  "#14b8a6", // chart-8
  "#f43f5e", // chart-9
  "#84cc16", // chart-10
];

const GraficaRadial = ({ title, description, data }) => {
  // Añadir colores a los datos
  const chartData = data.map((item, i) => ({
    ...item,
    fill: colores[i % colores.length],
  }));

  const chartConfig = {
    value: {
      label: "Valor",
    },
  };

  return (
    <Card className="flex flex-col max-w-[500px] w-full mx-auto">
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <RadialBarChart
            data={chartData}
            innerRadius="30%"
            outerRadius="90%"
            barSize={16}
          >
            <PolarAngleAxis type="category" dataKey="name" tick={false} />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  hideLabel
                  nameKey="name"
                  formatter={(value) => `${value.toLocaleString("es-ES")} €`}
                />
              }
            />
            <RadialBar dataKey="value" background clockWise />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Costes distribuidos por categoría
          <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
};

export default GraficaRadial;
