import React, { useState } from "react";
import { Menu, Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  const [activeItem, setActiveItem] = useState(null);
  const history = useHistory();

  const handleClick = (name, path) => {
    setActiveItem(name);
    history.push(path);
  };

  return (
    <Menu>

      <Menu.Item
        name='Home'
        active={activeItem === "Home"}
        path="/"
        onClick={(e, { name, path }) => handleClick(name, path)}
      >
        Home
      </Menu.Item>

      <Menu.Item
        name='User'
        active={activeItem === "User"}
        path="/user"
        onClick={(e, { name, path }) => handleClick(name, path)}
      >
        User
      </Menu.Item>

      <Menu.Menu position='right'>
        <Logo>
          <i className="trello icon big fitted"></i>
        </Logo>
      </Menu.Menu>

      <Menu.Menu position='right'>
        <Menu.Item>
          <Button primary>Sign Up</Button>
        </Menu.Item>
      </Menu.Menu>

    </Menu>

  );
};

export default Header;
