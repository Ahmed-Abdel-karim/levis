import React from 'react';
import { ic_close } from 'react-icons-kit/md/ic_close';
import { ic_menu } from 'react-icons-kit/md/ic_menu';

import BaseIcon from '../baseIcon/BaseIcon';
import { NavLink } from 'react-router-dom';
import { ic_account_circle } from 'react-icons-kit/md/ic_account_circle';
import { ic_keyboard_arrow_left } from 'react-icons-kit/md/ic_keyboard_arrow_left';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';

import './nav-menu.scss';
import SideMenuItem from '../sideMenuItem/SideMenuItem';

class NavMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            sideLinks: [],
            sideOpen: false,
            header: ''
        }
        this.showSideMenu = this.showSideMenu.bind(this);
        this.handleCloseMenu = this.handleCloseMenu.bind(this);
        this.handleOpenMenu = this.handleOpenMenu.bind(this);
        this.hideSideMenu = this.hideSideMenu.bind(this);
    }

    handleCloseMenu() {
        this.setState({ open: false });
        this.hideSideMenu();
    }

    handleOpenMenu() {
        this.setState({ open: true })
    }

    showSideMenu(header, links) {
        this.setState({ sideLinks: links, header, sideOpen: true })
    }

    hideSideMenu() {
        this.setState({ sideLinks: [], header: "", sideOpen: false })
    }

    render() {
        const { items, className, signIn = "/signin" } = this.props;
        const { handleCloseMenu, handleOpenMenu, showSideMenu, hideSideMenu, state: { open, sideLinks, header, sideOpen } } = this;

        return (
            <div className={`${className} nav-menu`}>
                <button
                    className="btn btn-open"
                    onClick={handleOpenMenu}
                >
                    <BaseIcon color="primary-light" icon={ic_menu} size="md" />
                </button>
                <div
                    className={
                        `menu-vertical ${open && "show"} ${sideOpen && "show-side"}`
                    }
                >
                    <div className="overlay" onClick={handleCloseMenu} />
                    <div className="menu-body" >
                        <nav className='main-menu'>
                            <ul className="menus-list" >
                                <li className="button-item" >
                                    <button
                                        className="btn btn-close"
                                        onClick={handleCloseMenu}
                                    >
                                        <BaseIcon
                                            color="secondary"
                                            className=""
                                            icon={ic_close}
                                            size="sm"
                                        />
                                    </button>
                                </li>
                                <li className="sign-in" onClick={handleCloseMenu} >
                                    <NavLink to={signIn} >
                                        <BaseIcon
                                            size="md"
                                            color="secondary"
                                            icon={ic_account_circle}
                                        />
                                        <span>Sign in</span>
                                    </NavLink>
                                </li>
                                {
                                    items.map(({ title, route, color, items }, i) => (
                                        <div
                                            key={i}
                                            className="link-item"
                                            style={{ color: color || "var(--primary)" }}
                                            to={route}
                                            onClick={() => showSideMenu(title, items)}
                                        >
                                            <span>
                                                {title}
                                            </span>
                                            <BaseIcon
                                                size="md"
                                                color="primary-light"
                                                icon={ic_keyboard_arrow_right}
                                            />
                                        </div>))
                                }
                            </ul>
                        </nav>
                        <nav className="side-menu" >
                            <ul className="menus-list" >
                                <li className="side-menu-header" >
                                    <BaseIcon
                                        color="secondary"
                                        className=""
                                        icon={ic_keyboard_arrow_left}
                                        size="sm"
                                        onClick={hideSideMenu}
                                    />
                                    <span>
                                        {header}
                                    </span>
                                    <BaseIcon
                                        color="secondary"
                                        className=""
                                        icon={ic_close}
                                        size="sm"
                                        onClick={handleCloseMenu}
                                    />
                                </li>
                                {
                                    sideLinks.map(({ links, title }, i) => {
                                        return <SideMenuItem
                                            key={i}
                                            links={links}
                                            header={title}
                                        />
                                    })
                                }
                            </ul>
                        </nav>
                    </div>
                </div>
            </div >
        )
    }

}

export default NavMenu