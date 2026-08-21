import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductDetail from './page';

const useParams = vi.fn(() => ({ slug: 'matelas-orthopedique' }) as Record<string, unknown>);

vi.mock('next/navigation', () => ({
  useParams: () => useParams(),
}));

const priceValue = () => screen.getByText(/^[\d,]+$/).textContent;

describe('product detail page', () => {
  beforeEach(() => {
    useParams.mockReturnValue({ slug: 'matelas-orthopedique' });
  });

  it('uses the route slug as the product title', () => {
    render(<ProductDetail />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('matelas-orthopedique');
  });

  it('falls back to a default title when the slug is missing', () => {
    useParams.mockReturnValue({});
    render(<ProductDetail />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('ORTHOPÉDIQUE');
  });

  it('preselects the smallest dimension', () => {
    render(<ProductDetail />);
    expect(screen.getByRole('button', { name: '90 x 190' })).toHaveClass('bg-primary');
    expect(priceValue()).toBe('3,150');
  });

  it('shows the price of the selected dimension', async () => {
    render(<ProductDetail />);
    await userEvent.click(screen.getByRole('button', { name: '180 x 200' }));
    expect(priceValue()).toBe('5,100');
  });

  it('moves the selected state to the dimension that was clicked', async () => {
    render(<ProductDetail />);
    await userEvent.click(screen.getByRole('button', { name: '140 x 190' }));
    expect(screen.getByRole('button', { name: '140 x 190' })).toHaveClass('bg-primary');
    expect(screen.getByRole('button', { name: '90 x 190' })).not.toHaveClass('bg-primary');
  });

  it('keeps every dimension selectable', async () => {
    render(<ProductDetail />);
    for (const [size, price] of [
      ['90 x 190', '2,400'],
      ['160 x 190', '4,200'],
      ['160 x 200', '4,500'],
      ['200 x 200', '5,800'],
    ]) {
      await userEvent.click(screen.getByRole('button', { name: size }));
      expect(priceValue(), size).toBe(price);
    }
  });
});
