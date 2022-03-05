import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Photos from '../Photos';
import '@testing-library/jest-dom/extend-expect';
import Modal from '../Modal';

const results = [
	{
		id: 1,
		urls: {
			regular: 'https://i.imgur.com/JKGARhZ.jpeg',
		},
		description: 'picture 1',
		user: {
			username: 'James',
		},
	},
	{
		id: 2,
		urls: {
			regular: 'https://i.imgur.com/zoejsZA.jpeg',
		},
		description: 'picture 2',
		user: {
			username: 'James',
		},
		created_at: 'date here',
	},
];

describe('Photos component test', () => {
	it('renders two pictures', async () => {
		render(<Photos pics={results} />);
		const picFrame = await screen.findAllByTestId('picFrameid');

		expect(picFrame.length).toBe(2);

		const imageElement1 = screen.getByAltText('picture 1');
		const imageElement2 = screen.getByAltText('picture 2');
		expect(imageElement1).toHaveAttribute(
			'src',
			'https://i.imgur.com/JKGARhZ.jpeg',
		);
		expect(imageElement2).toHaveAttribute(
			'src',
			'https://i.imgur.com/zoejsZA.jpeg',
		);
	});

	it('click on the picture and it opens a modal', async () => {
		render(<Photos pics={results} />);

		const button = await screen.findAllByTestId('picFrameid');

		fireEvent.click(button[0]);

		const modalText = screen.getByText('Username: James');
		expect(modalText).toBeInTheDocument();
	});
});
