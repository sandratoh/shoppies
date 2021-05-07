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
}

export const MovieContext = createContext<IMovieContext>({} as IMovieContext);

export const MovieDataProvider: React.FC<{}> = props => {
  // const testNominations = [
  //   {
  //     Title: 'The Avengers',
  //     Year: '2012',
  //     imdbID: 'tt0848228',
  //     Type: 'movie',
  //     Poster:
  //       'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  //   },
  //   {
  //     Title: 'Avengers: Infinity War',
  //     Year: '2018',
  //     imdbID: 'tt4154756',
  //     Type: 'movie',
  //     Poster:
  //       'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  //   },
  //   {
  //     Title: 'Avengers: Endgame',
  //     Year: '2019',
  //     imdbID: 'tt4154796',
  //     Type: 'movie',
  //     Poster:
  //       'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  //   },
  // ];

  const [nominations, setNominations] = useState<IMovie[]>([]);

  const data = { nominations, setNominations };

  // console.log('data', data);

  return (
    <MovieContext.Provider value={data}>{props.children}</MovieContext.Provider>
  );
};

export default MovieDataProvider;
