import { render, screen } from '@testing-library/react';
import BookList from '../components/BookList';
import books from '../books/fantasy.json';
import { it, expect } from 'vitest';



it('renders as many SingleBook cards as books in the json file', () => {
    render (<BookList books={books}/>);

    const cards = screen.getAllByTestId("single-book-card");
    expect(cards.length).toBe(books.length);
});