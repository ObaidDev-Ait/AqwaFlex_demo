import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutPage from './page';

describe('about page', () => {
  it('renders a single page headline', () => {
    render(<AboutPage />);
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  });

  it('describes the manufacturing story in several sections', () => {
    render(<AboutPage />);
    expect(screen.getAllByRole('heading', { level: 2 }).length).toBeGreaterThan(1);
  });

  it('gives every illustration an alt text', () => {
    render(<AboutPage />);
    for (const image of screen.queryAllByRole('img')) {
      expect(image.getAttribute('alt')).toBeTruthy();
    }
  });
});
