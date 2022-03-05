import React from 'react';
import { render, screen } from '@testing-library/react';
import Photos from '../Photos';
import '@testing-library/jest-dom/extend-expect';

const results = [
	{
		id: 1,
		urls: {
			regular: 'https://i.imgur.com/JKGARhZ.jpeg',
		},
		description: 'picture 1',
	},
	{
		id: 2,
		urls: {
			regular: 'https://i.imgur.com/zoejsZA.jpeg',
			description: 'picture 2',
		},
	},
];

it('renders two pictures', async () => {
	render(<Photos pics={results} />);
	setTimeout(async () => {
		const picFrame = await screen.findAllByTestId('picFrameid');
		expect(picFrame.length).toBe(2);
	}, 3000);
});
