import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Navbar dark color="secondary" sticky="top" expand="md">
      <NavbarBrand className="ms-5" href="/">
        {/* <img src={NucampLogo} alt="nucamp logo" className="float-start"/> */}
        <h1 className="mt-1">CastleMagic</h1>
      </NavbarBrand>

      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/">
              <i class="fa fa-chess-rook"></i> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/contact">
              <i className="fa fa-chess-rook fa-lg" /> Contact
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/faq">
              <i className="fa-solid fa-rook fa-lg" /> FAQ
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/gallery">
              <i className="fa fa-chess-rook fa-lg" /> Gallery
            </NavLink>
            
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/about">
              <i className="fa fa-chess-rook fa-lg" /> About
            </NavLink>
            
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
