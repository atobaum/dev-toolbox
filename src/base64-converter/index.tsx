import React, { useState } from "react";
import styled from "styled-components";

const Base64ConverterBlock = styled.div`
  textarea {
    width: 80%;
    min-height: 30%;
  }
`;

const Base64Converter: React.FC = () => {
  const [string, setString] = useState("");
  const [base64, setBase64] = useState("");
  const [error, setError] = useState<string | null>(null);

  return (
    <Base64ConverterBlock>
      <div>string</div>
      <textarea
        value={string}
        onChange={(e) => {
          setString(e.target.value);

          setBase64(btoa(encodeURIComponent(e.target.value)));
        }}
      ></textarea>
      <div>base64</div>
      <textarea
        value={base64}
        onChange={(e) => {
          setBase64(e.target.value);

          try {
            setString(decodeURIComponent(atob(e.target.value)));
            setError(null);
          } catch {
            setError("Invalid base64");
          }
        }}
      ></textarea>
      <div>{error}</div>
    </Base64ConverterBlock>
  );
};

export default Base64Converter;
