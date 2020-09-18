import React from 'react';

import {
  Col, Container, Nav, NavItem, NavLink, Row,
} from 'reactstrap';
import { ReactComponent as Netlify } from '../../assets/img/brand/netlify.svg';

const GITHUB_URL = process.env.REACT_APP_GITHUB_AUTHOR_URL;

function Footer() {
  return (
    <>
      <footer className="footer">
        <Container>
          <hr />
          <Row className="align-items-center justify-content-md-between">
            <Col md="6">
              <div className="container">
                <div className="copyright">
                  ©
                  {' '}
                  {new Date().getFullYear()}
                  {' '}
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    alexbaeza
                  </a>
                </div>
                <div className="powered">
                  Powered by
                  {' '}
                  <Netlify />
                </div>
              </div>
            </Col>
            <Col md="6">
              <Nav className="nav-footer justify-content-end">
                <NavItem>
                  <NavLink href="/" target="_blank">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
