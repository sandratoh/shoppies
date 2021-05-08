import React, { createContext, useState } from 'react';

export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface IMovieContext {
  nominations: IMovie[];
  setNominations: React.Dispatch<React.SetStateAction<IMovie[]>>;
  searchResult: IMovie[];
  setSearchResult: React.Dispatch<React.SetStateAction<IMovie[]>>;
  searchKeyword: string;
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MovieContext = createContext<IMovieContext>({} as IMovieContext);

export const MovieDataProvider: React.FC<{}> = props => {
  const [nominations, setNominations] = useState<IMovie[]>([]);

  const [searchResult, setSearchResult] = useState<IMovie[]>([]);

  const [searchKeyword, setSearchKeyword] = useState<string>('');

  const [open, setOpen] = useState(false);

  const data = {
    nominations,
    setNominations,
    searchResult,
    setSearchResult,
    searchKeyword,
    setSearchKeyword,
    open,
    setOpen,
  };

  // console.log('data', data);

  return (
    <MovieContext.Provider value={data}>{props.children}</MovieContext.Provider>
  );
};

export default MovieDataProvider;
