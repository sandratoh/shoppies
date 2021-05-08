// Libraries
import { useContext } from 'react';

// Component
import ResultCardListItem from './ResultCardListItem';

// Helpers
import { IMovie, AppContext } from '../../Provider/DataProvider';

// Stylesheet
import './Result.scss';

export const ResultCardList: React.FC<{}> = () => {
  const { searchResult } = useContext(AppContext);

  const cardContentByResult = (result: IMovie[]) => {
    if (result === undefined) {
      return 'Sorry, no data found!';
    }

    const movies = searchResult.map((movie: IMovie) => {
      return <ResultCardListItem {...movie} key={movie.imdbID} />;
    });

    return result.length !== 0
      ? movies
      : 'Start searching for your favourite movie!';
  };

  return (
    <section className="result-card--list">
      {cardContentByResult(searchResult)}
    </section>
  );
};

export default ResultCardList;
