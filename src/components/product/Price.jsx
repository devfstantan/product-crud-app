import React from "react";
import { price } from "../../utils/formatters";

export const Price = ({ value, currency = "MAD" }) => {
  const v = price(value)

  return <span>{v} <small>{currency}</small></span>;
};
