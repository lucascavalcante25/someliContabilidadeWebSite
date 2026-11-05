import "@testing-library/jest-dom";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

// jsdom não implementa estes observers; os componentes de animação e o carrossel dependem deles.
class ObserverFalso {
  constructor(private readonly callback?: (entries: unknown[], observer: unknown) => void) {}
  observe(target: Element) {
    this.callback?.([{ isIntersecting: true, target, intersectionRatio: 1 }], this);
  }
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
Object.defineProperty(window, "IntersectionObserver", { writable: true, value: ObserverFalso });
Object.defineProperty(window, "ResizeObserver", { writable: true, value: ObserverFalso });
