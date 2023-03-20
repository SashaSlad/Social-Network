import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
	return (
		<div className="app-wrapper">
			<HeaderContainer />
			<Navbar />
			<div className='app-wrapper-content'>
				<Routes>
					<Route exact path='/profile/:userId' element={<ProfileContainer />} />
					<Route exact path='*' element={<ProfileContainer />} />
					<Route exact path='/dialogs' element={<DialogsContainer />} />
					<Route exact path='/users' element={<UsersContainer />} />
					<Route exact path='/login' element={<Login />} />
				</Routes>
			</div>
		</div>
	)
}




export default App;
