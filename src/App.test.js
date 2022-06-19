import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

test('renders App', () => {

  const history = createMemoryHistory();

  
  render(
    <Router location={history.location} navigator={history}>
      <App />
    </Router>
  );
  

});
