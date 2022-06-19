import { fireEvent, render, screen } from '@testing-library/react';
import TypeBtn from '../TypeBtn';



test(
    'renders and clicks TypeBtn',
    async () => {

        const MockFunction = jest.fn();

        render(<TypeBtn btnText={"All"} btnHandler={MockFunction} />);

        const TypeBtnElement = screen.getByText(/All/i);
        expect(TypeBtnElement).toBeInTheDocument();

        fireEvent.click(TypeBtnElement);
        expect(MockFunction).toBeCalled();

    })