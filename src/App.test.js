import { render, screen } from '@testing-library/react';
import App from './App';
import Projects from './components/project/Projects';

test('renders the portfolio introduction', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /building digital tools/i })).toBeInTheDocument();
});

test('renders Projects archive without crashing when a project has no github links', () => {
  expect(() => render(<Projects />)).not.toThrow();
});
