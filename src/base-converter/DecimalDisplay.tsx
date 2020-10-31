import React from "react";

const DecimalValueDisplay: React.FC<{
  value: number;
}> = ({ value }) => {
  return <div>{value}</div>;
};

export default DecimalValueDisplay;
