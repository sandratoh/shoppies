// Component
import Button from '../Button';
import ResultCardList from './ResultCardList';

// Material UI Component
import Card from '@material-ui/core/Card';

// Stylesheet
import './Result.scss';

export const ResultCard = () => {
  return (
    <Card className="result-card">
      <div className="result-card--header">
        <h2>Result</h2>
      </div>
      <ResultCardList />
      <div className="result-card--footer">
        <Button
          variant="text"
          link
          onClick={() => console.log('button clicked')}
        >
          Search Again
        </Button>
      </div>
    </Card>
  );
};

export default ResultCard;
