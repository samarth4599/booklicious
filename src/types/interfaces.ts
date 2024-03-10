// Define the shape of the book object
export interface IBook {
  cover_edition_key?: string;
  key?: string;
  description?: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
}

export interface ISavedData {
  [key: string]: IBook[];
}
