import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';

function Homedown({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="d-flex p-5">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle caret style={{backgroundColor:"rgba(4, 17, 42, 0.367)"}}>Home</DropdownToggle>
        <DropdownMenu {...args}>
          
          <DropdownItem style={{width:100}}>Some Action</DropdownItem>
        
          <DropdownItem style={{width:100}}>Foo Action</DropdownItem>
          <DropdownItem style={{width:100}}>Bar Action</DropdownItem>
          <DropdownItem style={{width:100}}>Quo Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

Homedown.propTypes = {
  direction: PropTypes.string,
};

export default Homedown;