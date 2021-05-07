// Libraries
import { useContext } from 'react';

// Component
import Button from '../Button';
import ResultCardList from './ResultCardList';

// Material UI Component
import Card from '@material-ui/core/Card';

// Helper
import { MovieContext } from '../../Provider/MovieDataProvider';

// Stylesheet
import './Result.scss';

export const ResultCard = () => {
  const { searchResult } = useContext(MovieContext);

  const searchCTA = searchResult.length !== 0 ? 'Search Again' : 'Search Now';

  const handleClick = () => {
    document.getElementById('search-input')?.focus();
  };

  return (
    <Card className="result-card">
      <div className="result-card--header">
        <h2>Result</h2>
      </div>
      <ResultCardList />
      <div className="result-card--footer">
        <Button variant="text" link onClick={handleClick}>
          {searchCTA}
        </Button>
      </div>
    </Card>
  );
};

export default ResultCard;
