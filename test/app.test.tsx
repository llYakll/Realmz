import { render, screen } from '@testing-library/react';
import Nav from '../src/components/nav';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import React from 'react';

describe('App', () => {
  it('renders the app and logs the output', () => {
    render(<Nav />);
    
    screen.debug();
    
    const appElement = screen.getByText('text');
    expect(appElement).toBeInTheDocument(); 
  });
});