import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '../Modal';

const pictureInfo = {
	user: {
		username: 'James',
	},
	description: 'description here',
	created_at: 'date here',
	urls: {
		regular: 'https://i.imgur.com/zoejsZA.jpeg',
	},
};

describe('Modal tests', () => {
	const handleClose = jest.fn();
	it('should render h1 and App component', () => {
		render(
			<Modal
				isOpen='true'
				onRequestClose={handleClose}
				info={pictureInfo}
			/>,
		);
		const name = screen.getByText(/James/i);
		expect(name).toBeInTheDocument();
		const description = screen.getByText(/description here/i);
		expect(description).toBeInTheDocument();
		const created_at = screen.getByText(/date here/i);
		expect(created_at).toBeInTheDocument();

		const element = screen.getAllByTestId('img');

		expect(element[0]).toHaveAttribute(
			'src',
			'https://i.imgur.com/zoejsZA.jpeg',
		);
	});

	it('click closes', () => {
		render(
			<Modal
				isOpen='true'
				onRequestClose={handleClose}
				info={pictureInfo}
			/>,
		);

		const button = screen.getAllByTestId('buttonTest');

		fireEvent.click(button[0]);

		expect(handleClose).toHaveBeenCalled();
	});
});
