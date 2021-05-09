// Libraries
import { useContext } from 'react';

// Components
import ResultCardListItem from './ResultCardListItem';

// Helpers
import { IMovie, AppContext } from '../../Provider/DataProvider';

// Stylesheet
import './Result.scss';

export const ResultCardList: React.FC<{}> = () => {
  const { searchResult, searchKeyword, noResult } = useContext(AppContext);

  const cardContentByResult = (result: IMovie[]) => {
    if (noResult && searchKeyword === '') {
      return 'Search for your favourite movie!';
    }

    const movieIds: string[] = [];

    const movies = searchResult.map((movie: IMovie) => {
      const duplicatedMovie = movieIds.includes(movie.imdbID);

      if (!duplicatedMovie) {
        movieIds.push(movie.imdbID);
        return (
          <ResultCardListItem {...movie} key={searchResult.indexOf(movie)} />
        );
      }
      return null;
    });

    return result.length !== 0
      ? movies
      : "Sorry, we couldn't find a movie with that title. Try another one!";
  };

  return (
    <section className="result-card--list">
      {cardContentByResult(searchResult)}
    </section>
  );
};

export default ResultCardList;
