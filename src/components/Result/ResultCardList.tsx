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
    const movies = searchResult.map((movie: IMovie) => {
      return <ResultCardListItem {...movie} key={movie.imdbID} />;
    });

    return result.length !== 0 ? movies : 'Search for your favourite movie!';
  };

  return (
    <section className="result-card--list">
      {cardContentByResult(searchResult)}
    </section>
  );
};

export default ResultCardList;
