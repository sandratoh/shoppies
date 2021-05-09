// Libraries
import { useContext } from 'react';

// Components
import Button from '../Button';
import CardBanner from './CardBanner';
import NominationCardList from './NominationCardList';

// Material UI Components
import Card from '@material-ui/core/Card';

// Helpers
import { AppContext } from '../../Provider/DataProvider';

// Stylesheet
import './Nomination.scss';

export const NominationCard: React.FC<{}> = () => {
  const { nominations, setOpenConfirm, setOpenSubmit, success } = useContext(
    AppContext
  );

  const handleClear = () => setOpenConfirm(true);

  const handleSubmit = () => setOpenSubmit(true);

  return (
    <Card className="nomination-card">
      <div className="nomination-card--header">
        <h2>Nominations</h2>
        <CardBanner currentNominees={nominations.length} />
      </div>
      <NominationCardList />
      {nominations.length > 0 && (
        <div className="nomination-card--footer">
          <Button variant="text" link onClick={handleClear}>
            Clear All
          </Button>
          <Button variant="text" link onClick={handleSubmit} disabled={success}>
            Submit Nominations
          </Button>
        </div>
      )}
    </Card>
  );
};

export default NominationCard;
