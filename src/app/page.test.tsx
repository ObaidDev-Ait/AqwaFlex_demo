import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './page';

describe('home page', () => {
  it('renders a single hero headline', () => {
    render(<Home />);
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  });

  it('links the catalogue teasers to the products page', () => {
    render(<Home />);
    const catalogueLinks = screen
      .getAllByRole('link')
      .filter((link) => link.getAttribute('href') === '/products');
    expect(catalogueLinks.length).toBeGreaterThan(0);
  });

  it('links the signature models to their detail pages', () => {
    render(<Home />);
    for (const slug of ['relax', 'prestige', 'ortho']) {
      const link = screen
        .getAllByRole('link')
        .find((l) => l.getAttribute('href') === `/products/${slug}`);
      expect(link, slug).toBeDefined();
    }
  });

  it('offers WhatsApp, phone and quote entry points', () => {
    render(<Home />);
    const hrefs = screen.getAllByRole('link').map((link) => link.getAttribute('href'));
    expect(hrefs).toContain('https://wa.me/212661361250');
    expect(hrefs).toContain('tel:+212522765353');
    expect(hrefs).toContain('/contact');
  });

  it('anchors the hero call to action to the catalogue section', () => {
    const { container } = render(<Home />);
    const anchor = screen.getAllByRole('link').find((l) => l.getAttribute('href') === '#catalogue');
    expect(anchor).toBeDefined();
    expect(container.querySelector('#catalogue')).not.toBeNull();
  });
});
