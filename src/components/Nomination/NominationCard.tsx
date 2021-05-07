// Component
import Button from '../Button';
import CardBanner from './CardBanner';
import NominationCardList from './NominationCardList';

// Material UI Component
import Card from '@material-ui/core/Card';

// Stylesheet
import './NominationCard.scss';

export const NominationCard = () => {
  return (
    <Card className="nomination-card">
      <div className="nomination-card--header">
        <h2>Nominations</h2>
        <CardBanner currentNominees={0} />
      </div>
      <NominationCardList />
      <Button variant="text" link>
        Clear All
      </Button>
    </Card>
  );
};

export default NominationCard;
