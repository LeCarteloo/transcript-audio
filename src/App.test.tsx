import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('Should render "Hello World"', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Hello World'
    );
  });
});
