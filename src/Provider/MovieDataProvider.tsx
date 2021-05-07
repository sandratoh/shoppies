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
}

export const MovieContext = createContext<IMovieContext>({} as IMovieContext);

export const MovieDataProvider: React.FC<{}> = props => {
  const [nominations, setNominations] = useState<IMovie[]>([]);

  const [searchResult, setSearchResult] = useState<IMovie[]>([]);

  const data = { nominations, setNominations, searchResult, setSearchResult };

  // console.log('data', data);

  return (
    <MovieContext.Provider value={data}>{props.children}</MovieContext.Provider>
  );
};

export default MovieDataProvider;
