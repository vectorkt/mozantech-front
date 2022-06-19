import { render, screen } from '@testing-library/react';
import ApiTester from '../ApiTester';

import mockAxios from "axios"
jest.mock("axios")
mockAxios.get.mockResolvedValue({ data: { title: "repellat" } })
afterEach(jest.clearAllMocks)

/*
//VARIANT 2
jest.mock("axios",()=>({
    __esModule:true,
    default:{
        get: jest.fn().mockResolvedValue(
            {data: { title: "repellat" }}
        )
    }
}))
/***/

//VARIANT 3
//mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: { title: "repellat" }}));
/* */




test(
    'basic api',
    async () => {
        render(
            <ApiTester />
        )

        const LoadingElement = screen.getByText(/ApiTester/i);
        expect(LoadingElement).toBeInTheDocument();

        
        
        //FAILS FROM HERE
        expect(mockAxios.get).toHaveBeenCalledTimes(1)
        const LoadedElement = await screen.findByText(/repellat/i);
        expect(LoadedElement).toBeInTheDocument();
        /**/
    }

)