'use client'
import { useState } from 'react';
import Slideshow from '../components/Carousel';
import BookCards from '../components/BookCard';
import Filter from '../components/Filter';
import books from '../data/books';

const Home = () => {
  const [filteredBooks, setFilteredBooks] = useState([]);

  const handleFilterChange = (filters) => {
    let filtered = [];
    if (filters.category) {
      filtered = Object.values(books).flat();
    }
    if (filters.design) {
      filtered = books[filters.design] || [];
    }
    setFilteredBooks(filtered);
  };

  return (
    <div>
      <Slideshow />
      <Filter onFilterChange={handleFilterChange} />
      <BookCards bookData={filteredBooks.length ? filteredBooks : Object.values(books).flat()} />
    </div>
  );
};

export default Home;
