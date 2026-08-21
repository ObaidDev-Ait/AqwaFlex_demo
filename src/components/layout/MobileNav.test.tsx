import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import MobileNav from './MobileNav';

const usePathname = vi.fn(() => '/');

vi.mock('next/navigation', () => ({
  usePathname: () => usePathname(),
}));

describe('MobileNav', () => {
  beforeEach(() => {
    usePathname.mockReturnValue('/');
  });

  it('renders one link per section', () => {
    render(<MobileNav />);
    const links = screen.getAllByRole('link');
    expect(links.map((link) => link.getAttribute('href'))).toEqual([
      '/',
      '/products',
      '/about',
      '/contact',
    ]);
  });

  it('highlights the link matching the current route', () => {
    usePathname.mockReturnValue('/products');
    render(<MobileNav />);
    const active = screen.getAllByRole('link').find((l) => l.getAttribute('href') === '/products');
    expect(active).toHaveClass('scale-110');
  });

  it('does not highlight the other links', () => {
    usePathname.mockReturnValue('/products');
    render(<MobileNav />);
    const inactive = screen.getAllByRole('link').filter((l) => l.getAttribute('href') !== '/products');
    for (const link of inactive) {
      expect(link).not.toHaveClass('scale-110');
    }
  });

  it('highlights nothing on an unknown route', () => {
    usePathname.mockReturnValue('/blog');
    render(<MobileNav />);
    for (const link of screen.getAllByRole('link')) {
      expect(link).not.toHaveClass('scale-110');
    }
  });

  it('is hidden on desktop viewports', () => {
    const { container } = render(<MobileNav />);
    expect(container.firstChild).toHaveClass('md:hidden');
  });
});
