import React, {ReactElement, createContext, useContext, useState} from 'react';
import {IBook} from '../types/interfaces';

export interface IBookProvider {
  books: IBook[];
  results: IBook[];
  favourites: IBook[];
  setBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  setResults: React.Dispatch<React.SetStateAction<IBook[]>>;
  setFavourites: React.Dispatch<React.SetStateAction<IBook[]>>;
}

// Create a new context for the BookContext
export const BookContext = createContext<IBookProvider>({
  books: [],
  setBooks: () => {},
  results: [],
  setResults: () => {},
  favourites: [],
  setFavourites: () => {},
});

// Create the BookContextProvider component
const BookContextProvider: React.FC<{children: ReactElement}> = ({
  children,
}) => {
  // Define the state for the books list
  const [books, setBooks] = useState<IBook[]>([]);
  const [results, setResults] = useState<IBook[]>([]);
  const [favourites, setFavourites] = useState<IBook[]>([]);

  return (
    <BookContext.Provider
      value={{books, setBooks, results, setResults, favourites, setFavourites}}>
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = () => {
  return useContext(BookContext);
};

export default BookContextProvider;
