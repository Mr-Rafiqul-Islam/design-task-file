import React from "react";

function Container({ children, className }) {
  return (
    <div className={`mx-auto max-w-[1800px] px-4 ${className}`}>{children}</div>
  );
}

export default Container;
