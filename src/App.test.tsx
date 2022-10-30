import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('Test App Compontent', () => {

    test('Renders Correctly', async () => {
        render( <App/> )
        expect(screen.getByText("Results")).toBeInTheDocument()
    })
})
