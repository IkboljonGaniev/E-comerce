import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';

function Aboutdown({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="d-flex p-5">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle caret style={{backgroundColor:"rgba(4, 17, 42, 0.367)"}}>About</DropdownToggle>
        <DropdownMenu {...args}>
        
          <DropdownItem style={{width:100}}>About Us</DropdownItem>
          
         
          <DropdownItem style={{width:100}}>Contact us</DropdownItem>
          
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

Aboutdown.propTypes = {
  direction: PropTypes.string,
};

export default Aboutdown;