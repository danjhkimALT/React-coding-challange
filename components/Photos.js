/* eslint-disable @next/next/no-img-element */
import Masonry from 'react-masonry-css';
import ModalWindow from './Modal';
import { useState } from 'react';

const Photos = ({ pics }) => {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [info, setInfo] = useState();

	const openModal = picture => {
		setInfo(picture);
		setIsOpen(true);
	};

	function closeModal() {
		setIsOpen(false);
	}

	const breakpointColumnsObj = {
		default: 3,
		1000: 2,
		600: 1,
	};

	const renderList = () => {
		if (pics) {
			return pics.map(picture => {
				return (
					<div
						key={picture.id}
						className='picFrame'
						onClick={() => openModal(picture)}>
						<img
							className='image'
							src={picture.urls.regular}
							alt={picture.description || 'picture'}
							layout='fill'
						/>
					</div>
				);
			});
		} else {
			<div>Loading..</div>;
		}
	};

	if (modalIsOpen && info) {
		return (
			<ModalWindow
				info={info}
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
			/>
		);
	}

	return (
		<>
			<Masonry breakpointCols={breakpointColumnsObj} className='Srow'>
				{renderList()}
			</Masonry>
		</>
	);
};

export default Photos;
