import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import PartRow from '../PartRow';

test(
    'renders PartRow',
    async () => {
        
        const history = createMemoryHistory();

        const part = { name: "Monitor 4", price: "123.00$", type: "Monitor" };
        render(
            <Router location={history.location} navigator={history}>
                <PartRow part={part} />
            </Router>
            )
            
        const rowElement = await screen.getByText(/Monitor 4/i);
        expect(rowElement).toBeInTheDocument();
    }
)