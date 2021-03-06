import React from 'react';
import './menu-row.scss';
import { NavLink } from 'react-router-dom';

const MenuRow = ({ title, links }) => {
    return (
        <ul className="menu-row" >
            <li className="menu-title">
                {title}
            </li>
            {
                links.map(({ route, label },i) => {
                    return (
                        <li key={i} >
                            <NavLink to={route} className="navlink" >
                                {label}
                            </NavLink>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default MenuRow