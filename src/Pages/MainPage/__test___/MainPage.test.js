import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import MainPage from '../MainPage';

//AXIOS MOCK
import mockAxios from "axios"

/*
window.alert = jest.fn()
jest.mock('axios');
mockAxios.get.mockImplementation(
  (url) => Promise.resolve(
    () => {
      if (url === "http://localhost:8081/store/part-types") {
        return { data: ["Mouse", "Mousepad", "Keyboard", "Monitor"] }
      }
      else if (url === "http://localhost:8081/store/parts") {
        return { data: [{ name: "Monitor 4", price: "123.00$", type: "Monitor" }] }
      }
      else if (url === "http://localhost:8081/store/parts?name=Monitor 4&type=Monitor&price=123.00$") {
        return { data: [{ name: "Monitor 4", price: "123.00$", type: "Monitor" }] }
      }
    }
  ));
afterEach(jest.clearAllMocks);
/**/

test(
  'renders MainPage',
  async () => {
    const history = createMemoryHistory();


    render(
      <Router location={history.location} navigator={history}>
        <MainPage />
      </Router>
    )

    //LOADING
    const LoadingElement = screen.getByAltText(/Loading/i);
    expect(LoadingElement).toBeInTheDocument();
    expect(LoadingElement).toHaveAttribute('src', "https://i.imgur.com/fmwGYkm.gif")

 
    //const rowElement = await screen.findByText(/Monitor 4/i);

    //waitFor(() => screen.getByText(/Monitor 4/i))
    //expect(screen.getByText(/Monitor 4/i)).toBeInTheDocument();


  })