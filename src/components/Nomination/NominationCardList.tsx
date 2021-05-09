// Libraries
import { useContext } from 'react';

// Components
import NominationCardListItem from './NominationCardListItem';

// Helpers
import { IMovie, AppContext } from '../../Provider/DataProvider';

// Stylesheet
import './Nomination.scss';

export const NominationCardList: React.FC<{}> = () => {
  const { nominations } = useContext(AppContext);

  const movies = nominations.map((movie: IMovie) => {
    return <NominationCardListItem {...movie} key={movie.imdbID} />;
  });

  const cardContentByNominations = (nominations: IMovie[]) => {
    return nominations.length !== 0
      ? movies
      : 'Nominate your top 5 movies to The Shoppies!';
  };

  return (
    <section className="nomination-card--list">
      {cardContentByNominations(nominations)}
    </section>
  );
};

export default NominationCardList;
