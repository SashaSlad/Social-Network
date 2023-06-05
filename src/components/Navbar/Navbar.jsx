import React from "react";
import { NavLink } from "react-router-dom";
import n from './Navbar.module.css';

const setActive = ({ isActive }) => isActive ? `${n.activeclass}` : '';



const Navbar = () => {
	return (

		<nav className={n.nav}>
			<div className={n.item}>
				<NavLink to='/profile' className={setActive}>Profile</NavLink>
			</div>
			<div className={n.item}>
				<NavLink to='/dialogs' className={setActive}>Messages</NavLink>
			</div>
			<div className={n.item}>
				<NavLink to='/users' className={setActive}>Users</NavLink>
			</div>
			<div className={n.item}>
				<NavLink to='/news' className={setActive}>News</NavLink>
			</div>
			{/* <Link to='/profile'>Profile</Link>
				<Link to='/gialogs'>Messages</Link> */}

			{/* <div><a href='#'>Profile</a></div>
				<div><a href='#'>Messages</a></div>
				<div><a href='#'>News</a></div>
				<div><a href='#'>Music</a></div>
				<div><a href='#'>Settings</a></div> */}
		</nav>

	)
}

export default Navbar;