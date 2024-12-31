/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import {it} from '@jest/globals';
import { screen, render, fireEvent } from '@testing-library/react-native';

it('renders correctly', () => {
    
    const { getByText } = render(<App />);

    expect(getByText('Filmes Populares')).toBeTruthy();
});
