import React from "react";
import { NavLink } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import n from './Navbar.module.css';

const setActive = ({ isActive }) => isActive ? `${n.activeclass}` : '';



const Navbar = () => {
	return (

		<nav className={n.nav}>
			<div className={n.item}>
				<NavLink to='/profile' className={setActive}>Profile</NavLink>
			</div>
			{/* <div className={n.item}>
				<NavLink to='/dialogs' className={setActive}>Messages</NavLink>
			</div> */}
			<div className={n.item}>
				<NavLink to='/chat' className={setActive}>Chat</NavLink>
			</div>
			<div className={n.item}>
				<NavLink to='/friends' className={setActive}>My friends</NavLink>
			</div>
			<div className={n.item}>
				<NavLink to='/users' className={setActive}>Users</NavLink>
			</div>
			<div className={n.item}>
				<NavLink to='/news' className={setActive}>News</NavLink>
			</div>

			<div className={n.item} >
				<BurgerMenu />
			</div>
		</nav>

	)
}

export default Navbar;