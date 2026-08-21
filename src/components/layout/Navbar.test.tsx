import { beforeEach, describe, expect, it, vi } from 'vitest';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from './Navbar';

const usePathname = vi.fn(() => '/');

vi.mock('next/navigation', () => ({
  usePathname: () => usePathname(),
}));

const scrollTo = (y: number) => {
  act(() => {
    window.scrollY = y;
    window.dispatchEvent(new Event('scroll'));
  });
};

describe('Navbar', () => {
  beforeEach(() => {
    usePathname.mockReturnValue('/');
    window.scrollY = 0;
  });

  it('renders the primary navigation links', () => {
    render(<Navbar />);
    for (const [name, href] of [
      ['Home', '/'],
      ['Products', '/products'],
      ['About Us', '/about'],
      ['Contact', '/contact'],
    ]) {
      expect(screen.getByRole('link', { name: new RegExp(`^${name}$`) })).toHaveAttribute(
        'href',
        href
      );
    }
  });

  it('highlights the link for the active route', () => {
    usePathname.mockReturnValue('/about');
    render(<Navbar />);
    expect(screen.getByRole('link', { name: 'About Us' })).toHaveClass('text-brand-cyan');
    expect(screen.getByRole('link', { name: 'Home' })).not.toHaveClass('text-brand-cyan');
  });

  it('is transparent until the page is scrolled past the threshold', () => {
    const { container } = render(<Navbar />);
    const header = container.querySelector('header') as HTMLElement;
    expect(header).toHaveClass('bg-transparent');

    scrollTo(10);
    expect(header).toHaveClass('bg-transparent');

    scrollTo(120);
    expect(header).toHaveClass('glass');
    expect(header).not.toHaveClass('bg-transparent');
  });

  it('stops listening for scroll events once unmounted', () => {
    const removeEventListener = vi.spyOn(window, 'removeEventListener');
    render(<Navbar />).unmount();
    expect(removeEventListener).toHaveBeenCalledWith('scroll', expect.any(Function));
    removeEventListener.mockRestore();
  });

  it('reveals the mega menu when hovering the products link', async () => {
    render(<Navbar />);
    expect(screen.queryByRole('link', { name: /Oreillers/ })).not.toBeInTheDocument();

    await userEvent.hover(screen.getByRole('link', { name: 'Products' }));
    expect(await screen.findByRole('link', { name: /Oreillers/ })).toHaveAttribute(
      'href',
      '/products?category=oreillers'
    );
  });

  it('toggles the mobile navigation overlay', async () => {
    render(<Navbar />);
    const toggle = screen.getAllByRole('button')[0];
    expect(screen.getAllByRole('link', { name: 'About Us' })).toHaveLength(1);

    await userEvent.click(toggle);
    expect(await screen.findAllByRole('link', { name: 'About Us' })).toHaveLength(2);

    await userEvent.click(toggle);
    await waitFor(() =>
      expect(screen.getAllByRole('link', { name: 'About Us' })).toHaveLength(1)
    );
  });

  it('closes the mobile overlay when a link inside it is followed', async () => {
    render(<Navbar />);
    await userEvent.click(screen.getAllByRole('button')[0]);

    const overlayLink = (await screen.findAllByRole('link', { name: 'About Us' }))[1];
    await userEvent.click(overlayLink);

    await waitFor(() =>
      expect(screen.getAllByRole('link', { name: 'About Us' })).toHaveLength(1)
    );
  });
});
