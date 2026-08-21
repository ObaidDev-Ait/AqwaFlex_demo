import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import FloatingWhatsApp from './FloatingWhatsApp';

describe('FloatingWhatsApp', () => {
  it('links to the company WhatsApp number', () => {
    render(<FloatingWhatsApp />);
    expect(screen.getByRole('link', { name: 'Contact on WhatsApp' })).toHaveAttribute(
      'href',
      'https://wa.me/212661361250'
    );
  });

  it('opens in a new tab without leaking the referrer', () => {
    render(<FloatingWhatsApp />);
    const link = screen.getByRole('link', { name: 'Contact on WhatsApp' });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('is only shown on mobile viewports', () => {
    render(<FloatingWhatsApp />);
    expect(screen.getByRole('link', { name: 'Contact on WhatsApp' })).toHaveClass('md:hidden');
  });
});
