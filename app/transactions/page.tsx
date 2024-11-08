import { ArrowDownUpIcon } from "lucide-react";

import { db } from "@/app/_lib/prisma";
import { Button } from "@/app/_components/ui/button";
import { DataTable } from "@/app/_components/ui/data-table";
import { transactionColumns } from "@/app/transactions/_columns";

const Transactions = async () => {
  const transaction = await db.transaction.findMany({});

  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>

        <Button className="rounded-full font-bold">
          Adicionar Transação <ArrowDownUpIcon />
        </Button>
      </div>

      <DataTable columns={transactionColumns} data={transaction} />
    </div>
  );
};

export default Transactions;
