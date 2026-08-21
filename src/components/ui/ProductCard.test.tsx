import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

const baseProps = {
  id: 'matelas-relax',
  name: 'Relax',
  category: 'Matelas Confort',
  description: 'Le matelas d’entrée de gamme idéal.',
  imageUrl: '/images/products/relax.jpg',
};

describe('ProductCard', () => {
  it('links to the product detail page', () => {
    render(<ProductCard {...baseProps} />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/products/matelas-relax');
  });

  it('renders the name, category and description', () => {
    render(<ProductCard {...baseProps} />);
    expect(screen.getByRole('heading', { name: 'Relax' })).toBeInTheDocument();
    expect(screen.getByText('Matelas Confort')).toBeInTheDocument();
    expect(screen.getByText(baseProps.description)).toBeInTheDocument();
  });

  it('renders the product image with the name as alt text', () => {
    render(<ProductCard {...baseProps} />);
    const image = screen.getByAltText('Relax');
    expect(image).toHaveAttribute('src', '/images/products/relax.jpg');
  });

  it('falls back to a placeholder when there is no image', () => {
    render(<ProductCard {...baseProps} imageUrl="" />);
    expect(screen.queryByAltText('Relax')).not.toBeInTheDocument();
    expect(screen.getByText('Image en attente')).toBeInTheDocument();
  });

  it('shows the price with the default price label', () => {
    render(<ProductCard {...baseProps} price="890 MAD" />);
    expect(screen.getByText('À partir de')).toBeInTheDocument();
    expect(screen.getByText('890 MAD')).toBeInTheDocument();
  });

  it('allows overriding the price label', () => {
    render(<ProductCard {...baseProps} price="Sur devis" priceLabel="Tarif" />);
    expect(screen.getByText('Tarif')).toBeInTheDocument();
    expect(screen.queryByText('À partir de')).not.toBeInTheDocument();
  });

  it('hides the price block when no price is provided', () => {
    render(<ProductCard {...baseProps} />);
    expect(screen.queryByText('À partir de')).not.toBeInTheDocument();
  });

  it('omits the badge unless one is provided', () => {
    render(<ProductCard {...baseProps} />);
    expect(screen.queryByText('Nouveau')).not.toBeInTheDocument();
  });

  it('styles the badge with the primary colour by default', () => {
    render(<ProductCard {...baseProps} badge="Nouveau" />);
    expect(screen.getByText('Nouveau')).toHaveClass('bg-primary', 'text-on-primary');
  });

  it('styles the badge with the requested colour', () => {
    render(<ProductCard {...baseProps} badge="Best-seller" badgeColor="tertiary" />);
    expect(screen.getByText('Best-seller')).toHaveClass('bg-tertiary', 'text-on-tertiary');
  });
});
