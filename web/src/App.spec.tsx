import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('Accordion test', () => {
  it('Should show title', () => {
    render(<App name='Testing' />);

    expect(screen.getByText(/Testing/i)).toBeDefined();
  });
});
