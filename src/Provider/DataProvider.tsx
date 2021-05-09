// Libraries
import React, { createContext, useEffect, useState } from 'react';

// Interfaces
export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface INominations {
  nominations: IMovie[];
  setNominations: React.Dispatch<React.SetStateAction<IMovie[]>>;
}

interface IResult {
  searchResult: IMovie[];
  setSearchResult: React.Dispatch<React.SetStateAction<IMovie[]>>;
  searchKeyword: string;
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
  noResult: boolean;
  setNoResult: React.Dispatch<React.SetStateAction<boolean>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

interface IDialogAlert {
  openConfirm: boolean;
  setOpenConfirm: React.Dispatch<React.SetStateAction<boolean>>;
  openSubmit: boolean;
  setOpenSubmit: React.Dispatch<React.SetStateAction<boolean>>;
  success: boolean;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IContext extends INominations, IResult, IDialogAlert {}

// Context
export const AppContext = createContext<IContext>({} as IContext);

// Provider
export const DataProvider: React.FC<{}> = props => {
  // Nomination states
  const [nominations, setNominations] = useState<IMovie[]>([]);

  // Result states
  const [searchResult, setSearchResult] = useState<IMovie[]>([]);
  const [input, setInput] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [noResult, setNoResult] = useState(true);

  // Dialog/Alert states
  const [openConfirm, setOpenConfirm] = useState(false);
  const [openSubmit, setOpenSubmit] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setSuccess(false);
  }, [nominations, searchResult]);

  // Export states
  const data = {
    // Nomination
    nominations,
    setNominations,
    // Result
    searchResult,
    setSearchResult,
    searchKeyword,
    setSearchKeyword,
    noResult,
    setNoResult,
    input,
    setInput,
    // Dialog/Alert
    openConfirm,
    setOpenConfirm,
    openSubmit,
    setOpenSubmit,
    success,
    setSuccess,
  };

  return (
    <AppContext.Provider value={data}>{props.children}</AppContext.Provider>
  );
};

export default DataProvider;
