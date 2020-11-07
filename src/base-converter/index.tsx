import React, { useState } from "react";
import { Helmet } from "react-helmet";
import BinaryValueDisplay from "./BinaryValueDisplay";
import DisplayTemplate from "./DisplayTemplate";
import HexadecimalValueDisplay from "./HexadecimalValueDisplay";
import OctalValueDisplay from "./OctalValueDisplay";

enum BaseType {
  BINARY = 2,
  OCTAL = 8,
  DECIMAL = 10,
  HEXADECIMAL = 16,
}

function mapDisit(char: string): number {
  switch (char) {
    case "0":
      return 0;
    case "1":
      return 1;
    case "2":
      return 2;
    case "3":
      return 3;
    case "4":
      return 4;
    case "5":
      return 5;
    case "6":
      return 6;
    case "7":
      return 7;
    case "8":
      return 8;
    case "9":
      return 9;
    case "a":
      return 10;
    case "b":
      return 11;
    case "c":
      return 12;
    case "d":
      return 13;
    case "e":
      return 14;
    case "f":
      return 15;
  }
  return NaN;
}

const BaseConverter: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const [base, setBase] = useState<BaseType>(BaseType.DECIMAL);

  const handleKeyDown: React.KeyboardEventHandler = (e) => {
    const key = e.key;
    const number = mapDisit(key);
    if (!isNaN(number)) {
      if (number < base) setValue(value * base + number);
    } else if (key === "Backspace") {
      setValue(~~(value / base));
    }
  };

  return (
    <div onKeyDown={handleKeyDown} tabIndex={0}>
      <Helmet>
        <title>Base Converter</title>
      </Helmet>
      BaseConverter
      <DisplayTemplate
        name="Decimal"
        focused={base === BaseType.DECIMAL}
        onClick={() => setBase(BaseType.DECIMAL)}
      >
        {value}
      </DisplayTemplate>
      <div>
        <DisplayTemplate
          name="Octal"
          focused={base === BaseType.OCTAL}
          onClick={() => setBase(BaseType.OCTAL)}
        >
          <OctalValueDisplay value={value} />
        </DisplayTemplate>
        <DisplayTemplate
          name="Hexadecimal"
          focused={base === BaseType.HEXADECIMAL}
          onClick={() => setBase(BaseType.HEXADECIMAL)}
        >
          <HexadecimalValueDisplay value={value} />
        </DisplayTemplate>
      </div>
      <DisplayTemplate
        name="Binary"
        focused={base === BaseType.BINARY}
        onClick={() => setBase(BaseType.BINARY)}
      >
        <BinaryValueDisplay value={value} onChange={setValue} />
      </DisplayTemplate>
    </div>
  );
};

export default BaseConverter;
