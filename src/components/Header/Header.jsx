import React from 'react';
import style from './Header.module.css';
import logo from './../../img/logo.png'
import {NavLink} from 'react-router-dom';

const Header = () => {
	return (
		<header className={style.header}>
			<div className={style.header__logo}>
				<NavLink to='/profile'>
					<img src={logo} alt="logo" />
				</NavLink>
			</div>
			<div className={style.header__block}>
				<ul className={style.header__list}>
					<li className={style.header__item}>
						<NavLink to='/profile' className={style.header__link} activeClassName={style.active}>
							Profile
						</NavLink>
					</li>
					<li className={style.header__item}>
						<NavLink to='/messages' className={style.header__link} activeClassName={style.active}>
							Messages
						</NavLink>
					</li>
				</ul>
			</div>
		</header>
	)
}

export default Header;