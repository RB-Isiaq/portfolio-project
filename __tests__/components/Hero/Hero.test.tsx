import { fireEvent, render, screen } from '@testing-library/react';

import Hero from '@/components/Hero/Hero';
import { TestId } from '@/components/Hero/constants';

describe('Hero component', () => {
  it('shows the Hero section in the document', () => {
    render(<Hero />);
    const HeroSection = screen.getByTestId(TestId.HERO_ID);
    expect(HeroSection).toBeInTheDocument();
  });

  it('shows a name', () => {
    render(<Hero />);
    const name = screen.getByTestId(TestId.HERO_NAME);
    expect(name).toBeVisible();
  });

  it('has an hero image', () => {
    render(<Hero />);
    const image = screen.getByTestId(TestId.HERO_IMG);
    expect(image).toBeVisible();
  });

  it('downloads the resume when clicked', () => {
    render(<Hero />);
    const anchorTag = screen.getByTestId(TestId.RESUME);

    const mockDownload = jest.fn();
    anchorTag.onclick = mockDownload;

    fireEvent.click(anchorTag);

    expect(mockDownload).toHaveBeenCalled();
  });
});
