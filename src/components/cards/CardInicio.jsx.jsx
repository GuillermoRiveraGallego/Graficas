import { Card, CardContent } from "@/components/ui/card";

export function CardInicio({
  title,
  value,
  subtitle,
  icon: Icon,
  iconColor = "text-blue-600",
  bgColor = "bg-blue-100",
}) {
  return (
    <Card className="h-[120px]">
      <CardContent className="p-6 h-full">
        <div className="flex items-center justify-between h-full">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            <p className={`text-xs mt-1 ${iconColor}`}>{subtitle}</p>
          </div>
          <div
            className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center`}
          >
            {Icon && <Icon className={`w-6 h-6 ${iconColor}`} />}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
