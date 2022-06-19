import { fireEvent, render, screen } from '@testing-library/react';
import Loading from '../Loading';


test(
    'renders Loading Screen',
    async () => {

        render(<Loading/>);

        const LoadingElement = screen.getByAltText(/Loading/i);
        expect(LoadingElement).toBeInTheDocument();
        expect(LoadingElement).toHaveAttribute('src', "https://i.imgur.com/fmwGYkm.gif")

    })