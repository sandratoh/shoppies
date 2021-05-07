// Libraries
import { useContext } from 'react';

// Component
import Button from '../Button';
import CardBanner from './CardBanner';
import NominationCardList from './NominationCardList';

// Material UI Component
import Card from '@material-ui/core/Card';

// Helper
import { MovieContext } from '../../Provider/MovieDataProvider';

// Stylesheet
import './NominationCard.scss';

export const NominationCard = () => {
  const { setNominations } = useContext(MovieContext);

  const handleClear = () => {
    setNominations([]);
  };

  return (
    <Card className="nomination-card">
      <div className="nomination-card--header">
        <h2>Nominations</h2>
        <CardBanner currentNominees={0} />
      </div>
      <NominationCardList />
      <div className="nomination-card--footer">
        <Button variant="text" link onClick={handleClear}>
          Clear All
        </Button>
      </div>
    </Card>
  );
};

export default NominationCard;
