'use client';

import { useParams } from 'next/navigation';
import BookCards from '../../../components/BookCard'; // Ensure this is the correct path to your component
import books from '../../../data/books';

const BookPage = () => {
  const params = useParams();
  const { book } = params; // Destructure the `book` parameter from the `params` object
  console.log('boo: '+book)

  if (!book || !books[book]) {
    return <div>Book not found</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4">{book} Wallpapers</h1>
      <BookCards bookData={books[book]} />
    </div>
  );
};

export default BookPage;
