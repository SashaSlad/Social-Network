import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Preloader from './components/Common/Preloader/Preloader';
import withRouter from './components/Common/withRouter/withRouter';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from './components/Users/UsersContainer';
import { initializeApp } from "./Redux/app-reduser";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/redux-store'
// import { withSuspense } from './hoc/withSuspens';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));



class App extends Component {

	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}
		return (
			<div className="app-wrapper" >
				<HeaderContainer />
				<Navbar />
				<div className='app-wrapper-content'>
					<Routes>
						<Route exact path='/profile/:userId' element={<Suspense fallback={<div>Loading...</div>} ><ProfileContainer /></Suspense>} />
						<Route exact path='*' element={<Suspense fallback={<div>Loading...</div>} ><ProfileContainer /></Suspense>} />
						<Route exact path='/dialogs' element={<Suspense fallback={<div>Loading...</div>} > <DialogsContainer /> </Suspense>} />
						<Route exact path='/users' element={<UsersContainer />} />
						<Route exact path='/login' element={<Login />} />
					</Routes>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

let AppContainer = compose(
	withRouter,
	connect(mapStateToProps, { initializeApp }))(App);

const SocNetworkApp = (props) => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</BrowserRouter>
	)
}

export default SocNetworkApp;
