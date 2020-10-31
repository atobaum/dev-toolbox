import React from "react";
import styled from "styled-components";

const DisplayTemplateBlock = styled.div<{ focused: boolean }>`
  .name-display {
    padding: 0.2rem 0.5rem;
    color: gray;
    text-align: left;
  }

  .value-display {
    font-size: 2.5rem;
    text-align: right;
    padding: 0 0.5rem;
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
      <div className="name-display">{name}</div>
      <div className="value-display">{children}</div>
    </DisplayTemplateBlock>
  );
};

export default DisplayTemplate;
