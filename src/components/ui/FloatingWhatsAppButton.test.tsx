import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import FloatingWhatsAppButton from './FloatingWhatsAppButton';

describe('FloatingWhatsAppButton', () => {
  it('prefills a url-encoded WhatsApp message', () => {
    render(<FloatingWhatsAppButton />);
    const href = screen.getByRole('link').getAttribute('href') as string;
    const url = new URL(href);
    expect(url.origin + url.pathname).toBe('https://wa.me/212600000000');
    expect(url.searchParams.get('text')).toBe(
      'Hello Aquaflex, I would like more information about your products.'
    );
    expect(href).not.toContain(' ');
  });

  it('opens in a new tab without leaking the referrer', () => {
    render(<FloatingWhatsAppButton />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
