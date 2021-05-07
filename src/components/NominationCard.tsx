// Component
import CardBanner from './CardBanner';

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
    </Card>
  );
};

export default NominationCard;
