import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('links the logo back to the homepage', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: 'AQUAFLEX' })).toHaveAttribute('href', '/');
  });

  it('renders the collection and company sections', () => {
    render(<Footer />);
    expect(screen.getByRole('heading', { name: 'Collections' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Orthopédique' })).toHaveAttribute('href', '/products');
    expect(screen.getByRole('link', { name: 'Notre Histoire' })).toHaveAttribute('href', '/about');
  });

  it('exposes a mailto contact address', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: 'contact@aquaflex.ma' })).toHaveAttribute(
      'href',
      'mailto:contact@aquaflex.ma'
    );
  });

  it('links to the legal pages', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: 'Mentions Légales' })).toHaveAttribute(
      'href',
      '/privacy'
    );
    expect(screen.getByRole('link', { name: 'CGV' })).toHaveAttribute('href', '/terms');
  });
});
