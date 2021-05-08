// Libraries
import { useContext, useState } from 'react';
import axios from 'axios';

// Component
import SearchButton from './SearchButton';

// Material UI Component
import SearchIcon from '@material-ui/icons/Search';

// Helper
import { IMovie, AppContext } from '../Provider/DataProvider';

// Stylesheet
import './SearchBar.scss';

export const SearchBar: React.FC<{}> = () => {
  const { setSearchResult, setSearchKeyword } = useContext(AppContext);

  const [input, setInput] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleFocus = (event: any) => {
    event.target.select();
  };

  const handleClickIcon = () => {
    document.getElementById('search-input')?.focus();
  };

  const handleClick = () => {
    return axios
      .get(
        `http://www.omdbapi.com/?s=${input}&type=movie&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
      )
      .then(res => {
        const movieResult: IMovie[] = res.data.Search;
        if (movieResult) {
          setSearchResult(movieResult);
          setSearchKeyword(input);
        }
      });
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <span className="search-bar--icon">
        <SearchIcon onClick={handleClickIcon} />
      </span>
      <input
        id="search-input"
        className="search-bar--input"
        value={input}
        onChange={event => setInput(event.target.value)}
        onFocus={handleFocus}
      ></input>
      <SearchButton onClick={handleClick} />
    </form>
  );
};

export default SearchBar;
