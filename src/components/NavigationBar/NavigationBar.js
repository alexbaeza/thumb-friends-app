import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
} from 'reactstrap';

const GITHUB_PROJECT_URL = process.env.REACT_APP_GITHUB_PROJECT_URL;

function NavigationBar() {
  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand className="mr-lg-5 nav-header" to="/" tag={Link}>
              <i className="fa fa-cloud" aria-hidden="true" />
              <h1>thumb friends.</h1>
            </NavbarBrand>
            <Nav className="navbar-nav-hover align-items-lg-center" navbar>
              <NavItem className="d-none d-sm-block ml-lg-4">
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href={GITHUB_PROJECT_URL}
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-github mr-2" />
                  </span>
                  <span className="nav-link-inner--text ml-1">
                    View on GitHub
                  </span>
                </Button>
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default NavigationBar;
