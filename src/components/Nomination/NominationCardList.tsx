// Libraries
import { useContext } from 'react';

// Component
import NominationCardListItem from './NominationCardListItem';

// Helpers
import { IMovie, MovieContext } from '../../Provider/MovieDataProvider';

// Stylesheet
import './Nomination.scss';

export const NominationCardList = () => {
  const { nominations } = useContext(MovieContext);

  const movies = nominations.map((movie: IMovie) => {
    return (
      <NominationCardListItem
        key={movie.imdbID}
        id={movie.imdbID}
        title={movie.Title}
        year={parseInt(movie.Year)}
      />
    );
  });

  const cardContentByNominations = (nominations: IMovie[]) => {
    return nominations.length !== 0
      ? movies
      : 'Your nomination list is currently empty. Start by searching for your favourite movie!';
  };

  return (
    <section className="nomination-card--list">
      {cardContentByNominations(nominations)}
    </section>
  );
};

export default NominationCardList;
