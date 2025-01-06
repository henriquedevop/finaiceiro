import React, { forwardRef } from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";
import { Input } from "@/app/_components/ui/input";

export const MoneyInput = forwardRef(
  (
    props: NumericFormatProps<React.ComponentProps<"input">>,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <NumericFormat
        {...props}
        getInputRef={ref}
        customInput={Input}
        allowNegative={false}
        prefix="R$ "
        decimalScale={2}
        decimalSeparator=","
        thousandSeparator="."
      />
    );
  },
);

MoneyInput.displayName = "MoneyInput";
