import React from "react";

const HexadecimalValueDisplay: React.FC<{ value: number }> = ({ value }) => {
  const toCharacter = (v: number): string => {
    if (v > 16) throw new Error("Value should be less than 16");

    if (v < 10) return String(v);
    return String.fromCharCode(v - 10 + 65); // "A".charCodeAt() === 65
  };

  const toString = (v: number) => {
    if (value === 0) return "0";
    let result = "";
    while (v) {
      result = toCharacter(v % 16) + result;
      v = ~~(v / 16);
    }
    return result;
  };

  return <div>{toString(value)}</div>;
};

export default HexadecimalValueDisplay;
