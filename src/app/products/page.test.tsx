import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Products from './page';

describe('products listing page', () => {
  it('renders a card per product, each linking to its detail page', () => {
    render(<Products />);
    const productLinks = screen
      .getAllByRole('link')
      .filter((link) => link.getAttribute('href')?.startsWith('/products/'));
    expect(productLinks.length).toBeGreaterThan(0);
    for (const link of productLinks) {
      expect(link.getAttribute('href')).toMatch(/^\/products\/[\w-]+$/);
    }
  });

  it('shows the flagship mattresses with their prices', () => {
    render(<Products />);
    expect(screen.getByRole('heading', { name: 'Relax' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Prestige' })).toBeInTheDocument();
    expect(screen.getByText('2,490 DH')).toBeInTheDocument();
  });

  it('flags the best seller', () => {
    render(<Products />);
    expect(screen.getByText('BEST SELLER')).toBeInTheDocument();
  });

  it('groups the catalogue into sections', () => {
    render(<Products />);
    const headings = screen.getAllByRole('heading', { level: 2 }).map((h) => h.textContent);
    expect(headings.length).toBeGreaterThan(1);
  });
});
