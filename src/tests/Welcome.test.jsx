import {  render, screen } from '@testing-library/react';
import Welcome from '../components/Welcome';
import { expect,it } from 'vitest';

it ('mounts the component correctly', () => {
    render(<Welcome/>)

    expect(screen.getByText(/benvenuto nel nostro shop/i)).to.exist;
    expect(screen.getByText(/scopri le ultime offerte e i prodotti più venduti/i)).to.exist;
    expect(screen.getByText(/la tua destinazione per lo shopping online/i)).to.exist;
})