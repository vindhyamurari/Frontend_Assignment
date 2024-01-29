import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBNavbarLink,
} from "mdb-react-ui-kit";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  const [openBasic, setOpenBasic] = useState(false);
  const [activeItem, setActiveItem] = useState("Leads");

  const handleNavItemClicked = (itemClicked: string) => {
    setActiveItem(itemClicked);
  };

  return (
    <MDBNavbar style={{
      padding: '0px',
      margin:'0px'
    }}  expand="md" dark bgColor="white">
      <MDBContainer fluid style={{backgroundColor:'#fff'}}>
        <MDBNavbarBrand href="#">
          <img src={logo} height="40" alt="" loading="lazy" />
        </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink
                onClick={() => handleNavItemClicked("Dashboard")}
                className={
                  activeItem === "Dashboard" ? "nav-active" : "in-active"
                }
              >
                <NavLink to="/Dashboard">Dashboard</NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                onClick={() => handleNavItemClicked("Leads")}
                className={activeItem === "Leads" ? "nav-active" : "in-active"}
              >
                <NavLink to="/Leads">Leads</NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                onClick={() => handleNavItemClicked("Opportunities")}
                className={
                  activeItem === "Opportunities" ? "nav-active" : "in-active"
                }
              >
                <NavLink to="/Opportunities">Opportunities</NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                onClick={() => handleNavItemClicked("Matches")}
                className={
                  activeItem === "Matches" ? "nav-active" : "in-active"
                }
              >
                <NavLink to="/Matches">Matches</NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                onClick={() => handleNavItemClicked("Offers")}
                className={activeItem === "Offers" ? "nav-active" : "in-active"}
              >
                <NavLink to="/Offers">Offers</NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                onClick={() => handleNavItemClicked("Programs")}
                className={
                  activeItem === "Programs" ? "nav-active" : "in-active"
                }
              >
                <NavLink to="/Programs">Programs</NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                onClick={() => handleNavItemClicked("Lenders")}
                className={
                  activeItem === "Lenders" ? "nav-active" : "in-active"
                }
              >
                <NavLink to="/Lenders">Partner Lenders</NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <MDBNavbarBrand href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/128/6522/6522516.png"
              height="30"
              alt=""
              loading="lazy"
            />
          </MDBNavbarBrand>
          <MDBNavbarBrand href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/128/9044/9044601.png"
              height="30"
              alt=""
              loading="lazy"
            />
          </MDBNavbarBrand>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
