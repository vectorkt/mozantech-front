import { fireEvent, render, screen } from '@testing-library/react';
import SortBtn from '../SortBtn';



test(
    'renders and clicks SortBtn',
    async () => {

        const MockFunction = jest.fn()

        render(<SortBtn sortOrder={'asc'} btnHandler={MockFunction} />);

        const SortBtnElement = screen.getByText(/Price Ascending/i);
        expect(SortBtnElement).toBeInTheDocument();

        fireEvent.click(SortBtnElement);
        expect(MockFunction).toBeCalled();

    })