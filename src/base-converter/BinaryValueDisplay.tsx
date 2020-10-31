import React from "react";

const BinaryValueDisplay: React.FC<{ value: number }> = ({ value }) => {
  const toString = (v: number) => {
    if (value === 0) return "0";
    let result = "";
    while (v) {
      result = (v % 2) + result;
      v = ~~(v / 2);
    }
    return result;
  };

  return <div>{toString(value)}</div>;
};

export default BinaryValueDisplay;
