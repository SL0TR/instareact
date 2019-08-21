import React from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <Menu>
      <Menu.Item
        as={Link}
        to='/'
        name='editorials'
      >
        Instareact!
      </Menu.Item>
    </Menu>
  );
}
 
export default Header;