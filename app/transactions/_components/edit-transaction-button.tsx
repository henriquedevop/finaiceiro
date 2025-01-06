"use client";

import { Button } from "@/app/_components/ui/button";
import UpSertTransactionDialog from "@/app/_components/upsert-transaction-dialog";
import { Transaction } from "@prisma/client";
import { PencilIcon } from "lucide-react";
import { useState } from "react";

interface EditTransactionButtonProps {
  trasaction: Transaction;
}

const EditTransactionButton = ({ trasaction }: EditTransactionButtonProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground"
        onClick={() => setDialogOpen(true)}
      >
        <PencilIcon />
      </Button>
      <UpSertTransactionDialog
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        defaultValues={{
          ...trasaction,
          amount: Number(trasaction.amount),
        }}
        trasactionId={trasaction.id}
      />
    </>
  );
};

export default EditTransactionButton;
