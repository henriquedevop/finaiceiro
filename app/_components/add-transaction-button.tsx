"use client";

import { ArrowDownUp } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import UpSertTransactionDialog from "./upsert-transaction-dialog";

const AddTransactionButton = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <>
      <Button
        className="rounded-full font-bold"
        onClick={() => setDialogOpen(true)}
      >
        Adicionar Transação
        <ArrowDownUp />
      </Button>
      <UpSertTransactionDialog
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
      />
    </>
  );
};

export default AddTransactionButton;
