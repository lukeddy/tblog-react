import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './MyNav.css';

export default class MyNav extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                       <Link to="/"><span className="logo">&nbsp;</span></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                            首页
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} href="/news" to="/news">
                            新闻
                        </NavItem>
                        <NavItem eventKey={3} componentClass={Link} href="/about" to="/about">
                            关于
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}