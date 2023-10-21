import { fireEvent, render, screen } from '@testing-library/react';

import Contact from '@/components/Contact/Contact';
import { TestId } from '@/components/Contact/constants';

describe('Contact component', () => {
  it('shows the Contact section in the document', () => {
    render(<Contact />);
    const ContactSection = screen.getByTestId(TestId.CONTACT_ID);
    expect(ContactSection).toBeInTheDocument();
  });

  it('has a form', () => {
    render(<Contact />);
    const form = screen.getByTestId(TestId.FORM);
    expect(form).toBeInTheDocument();
  });

  it('has a clickable button', () => {
    render(<Contact />);
    const formBtn = screen.getByTestId(TestId.BTN);

    const mockDownload = jest.fn();
    formBtn.onclick = mockDownload;

    fireEvent.click(formBtn);

    expect(mockDownload).toHaveBeenCalled();
  });
});
