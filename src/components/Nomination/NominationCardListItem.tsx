// Libraries
import { useContext } from 'react';

// Component
import Button from '../Button';

// Helper
import { IMovie, AppContext } from '../../Provider/DataProvider';

// Stylesheet
import './Nomination.scss';

export const NominationCardListItem: React.FC<IMovie> = props => {
  const { nominations, setNominations } = useContext(AppContext);

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
