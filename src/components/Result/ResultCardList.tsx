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

  const cardContentByResult = (result: IMovie[]) => {
    return result.length !== 0
      ? movies
      : "You haven't searched for anything yet!";
  };

  return (
    <section className="result-card--list">
      {cardContentByResult(searchResult)}
    </section>
  );
};

export default ResultCardList;
