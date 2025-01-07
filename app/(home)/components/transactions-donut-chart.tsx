"use client";

import { Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/app/_components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { TransactionType } from "@prisma/client";
import { TransactionPercentagePerType } from "@/app/_data/get-dashboard/types";
import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import PercentageItem from "./percentage-item";

const chartConfig = {
  [TransactionType.INVESTMENT]: {
    label: "Investido",
    color: "#FFF",
  },
  [TransactionType.DEPOSIT]: {
    label: "Receita",
    color: "#55B02E",
  },
  [TransactionType.EXPENSE]: {
    label: "Deposito",
    color: "#E93030",
  },
} satisfies ChartConfig;

interface TrasactionDonutChartProps {
  typesPercentage: TransactionPercentagePerType;
  depositTotal: number;
  expenseTotal: number;
  investimentTotal: number;
}

const TrasactionDonutChart = ({
  depositTotal,
  expenseTotal,
  investimentTotal,
  typesPercentage,
}: TrasactionDonutChartProps) => {
  const chartData = [
    {
      type: TransactionType.DEPOSIT,
      amount: depositTotal,
      fill: "#55B02E",
    },
    {
      type: TransactionType.EXPENSE,
      amount: expenseTotal,
      fill: "#E93030",
    },
    {
      type: TransactionType.INVESTMENT,
      amount: investimentTotal,
      fill: "#FFF",
    },
  ];
  return (
    <Card className="flex flex-col p-6">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="type"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
        <div className="space-y-2">
          <PercentageItem
            value={typesPercentage.DEPOSIT}
            title="Receita"
            icon={<TrendingUpIcon size={16} />}
          />
          <PercentageItem
            value={typesPercentage.EXPENSE}
            title="Despesas"
            icon={<TrendingDownIcon size={16} />}
          />
          <PercentageItem
            value={typesPercentage.INVESTMENT}
            title="Investimentos"
            icon={<PiggyBankIcon size={16} />}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default TrasactionDonutChart;
