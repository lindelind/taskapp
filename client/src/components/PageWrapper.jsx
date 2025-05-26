import React from "react";

const PageWrapper = ({ children, style }) => (
  <div
    style={{
      maxWidth: "100%",
      margin: "0 30px",
      padding: "32px 16px",
      ...style,
    }}
  >
    {children}
  </div>
);

export default PageWrapper;
