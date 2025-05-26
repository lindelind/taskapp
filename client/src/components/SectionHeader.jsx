import React from "react";

const SectionHeader = ({ title, description }) => (
  <div>
    <h2>{title}</h2>
    <p style={{color: "grey"}}>{description}</p>
  </div>
);

export default SectionHeader;
