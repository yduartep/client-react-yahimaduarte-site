import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import AboutWithData from './About';
import Home from './Home';
import Experiences from './experiences/Experiences';
import Abilities from './skills/Skills';
import ProjectsWithData from './projects/Projects';
import Contact from './Contact';

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuItems: [
                {
                    id: 1,
                    to: '#home',
                    title: 'Home',
                    comp: <Home/>
                }, {
                    id: 2,
                    to: '#about',
                    title: 'About me',
                    comp: <AboutWithData language="EN"/>
                }, {
                    id: 3,
                    to: '#experiences',
                    title: 'Experiences',
                    comp: <Experiences/>
                }, {
                    id: 4,
                    to: '#abilities',
                    title: 'Skills',
                    comp: <Abilities/>
                }, {
                    id: 5,
                    to: '#projects',
                    title: 'Projects',
                    comp: <ProjectsWithData language="EN"/>
                }, {
                    id: 6,
                    to: '#contact',
                    title: 'Contact',
                    comp: <Contact/>
                }
            ]
        }
    }

    selectMenu(e) {
        // active selected menu
        document
            .querySelectorAll(".navbar li")
            .forEach(e => e.classList.remove("active"));
        e
            .currentTarget
            .closest("li")
            .classList
            .add("active");
    }

    render() {
        return (
            <div>
                <Navbar className="navbar  navbar-fixed-top">
                    <Nav>
                        {this.state.menuItems
                            .map((item) => <NavItem key={item.id} href={item.to} onClick={this.selectMenu}>{item.title}</NavItem>)
}
                    </Nav>
                </Navbar>
                {this
                    .state
                    .menuItems
                    .map((item, i) => <div key={item.id} id={item.to.slice(1)}
                        className={i === 0
                        ? 'content-home'
                        : i % 2 === 0
                            ? 'content-even'
                            : 'content-odd'}>
                        {item.comp}
                    </div>)
}
                <footer>
                    <p>Copyright © {new Date().getFullYear()} &nbsp;
                        Yahima Duarte | All Rights Reserved</p>
                </footer>
            </div>
        );
    }
}

export default NavBar;