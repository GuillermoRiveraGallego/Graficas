import {
  RadarChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  PolarRadiusAxis,
} from "recharts";
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

export function ChartRadarCostes({ title, description, data }) {
  const chartData = data.map((item) => ({
    category: item.name,
    valor: item.value,
  }));

  const chartConfig = {
    valor: {
      label: "Coste",
      color: "var(--chart-3)",
    },
  };

  return (
    <Card className="flex flex-col w-full max-w-[500px]">
      <CardHeader className="items-center">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="w-full aspect-[4/3] px-2"
        >
          <RadarChart data={chartData} outerRadius={110}>
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  formatter={(value) => `${value.toLocaleString("es-ES")} €`}
                />
              }
            />
            <PolarGrid />
            <PolarAngleAxis
              dataKey="category"
              tick={{ fontSize: 12 }}
              angle={0}
            />
            <Radar
              dataKey="valor"
              fill="var(--chart-3)"
              fillOpacity={0.6}
              dot={{ r: 4, fillOpacity: 1 }}
              isAnimationActive
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Datos basados en coste total del proyecto
        </div>
        <div className="text-muted-foreground flex items-center gap-2 leading-none">
          Total coste: 32.861.200 €
        </div>
      </CardFooter>
    </Card>
  );
}
