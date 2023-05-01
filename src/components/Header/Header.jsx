import React from 'react';
import { NavLink } from 'react-router-dom';
import h from './Header.module.css';

const Header = (props) => {
	return (
		<header className={h.header}>
			<img alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Qz3nO_Sojnkbp0PVDRmmPVtwMtm7l5usww&usqp=CAU' />
			<div className={h.login_block}>
				{props.isAuth ? <div> {props.login} - <button onClick={props.logout}>Log Out</button></div> : <NavLink to={'/login'}>Login</NavLink >}
			</div>
		</header >
	)
};

export default Header;