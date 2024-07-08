import React from "react";

function Container({ children, className }) {
  return (
    <div className={`mx-auto max-w-container px-4 min-1800:px-0 ${className}`}>{children}</div>
  );
}

export default Container;
