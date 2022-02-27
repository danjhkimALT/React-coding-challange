import { unsplash } from '../api';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import InfiniteScroll from 'react-infinite-scroll-component';
const Photos = dynamic(() => import('./photos'));

const App = () => {
	const [page, setPage] = useState(1);
	const [pics, setPics] = useState([]);
	const [isLoading, setLoading] = useState(true);

	const fetchPhotos = async pager => {
		try {
			await unsplash.photos
				.list({
					page: pager,
					per_page: 11,
				})
				.then(result => {
					pics
						? setPics([...pics, ...result.response.results])
						: setPics(result.response.results);
					setPage(pager);
				});
		} catch (err) {
			console.log('Unable to retrieve photos. Reason: ' + err);
		}
	};

	useEffect(() => {
		fetchPhotos(1);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='app'>
			<div className='wrapper'>
				<div className='gallery'>
					<InfiniteScroll
						dataLength={pics.length}
						next={() => fetchPhotos(page + 1)}
						hasMore={isLoading}>
						<Photos pics={pics} />
					</InfiniteScroll>
				</div>
			</div>
		</div>
	);
};

export default App;
