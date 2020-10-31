import React from "react";
import styled from "styled-components";

const DisplayTemplateBlock = styled.div<{ focused: boolean }>`
  height: 4rem;

  .value-display {
    font-size: 2.5rem;
  }
  border: ${(props) => {
    return props.focused ? "2px solid yellow;" : "2px solid black;";
  }};
`;
const DisplayTemplate: React.FC<{
  name: string;
  focused: boolean;
  onClick?: () => void;
}> = ({ name, focused, onClick, children }) => {
  return (
    <DisplayTemplateBlock onClick={onClick} focused={focused}>
      <div>{name}</div>
      <div className="value-display">{children}</div>
    </DisplayTemplateBlock>
  );
};

export default DisplayTemplate;
