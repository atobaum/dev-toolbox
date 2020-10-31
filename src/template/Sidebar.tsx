import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarBlock = styled.div`
  border-right: 1px solid black;
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;

    li {
      border: 1px solid black;
    }

    a {
      display: block;
      text-decoration: none;
      color: inherit;
    }
  }
  overflow: auto;
`;

const Sidebar: React.FC<{ links: { name: string; to: string }[] }> = ({
  links,
}) => {
  return (
    <SidebarBlock>
      <ul>
        {links.map((link) => (
          <li>
            <Link to={link.to}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </SidebarBlock>
  );
};

export default Sidebar;
