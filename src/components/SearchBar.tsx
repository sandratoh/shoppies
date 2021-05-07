// Libraries
import { useContext, useState } from 'react';
import axios from 'axios';

// Component
import SearchButton from './SearchButton';

// Material UI Component
import SearchIcon from '@material-ui/icons/Search';

// Helper
import { IMovie, MovieContext } from '../Provider/MovieDataProvider';

// Stylesheet
import './SearchBar.scss';

export const SearchBar = () => {
  const { setSearchResult } = useContext(MovieContext);

  const [input, setInput] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleClick = () => {
    axios
      .get(
        `http://www.omdbapi.com/?s=${input}&type=movie&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
      )
      .then(res => {
        const movieResult: IMovie[] = res.data.Search;
        setSearchResult(movieResult);
      });
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <span className="search-bar--icon">
        <SearchIcon />
      </span>
      <input
        className="search-bar--input"
        value={input}
        onChange={event => setInput(event.target.value)}
      ></input>
      <SearchButton onClick={handleClick} />
    </form>
  );
};

export default SearchBar;
