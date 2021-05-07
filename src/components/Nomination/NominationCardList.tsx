// Libraries
import { useContext } from 'react';

// Component
import NominationCardListItem from './NominationCardListItem';

// Helpers
import { IMovie, MovieContext } from '../../Provider/MovieDataProvider';

// Stylesheet
import './NominationCardList.scss';

export const NominationCardList = () => {
  const { nominations } = useContext(MovieContext);

  const movies = nominations.map((movie: IMovie) => {
    return (
      <NominationCardListItem
        key={movie.imdbID}
        title={movie.Title}
        year={parseInt(movie.Year)}
      />
    );
  });

  return <section className="nomination-card--list">{movies}</section>;
};

export default NominationCardList;
