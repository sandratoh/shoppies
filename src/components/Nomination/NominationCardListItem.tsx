// Libraries
import { useContext } from 'react';

// Component
import Button from '../Button';

// Helper
import { IMovie, MovieContext } from '../../Provider/MovieDataProvider';

// Stylesheet
import './Nomination.scss';

export const NominationCardListItem: React.FC<IMovie> = props => {
  const { nominations, setNominations } = useContext(MovieContext);

  const handleRemove = (movieId: string) => {
    const filteredNominations = nominations.filter(
      movie => movie.imdbID !== movieId
    );

    setNominations(filteredNominations);
  };

  return (
    <section className="nomination-card--item">
      <p>{`${props.Title} (${props.Year})`}</p>
      <Button
        remove
        variant="outlined"
        color="secondary"
        onClick={() => handleRemove(props.imdbID)}
      >
        Remove
      </Button>
    </section>
  );
};

export default NominationCardListItem;
