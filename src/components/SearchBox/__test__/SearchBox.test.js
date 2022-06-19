import { fireEvent, render, screen } from '@testing-library/react';
import SearchBox from '../SearchBox';


test(
    'renders SearchBox and updates on change',
    async () => {

        const setSearchMockFunction = jest.fn((value) => {})

        render(<SearchBox searchHandler={setSearchMockFunction}/>);

        const SearchBoxElement = screen.getByPlaceholderText('Search...')
        expect(SearchBoxElement).toBeInTheDocument();

        fireEvent.change(SearchBoxElement, { target: { value: 'test' } })
        expect(SearchBoxElement.value).toBe('test')

    })