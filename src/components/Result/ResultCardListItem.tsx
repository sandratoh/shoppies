// Libraries
import { useContext } from 'react';

// Component
import Button from '../Button';

// Helper
import { IMovie, MovieContext } from '../../Provider/MovieDataProvider';

// Stylesheet
import './Result.scss';

export const ResultCardListItem: React.FC<IMovie> = props => {
  const { nominations, setNominations } = useContext(MovieContext);

  const handleNominate = (movie: IMovie) => {
    setNominations(prev => [...prev, movie]);
  };

  const isNominated = (movieId: string) => {
    const fullList = nominations.length >= 5;

    const findFromList = nominations.find(movie => movie.imdbID === movieId);

    return fullList || findFromList ? true : false;
  };

  return (
    <section className="result-card--item">
      <p>{`${props.Title} (${props.Year})`}</p>
      <Button
        disabled={isNominated(props.imdbID)}
        nominate
        variant="contained"
        color="primary"
        onClick={() => handleNominate(props)}
      >
        Nominate
      </Button>
    </section>
  );
};
export default ResultCardListItem;
