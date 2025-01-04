import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { Circle } from "lucide-react";

interface TransactionTypeBadge {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadge) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-muted font-bold text-primary hover:bg-muted">
        <Circle className="mr-2 fill-primary" size={10} />
        Déposito
      </Badge>
    );
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="text-danger bg-muted font-bold hover:bg-muted">
        <Circle className="fill-danger mr-2" size={10} />
        Despesa
      </Badge>
    );
  }
  return (
    <Badge className="bg-muted font-bold text-white hover:bg-muted">
      <Circle className="mr-2 fill-white" size={10} />
      Investimento
    </Badge>
  );
};

export default TransactionTypeBadge;
