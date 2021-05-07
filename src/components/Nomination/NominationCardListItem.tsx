// Libraries
import { useContext } from 'react';

// Component
import Button from '../Button';

// Helper
import { MovieContext } from '../../Provider/MovieDataProvider';

// Stylesheet
import './NominationCardListItem.scss';

interface IProps {
  title: string;
  year: number;
}

export const NominationCardListItem: React.FC<IProps> = props => {
  const { nominations, setNominations } = useContext(MovieContext);

  const handleRemove = (movieTitle: string) => {
    const filteredNominations = nominations.filter(
      movie => movie.Title !== movieTitle
    );

    setNominations(filteredNominations);
  };

  return (
    <section className="nomination-card--item">
      <p>{`${props.title} (${props.year})`}</p>
      <Button
        remove
        variant="outlined"
        color="secondary"
        onClick={() => handleRemove(props.title)}
      >
        Remove
      </Button>
    </section>
  );
};

export default NominationCardListItem;
