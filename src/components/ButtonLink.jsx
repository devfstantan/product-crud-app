import React from "react";
import { Link } from "react-router-dom";

export const ButtonLink = ({ to, variant, icon = null, children }) => {
  return (
    <Link to={to} className={`btn btn-sm btn-${variant}`}>
      {icon && <i className={icon}></i>} {children}
    </Link>
  );
};
