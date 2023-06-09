import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Preloader from './components/Common/Preloader/Preloader';
import withRouter from './components/Common/withRouter/withRouter';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login.tsx';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from './components/Users/UsersContainer.tsx';
import { initializeApp } from "./Redux/app-reduser.ts";
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/redux-store.ts';
import NewsList from './components/News/NewsList';
import Registration from './components/Registration/Registration';
import Friends from './components/Friends/Friends';
import ChatPage from './pages/Chat/ChatPage.tsx';
import SportList from './components/News/SportNews/SportList';
import UkraineList from './components/News/UkraineNewses/UkraineList';
import USANewsList from './components/News/USANews/USANewsList';
import AnimalsNewsList from './components/News/AnimalsNews/AnimalsNewsList';
import ScienceNewsList from './components/News/ScienceNews/ScienceNewsList';
// import { withSuspense } from './hoc/withSuspens';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
// const CahtPage = React.lazy(() => import('./pages/Chat/ChatPage.tsx'));


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
						<Route exact path='/chat' element={<ChatPage />} />
						<Route exact path='/users' element={<UsersContainer />} />
						<Route exact path='/login' element={<Login />} />
						<Route exact path='/news' element={<NewsList />} />
						<Route exact path='/registration' element={<Registration />} />
						<Route exact path='/friends' element={<Friends />} />

						<Route exact path='/news/sport' element={<SportList />} />
						<Route exact path='/news/ukraine' element={<UkraineList />} />
						<Route exact path='/news/usa' element={<USANewsList />} />
						<Route exact path='/news/animals' element={<AnimalsNewsList />} />
						<Route exact path='/news/science' element={<ScienceNewsList />} />






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
		<HashRouter>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</HashRouter>
	)
}

export default SocNetworkApp;
