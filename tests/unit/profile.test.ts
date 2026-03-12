import { render, screen } from '@testing-library/react';
import Home from '../src/pages/index';

describe('Profile Page', () => {
  it('renders LinkedIn profile photo', () => {
    render(<Home />);
    const img = screen.getByAltText('Roey Zalta LinkedIn Profile Photo');
    expect(img).toBeInTheDocument();
  });

  it('renders LinkedIn link', () => {
    render(<Home />);
    const link = screen.getByText('View LinkedIn Profile');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://linkedin.com/in/roey-zalta');
  });
});
