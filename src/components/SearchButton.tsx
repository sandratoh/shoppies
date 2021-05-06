// Stylesheet
import './SearchButton.scss';

interface IProps {
  onClick: () => void;
}

export const SearchButton: React.FC<IProps> = props => {
  return (
    <button className="search-button" onClick={props.onClick}>
      Search
    </button>
  );
};

export default SearchButton;
