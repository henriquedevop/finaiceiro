import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";
import { db } from "@/app/_lib/prisma";

interface SummaryCardsProps {
  month: string;
  balence: number;
  depositTotal: number;
  expenseTotal: number;
  investimentTotal: number;
}

const SummaryCards = async ({
  month,
  balence,
  depositTotal,
  expenseTotal,
  investimentTotal,
}: SummaryCardsProps) => {
  return (
    <div className="space-y-4">
      {/* first card */}
      <SummaryCard
        icon={<WalletIcon size={16} />}
        title="Saldo"
        amount={balence}
        size="large"
        className="bg-gray-500/10"
      />
      {/* outhers cards */}
      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          icon={<PiggyBankIcon size={16} />}
          title="Investimento"
          amount={investimentTotal}
          className="bg-gray-500/5"
        />
        <SummaryCard
          icon={<TrendingUpIcon size={16} className="text-primary" />}
          title="Receita"
          amount={depositTotal}
        />
        <SummaryCard
          icon={<TrendingDownIcon size={16} className="text-danger" />}
          title="Despesas"
          amount={expenseTotal}
        />
      </div>
    </div>
  );
};

export default SummaryCards;
