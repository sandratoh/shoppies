// Libraries
import { useContext } from 'react';

// Component
import ResultCardListItem from './ResultCardListItem';

// Helpers
import { IMovie, MovieContext } from '../../Provider/MovieDataProvider';

// Stylesheet
import './Result.scss';

export const ResultCardList = () => {
  const { searchResult } = useContext(MovieContext);

  const movies = searchResult.map((movie: IMovie) => {
    return <ResultCardListItem {...movie} key={movie.imdbID} />;
  });

  return <section className="result-card--list">{movies}</section>;
};

export default ResultCardList;
