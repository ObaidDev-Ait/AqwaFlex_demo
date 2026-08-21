import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from './ThemeProvider';

const nextThemesProvider = vi.fn();

vi.mock('next-themes', () => ({
  ThemeProvider: (props: Record<string, unknown>) => {
    nextThemesProvider(props);
    return <div data-testid="next-themes">{props.children as React.ReactNode}</div>;
  },
}));

describe('ThemeProvider', () => {
  it('renders its children', () => {
    render(
      <ThemeProvider>
        <span>themed content</span>
      </ThemeProvider>
    );
    expect(screen.getByText('themed content')).toBeInTheDocument();
  });

  it('forwards its props to next-themes', () => {
    render(
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <span>themed content</span>
      </ThemeProvider>
    );
    expect(nextThemesProvider).toHaveBeenCalledWith(
      expect.objectContaining({ attribute: 'class', defaultTheme: 'system', enableSystem: true })
    );
  });
});
