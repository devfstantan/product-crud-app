import React from "react";

export const Stock = ({ value }) => {
  let text = "";
  let color = "";
  if (value >= 10) {
    text = `${value} units`;
    color = "success";
  } else if (value > 0) {
    text = `${value} units`;
    color = "warning";
  } else {
    text = `Out of stock`;
    color = "danger";
  }
  
  return <span className={`text-${color}`}>{text}</span>;
};
