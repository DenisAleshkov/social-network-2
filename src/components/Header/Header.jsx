import React from 'react';
import './Header.css';
import logo from './../../img/logo.png'
import {NavLink} from 'react-router-dom';

const Header = () => {
	return (
		<header className="header">
			<div className="header-logo">
				<NavLink to='/profile'>
					<img src={logo} alt="logo" />
				</NavLink>
			</div>
			<div className="header-block">
				<ul className="header-list">
					<li className="header-item">
						<NavLink to='/profile' className="header-link" activeClassName="active">
							Profile
						</NavLink>
					</li>
					<li className="header-item">
						<NavLink to='/messages' className="header-link" activeClassName="active">
							Messages
						</NavLink>
					</li>
				</ul>
			</div>
		</header>
	)
}

export default Header;