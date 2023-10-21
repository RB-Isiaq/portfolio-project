import { render, screen } from '@testing-library/react';

import About from '@/components/About/About';
import { TestId } from '@/components/About/constants';

describe('About component', () => {
  beforeEach(() => {
    render(<About />);
  });

  it('shows the About section in the document', () => {
    const aboutSection = screen.getByTestId(TestId.ABOUT_ID);
    expect(aboutSection).toBeInTheDocument();
  });

  it('has a descriptive info', () => {
    const description = screen.getByTestId(TestId.ABOUT_DESC);
    expect(description).toBeInTheDocument();
  });

  it('shows all my technologies', () => {
    const toolsContainer = screen.getByTestId(TestId.TOOLS);
    const tool = screen.getAllByTestId(TestId.TOOL);
    expect(toolsContainer).toBeInTheDocument();
  });
});
