import Home from '@/app/page';
import { render, screen } from '@testing-library/react';

describe('Home page', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('shows the Home page in the document', () => {
    const homePage = screen.getByTestId('home_page');
    expect(homePage).toBeInTheDocument();
  });
});
