import Meta from './Meta';
import NavBar from './NavBar';

const Layout = ({ children }) => {
	return (
		<>
			<Meta />
			<header>
				<NavBar />
			</header>
			{children}
		</>
	);
};

export default Layout;
