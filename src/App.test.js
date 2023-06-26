import { render, screen } from '@testing-library/react';
import SocNetworkApp from './App';
// import App from './App';

test('renders learn react link', () => {
	render(<SocNetworkApp />);
	// const linkElement = screen.getByText(/learn react/i);
	// expect(linkElement).toBeInTheDocument();
});
