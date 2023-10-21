import { fireEvent, render, screen } from '@testing-library/react';

import Navbar from '@/components/Navbar/Navbar';
import { TestId } from '@/components/Navbar/constants';

describe('Navbar component', () => {
  it('shows the Navbar element in the document', () => {
    render(<Navbar />);
    const NavbarElement = screen.getByTestId(TestId.NAV_ID);
    expect(NavbarElement).toBeInTheDocument();
  });

  it('shows a name', () => {
    render(<Navbar />);
    const name = screen.getByTestId(TestId.NAME);
    expect(name).toBeVisible();
  });

  it('has clickable links', () => {
    render(<Navbar />);
    const anchorTags = screen.getAllByTestId(TestId.NAV_LINK);

    const mockDownload = jest.fn();
    anchorTags.forEach((link) => {
      link.onclick = mockDownload;
      fireEvent.click(link);
    });

    expect(mockDownload).toHaveBeenCalled();
  });
});
