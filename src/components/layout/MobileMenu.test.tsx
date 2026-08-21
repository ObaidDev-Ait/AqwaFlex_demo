import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MobileMenu from './MobileMenu';

const usePathname = vi.fn(() => '/');

vi.mock('next/navigation', () => ({
  usePathname: () => usePathname(),
}));

vi.mock('@/components/theme/ThemeToggle', () => ({
  ThemeToggle: () => <div data-testid="theme-toggle" />,
}));

const drawer = () => screen.getByText('Accueil').closest('div.fixed') as HTMLElement;

describe('MobileMenu', () => {
  beforeEach(() => {
    usePathname.mockReturnValue('/');
  });

  afterEach(() => {
    document.body.style.overflow = '';
  });

  it('starts closed with the drawer translated off-screen', () => {
    render(<MobileMenu />);
    expect(drawer()).toHaveClass('translate-x-full');
    expect(document.body.style.overflow).toBe('unset');
  });

  it('opens the drawer and locks background scrolling', async () => {
    render(<MobileMenu />);
    await userEvent.click(screen.getByRole('button', { name: 'Menu' }));
    expect(drawer()).toHaveClass('translate-x-0');
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('closes the drawer with the close button and restores scrolling', async () => {
    render(<MobileMenu />);
    await userEvent.click(screen.getByRole('button', { name: 'Menu' }));
    await userEvent.click(screen.getByText('close'));
    expect(drawer()).toHaveClass('translate-x-full');
    expect(document.body.style.overflow).toBe('unset');
  });

  it('closes the drawer when the backdrop is clicked', async () => {
    const { container } = render(<MobileMenu />);
    await userEvent.click(screen.getByRole('button', { name: 'Menu' }));
    const backdrop = container.querySelector('.z-\\[60\\]') as HTMLElement;
    await userEvent.click(backdrop);
    expect(drawer()).toHaveClass('translate-x-full');
  });

  it('restores scrolling when unmounted while open', async () => {
    const { unmount } = render(<MobileMenu />);
    await userEvent.click(screen.getByRole('button', { name: 'Menu' }));
    unmount();
    expect(document.body.style.overflow).toBe('unset');
  });

  it('links to the catalogue, company and contact pages', () => {
    render(<MobileMenu />);
    expect(screen.getByRole('link', { name: 'Matelas' })).toHaveAttribute('href', '/products');
    expect(screen.getByRole('link', { name: 'Notre histoire' })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('link', { name: 'Demander un devis' })).toHaveAttribute(
      'href',
      '/contact'
    );
  });

  it('offers WhatsApp and phone shortcuts', () => {
    render(<MobileMenu />);
    expect(screen.getByRole('link', { name: /WhatsApp/ })).toHaveAttribute(
      'href',
      'https://wa.me/212000000'
    );
    expect(screen.getByRole('link', { name: /Téléphone/ }).getAttribute('href')).toMatch(/^tel:/);
  });
});
