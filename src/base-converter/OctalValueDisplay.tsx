import React from "react";

const OctalValueDisplay: React.FC<{ value: number }> = ({ value }) => {
  const toString = (v: number) => {
    if (value === 0) return "0";
    let result = "";
    while (v) {
      result = (v % 8) + result;
      v = ~~(v / 8);
    }
    return result;
  };

  return <div>{toString(value)}</div>;
};

export default OctalValueDisplay;
