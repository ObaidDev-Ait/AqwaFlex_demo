import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import FadeIn from './FadeIn';

describe('FadeIn', () => {
  it('renders its children', () => {
    render(
      <FadeIn>
        <p>Contenu</p>
      </FadeIn>
    );
    expect(screen.getByText('Contenu')).toBeInTheDocument();
  });

  it('forwards the className to the animated wrapper', () => {
    render(
      <FadeIn className="my-section">
        <p>Contenu</p>
      </FadeIn>
    );
    expect(screen.getByText('Contenu').parentElement).toHaveClass('my-section');
  });

  it('starts hidden while out of the viewport', () => {
    render(
      <FadeIn>
        <p>Contenu</p>
      </FadeIn>
    );
    expect(screen.getByText('Contenu').parentElement).toHaveStyle({ opacity: '0' });
  });

  it('offsets the content along the requested direction', () => {
    const transformFor = (direction: 'up' | 'down' | 'left' | 'right') => {
      const { unmount } = render(
        <FadeIn direction={direction}>
          <p>Contenu</p>
        </FadeIn>
      );
      const transform = screen.getByText('Contenu').parentElement?.style.transform;
      unmount();
      return transform;
    };

    expect(transformFor('up')).toContain('translateY(40px)');
    expect(transformFor('down')).toContain('translateY(-40px)');
    expect(transformFor('left')).toContain('translateX(40px)');
    expect(transformFor('right')).toContain('translateX(-40px)');
  });

  it('does not offset the content when direction is none', () => {
    render(
      <FadeIn direction="none">
        <p>Contenu</p>
      </FadeIn>
    );
    const wrapper = screen.getByText('Contenu').parentElement;
    expect(wrapper?.style.transform ?? '').not.toContain('translate');
    expect(wrapper).toHaveStyle({ opacity: '0' });
  });
});
