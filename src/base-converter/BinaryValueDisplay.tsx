import React, { PointerEvent } from "react";

const BinaryValueDisplay: React.FC<{
  value: number;
  onChange: (value: number) => void;
}> = ({ value, onChange }) => {
  const toDigits = (v: number): number[] => {
    if (v <= 0) return [0];

    const result = [];
    while (v) {
      result.push(v % 2);
      v = ~~(v / 2);
    }
    return result.reverse();
  };

  const onClickDigit = (e: PointerEvent<HTMLSpanElement>): void => {
    const index = parseInt((e.target as HTMLSpanElement).dataset.idx!);

    if (isNaN(index)) throw new Error("error");

    if ((value >> index) & 1) onChange(value & ~(1 << index));
    else onChange(value | (1 << index));
  };

  const digits = toDigits(value);

  return (
    <div>
      {digits.map((v, idx) => (
        <span
          key={idx}
          data-idx={digits.length - idx - 1}
          onPointerDown={onClickDigit}
        >
          {v}
        </span>
      ))}
    </div>
  );
};

export default BinaryValueDisplay;
