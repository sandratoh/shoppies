// Libraries
import React, { createContext, useState } from 'react';

// Interfaces
export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface IContext {
  nominations: IMovie[];
  setNominations: React.Dispatch<React.SetStateAction<IMovie[]>>;
  searchResult: IMovie[];
  setSearchResult: React.Dispatch<React.SetStateAction<IMovie[]>>;
  searchKeyword: string;
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
  openConfirm: boolean;
  setOpenConfirm: React.Dispatch<React.SetStateAction<boolean>>;
  openSubmit: boolean;
  setOpenSubmit: React.Dispatch<React.SetStateAction<boolean>>;
  noResult: boolean;
  setNoResult: React.Dispatch<React.SetStateAction<boolean>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

// Context
export const AppContext = createContext<IContext>({} as IContext);

// Provider
export const DataProvider: React.FC<{}> = props => {
  const [nominations, setNominations] = useState<IMovie[]>([]);

  const [searchResult, setSearchResult] = useState<IMovie[]>([]);

  const [searchKeyword, setSearchKeyword] = useState<string>('');

  const [openConfirm, setOpenConfirm] = useState(false);
  const [openSubmit, setOpenSubmit] = useState(false);

  const [noResult, setNoResult] = useState(true);

  const [input, setInput] = useState('');

  const data = {
    nominations,
    setNominations,
    searchResult,
    setSearchResult,
    searchKeyword,
    setSearchKeyword,
    openConfirm,
    setOpenConfirm,
    openSubmit,
    setOpenSubmit,
    noResult,
    setNoResult,
    input,
    setInput,
  };

  return (
    <AppContext.Provider value={data}>{props.children}</AppContext.Provider>
  );
};

export default DataProvider;
