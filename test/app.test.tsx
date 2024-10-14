import { render, screen } from '@testing-library/react';
import App from '../src/components/App';
import { describe, it, expect } from 'vitest';
import React from 'react';

describe('App', () => {
  it('renders the app and logs the output', () => {
    render(<App />);
    
    screen.debug();
    
    const appElement = screen.getByText('text');
    expect(appElement).toBeInTheDocument(); 
  });
});