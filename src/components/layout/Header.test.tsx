import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';

vi.mock('@/components/theme/ThemeToggle', () => ({
  ThemeToggle: () => <div data-testid="theme-toggle" />,
}));

vi.mock('./MobileMenu', () => ({
  default: () => <div data-testid="mobile-menu" />,
}));

describe('Header', () => {
  it('links the logo back to the homepage', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: /AQUAFLEX/ })).toHaveAttribute('href', '/');
  });

  it('renders the catalogue navigation and the quote call to action', () => {
    render(<Header />);
    expect(screen.getAllByRole('link', { name: 'MATELAS' })).toHaveLength(1);
    expect(screen.getByRole('link', { name: 'À PROPOS' })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('link', { name: 'DEVIS' })).toHaveAttribute('href', '/contact');
  });

  it('mounts the theme toggle and the mobile menu', () => {
    render(<Header />);
    expect(screen.getByTestId('theme-toggle')).toBeInTheDocument();
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument();
  });
});
