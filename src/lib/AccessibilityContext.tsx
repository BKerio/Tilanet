import React, { createContext, useContext, useReducer, useEffect } from 'react';
import type { ReactNode } from 'react';

type AccessibilityState = {
  scale: number;
  dyslexiaFont: boolean;
  highlightLinks: boolean;
  lineHeight: boolean;
  letterSpacing: boolean;
  highContrast: boolean;
  invertColors: boolean;
  grayscale: boolean;
  bigCursor: boolean;
  readingMask: boolean;
  stopMotion: boolean;
};

const initialState: AccessibilityState = {
  scale: 100,
  dyslexiaFont: false,
  highlightLinks: false,
  lineHeight: false,
  letterSpacing: false,
  highContrast: false,
  invertColors: false,
  grayscale: false,
  bigCursor: false,
  readingMask: false,
  stopMotion: false,
};

type Action = Partial<AccessibilityState>;

const reducer = (state: AccessibilityState, action: Action): AccessibilityState => {
  return { ...state, ...action };
};

const AccessibilityContext = createContext<{
  state: AccessibilityState;
  dispatch: React.Dispatch<Action>;
  reset: () => void;
} | null>(null);

export const AccessibilityProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const reset = () => {
    dispatch(initialState);
  };

  useEffect(() => {
    const html = document.documentElement;
    
    html.style.fontSize = `${(state.scale / 100) * 15}px`;

    if (state.dyslexiaFont) html.classList.add('font-dyslexia');
    else html.classList.remove('font-dyslexia');

    let filter = '';
    if (state.invertColors) filter += 'invert(100%) ';
    if (state.grayscale) filter += 'grayscale(100%) ';
    if (state.highContrast) filter += 'contrast(150%) ';
    html.style.filter = filter.trim();

    if (state.lineHeight) html.style.lineHeight = '2';
    else html.style.lineHeight = '';

    if (state.letterSpacing) html.style.letterSpacing = '0.12em';
    else html.style.letterSpacing = '';

    if (state.bigCursor) html.classList.add('cursor-large');
    else html.classList.remove('cursor-large');

    if (state.stopMotion) html.classList.add('disable-animations');
    else html.classList.remove('disable-animations');

    if (state.highlightLinks) html.classList.add('highlight-links');
    else html.classList.remove('highlight-links');

  }, [state]);

  return (
    <AccessibilityContext.Provider value={{ state, dispatch, reset }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};
