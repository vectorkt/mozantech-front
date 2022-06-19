import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import PartsPage from '../PartsPage';

/*
//AXIOS MOCK
import mockAxios from "axios"

window.alert = jest.fn()
jest.mock('axios');
mockAxios.get.mockImplementation(
    () => Promise.resolve(
        {
            data: [{ name: "Monitor 4", price: "123.00$", type: "Monitor" }]
        })
);
afterEach(jest.clearAllMocks);
/**/



test(
    'renders PartsPage, checks 404, checks loading',
    async () => {
        const history = createMemoryHistory();

        render(
            <Router location={history.location} navigator={history}>
                <PartsPage />
            </Router>
        )

        const NotFoundElement = screen.getByText(/Part Not found/i);
        expect(NotFoundElement).toBeInTheDocument();

        history.push('http://localhost:3000/parts?name=Monitor%204&type=Monitor&price=123.00$')

        //LOADING

        render(
            <Router location={history.location} navigator={history}>
                <PartsPage />
            </Router>
        )


        const LoadingElement = screen.getByAltText(/Loading/i);
        expect(LoadingElement).toBeInTheDocument();
        expect(LoadingElement).toHaveAttribute('src', "https://i.imgur.com/fmwGYkm.gif")

        //FETCHING ITEM??


        //expect(mockAxios.get).toHaveBeenCalledTimes(1);
        //const rowElement = await waitFor(() => screen.findByText(/Monitor 4/i));


    })