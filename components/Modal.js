import React from 'react';
import { Modal } from 'react-responsive-modal';
import Image from 'next/image';

const ModalWindow = ({ isOpen, onRequestClose, info }) => {
	return (
		<Modal
			open={isOpen}
			onClose={onRequestClose}
			showCloseIcon={false}
			center>
			<div className='ui-box' onClick={onRequestClose}>
				<div className='box' onClick={e => e.stopPropagation()}>
					<span onClick={onRequestClose} className='close'>
						&times;
					</span>
					<div className='detailBox'>
						<p className='modalDetail'>
							Username: {info.user.username}
						</p>
						<div className='lowerBox'>
							<p className='modalDetail'>
								Description: {info.description ?? 'N/A'}
							</p>
							<p className='modalDetail'>
								Date: {info.created_at ?? 'N/A'}
							</p>
						</div>
					</div>

					<div className='modalPictureFrame'>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src={info.urls.regular}
							alt={info.description ?? 'picture'}
							layout='fill'
						/>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default ModalWindow;
