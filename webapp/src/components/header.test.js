import React from 'react'
import {render, screen} from '@testing-library/react'
import Header from './header';

test('Render Header', async() => {
    render(<Header />);
    expect(screen.getByText('oi')).toBeInTheDocument()
});


