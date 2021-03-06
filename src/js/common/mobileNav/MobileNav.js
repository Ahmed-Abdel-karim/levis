import React from 'react';

import BaseIcon from '../baseIcon/BaseIcon';
import { shoppingBag } from 'react-icons-kit/fa/shoppingBag'
import InputWithIcon from '../inputWithIcon/InputWithIcon';

import NavMenu from '../navMenu/NavMenu';
import './mobile-nav.scss';
import { NavLink } from 'react-router-dom';

class MobileNav extends React.Component {

    render() {
        const { logo, menus,extra } = this.props;
        return (
            <div className={`${this.props.className} fixed-top`}>
                <div className="mobile-nav flex-between">
                    <NavMenu
                        items={menus}
                        extra={extra}
                    />
                    <NavLink to="/" className="logo-container">
                        <img className="logo" width="100%" src={logo} alt="logo" />
                    </NavLink>
                    <div className="extra">
                        <InputWithIcon />
                        <BaseIcon
                            className="shopping-bag"
                            color="grey"
                            icon={shoppingBag}
                            size="md"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default MobileNav