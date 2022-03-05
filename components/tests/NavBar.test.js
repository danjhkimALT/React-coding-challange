import { render, screen } from '@testing-library/react';
import NavBar from '../NavBar';

it('shows navbar and button', () => {
	render(<NavBar />);
	const Home = screen.getByText(/Home/i);
	expect(Home).toBeInTheDocument();
});
