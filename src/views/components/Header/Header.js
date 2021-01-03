import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <Menu>
      <Link to="/">
        <Menu.Item
          name='Home'
          active={activeItem === "Home"}
          onClick={(e, { name }) => setActiveItem(name)}
        >
          Home
        </Menu.Item>
      </Link>

      <Link to="/user">
        <Menu.Item
          name='User'
          active={activeItem === "User"}
          onClick={(e, { name }) => setActiveItem(name)}
        >
          User
        </Menu.Item>
      </Link>

    </Menu>
  );
};

export default Header;
