import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeToggle } from './ThemeToggle';

const setTheme = vi.fn();
const useTheme = vi.fn(() => ({ theme: 'light', setTheme }));

vi.mock('next-themes', () => ({
  useTheme: () => useTheme(),
}));

describe('ThemeToggle', () => {
  beforeEach(() => {
    setTheme.mockClear();
    useTheme.mockReturnValue({ theme: 'light', setTheme });
  });

  it('renders a placeholder until it is mounted to avoid hydration mismatches', () => {
    const { container } = render(<ThemeToggle />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    expect(container.firstChild).toHaveClass('opacity-0');
  });

  it('renders a labelled toggle once mounted', async () => {
    render(<ThemeToggle />);
    expect(await screen.findByRole('button', { name: 'Toggle theme' })).toBeInTheDocument();
  });

  it('switches to the dark theme when the light theme is active', async () => {
    render(<ThemeToggle />);
    await userEvent.click(await screen.findByRole('button', { name: 'Toggle theme' }));
    expect(setTheme).toHaveBeenCalledWith('dark');
  });

  it('switches back to the light theme when the dark theme is active', async () => {
    useTheme.mockReturnValue({ theme: 'dark', setTheme });
    render(<ThemeToggle />);
    await userEvent.click(await screen.findByRole('button', { name: 'Toggle theme' }));
    expect(setTheme).toHaveBeenCalledWith('light');
  });
});
