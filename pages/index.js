import Head from 'next/head';
import App from '../components/App';

function Homepage() {
	return (
		<>
			<Head>
				<title>PICTURE APP</title>
				<meta
					name='FRONT PAGE OF PICTURE APP'
					value='This is my picture'
				/>
			</Head>
			<main>
				<h1 className='title'>Pictures Scroller</h1>
				<App />
			</main>
		</>
	);
}

export default Homepage;
