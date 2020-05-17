import React, { useState } from 'react';
import { Link } from "react-router-dom";
import CartSummary from '../cart/CartSummary';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink 
} from 'reactstrap';

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen); 

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">My-Shop</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
               {/* <Link to="/saveproduct">Ürün ekle</Link> */}
               <NavLink href="/saveproduct">Ürün ekle</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/mehmteke?tab=repositories">My Repositories</NavLink>
            </NavItem>
             <CartSummary></CartSummary>
          </Nav> 
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;