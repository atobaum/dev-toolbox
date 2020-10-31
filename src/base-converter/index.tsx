import React, { useState } from "react";

const BinaryDisplay: React.FC<{ value: number }> = ({ value }) => {
  const toString = (v: number) => {
    let result = "";
    while (v) {
      result = (v % 2) + result;
      v = ~~(v / 2);
    }
    return result;
  };

  return <div>Binary {toString(value)}</div>;
};

const OctalDisplay: React.FC<{ value: number }> = ({ value }) => {
  return <div></div>;
};

const DecimalDisplay: React.FC<{ value: number }> = ({ value }) => {
  const toString = (v: number) => {
    return v + "";
  };

  return <div>Decimal {toString(value)}</div>;
};

const HexadecimalDisplay: React.FC<{ value: number }> = ({ value }) => {
  return <div></div>;
};

const BaseConverter: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const [base, setBase] = useState<number>(10);
  return (
    <div>
      BaseConverter
      <div>{value}</div>
      <input
        value={value}
        onChange={(e) => {
          if (e.target.value.length === 0) setValue(0);
          const v = parseInt(e.target.value);
          if (!isNaN(v)) setValue(v);
        }}
      ></input>
      <BinaryDisplay value={value} />
      <OctalDisplay value={value} />
      <DecimalDisplay value={value} />
      <HexadecimalDisplay value={value} />
    </div>
  );
};

export default BaseConverter;
