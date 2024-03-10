import React, {ReactElement, createContext, useContext, useState} from 'react';
import {IBook} from '../types/interfaces';

export interface IBookProvider {
  books: IBook[];
  results: IBook[];
  setBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  setResults: React.Dispatch<React.SetStateAction<IBook[]>>;
}

// Create a new context for the BookContext
export const BookContext = createContext<IBookProvider>({
  books: [],
  setBooks: () => {},
  results: [],
  setResults: () => {},
});

// Create the BookContextProvider component
const BookContextProvider: React.FC<{children: ReactElement}> = ({
  children,
}) => {
  // Define the state for the books list
  const [books, setBooks] = useState<IBook[]>([]);
  const [results, setResults] = useState<IBook[]>([]);

  // Remove a book from the list
  // const removeBook = (bookId: number) => {
  //     setBooks(books.filter((book) => book.id !== bookId));
  // };

  // Provide the books list and the addBook/removeBook functions to the children components
  return (
    <BookContext.Provider value={{books, setBooks, results, setResults}}>
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = () => {
  return useContext(BookContext);
};

export default BookContextProvider;
