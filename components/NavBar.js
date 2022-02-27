import Link from 'next/link';

const NavBar = () => {
	return (
		<div className='header'>
			<nav>
				<Link href='/'>
					<a>Home</a>
				</Link>
			</nav>
		</div>
	);
};

export default NavBar;
