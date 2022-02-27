import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
	return (
		<Head>
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1'
			/>
			<meta name='keywords' content={keywords} />
			<meta name='description' content={description} />
			<meta charSet='utf-8' />
			<meta content='IE=edge' httpEquiv='X-UA-Compatible' />
			<title>{title}</title>
			<link rel='icon' href='/favicon.ico' />
		</Head>
	);
};

Meta.defaultProps = {
	title: 'Tech Guilds',
	keywords: 'web developlenmt, programming, tech',
	description: 'Pictures!',
};

export default Meta;
