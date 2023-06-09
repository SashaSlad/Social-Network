import React, { useState } from "react";
import n from '../Navbar/Navbar.module.css';

import s from "./burgerMenu.module.css";
import { NavLink } from "react-router-dom";


const BurgerMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const setActive = ({ isActive }) => isActive ? `${s.activeclass}` : '';

	return (
		<div className={s.burgerMenu}>
			<button className={s.menuButton} onClick={toggleMenu}>
				News menu:
			</button>
			{isMenuOpen && (
				<div className={s.wrapper}>
					<div className={s.menuItems}>
						<div className={s.item}>
							<NavLink to='/news/sport' className={setActive}>Sport</NavLink>
						</div>
						<div className={s.item}>
							<NavLink to='/news/ukraine' className={setActive}>Ukraine</NavLink>
						</div>
						<div className={s.item}>
							<NavLink to='/news/usa' className={setActive}>USA</NavLink>
						</div>
						<div className={s.item}>
							<NavLink to='/news/animals' className={setActive}>Animals</NavLink>
						</div>
						<div className={s.item}>
							<NavLink to='/news/science' className={setActive}>Science</NavLink>
						</div>
						{/* Add more menu items here */}
					</div>
				</div>
			)
			}
		</div >
	);
};

export default BurgerMenu;

