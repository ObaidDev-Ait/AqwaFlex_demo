import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

vi.mock('next/image', () => ({
  default: ({ src, alt, fill, sizes, ...rest }: Record<string, unknown>) => {
    void fill;
    void sizes;
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src as string} alt={alt as string} {...rest} />;
  },
}));

class IntersectionObserverStub implements IntersectionObserver {
  readonly root = null;
  readonly rootMargin = '';
  readonly thresholds: ReadonlyArray<number> = [];
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

globalThis.IntersectionObserver = IntersectionObserverStub;

afterEach(() => {
  cleanup();
});
