export const END_POINTS = {
  trending: 'https://openlibrary.org/trending/now.json?limit=20',
  getImage: (id: string, size: 'S' | 'M' | 'L') =>
    `https://covers.openlibrary.org/b/olid/${id}-${size}.jpg?default=false`,
  searchBook: (query: string) =>
    `https://openlibrary.org/search.json?title=${query}&limit=5`,
};
