import { render, screen } from '@testing-library/react';

import About from '@/components/About/About';
import { TestId } from '@/components/About/constants';

describe('About component', () => {
  it('shows the About section in the document', () => {
    render(<About />);
    const aboutSection = screen.getByTestId(TestId.ABOUT_ID);
    expect(aboutSection).toBeInTheDocument();
  });

  it('has a descriptive info', () => {
    render(<About />);
    const description = screen.getByTestId(TestId.ABOUT_DESC);
    expect(description).toBeInTheDocument();
  });

  it('shows all my technologies', () => {
    render(<About />);
    const toolsContainer = screen.getByTestId(TestId.TOOLS);
    expect(toolsContainer).toBeInTheDocument();
  });
});
