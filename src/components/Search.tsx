import React, { useContext, useState } from 'react';
import searchLogo from '../assets/images/icon-search.svg';
import '../assets/styles/Search.scss';
import EmptyText from './validation message/EmptyText';

import { ThemeContext } from '../ThemeContext';


interface searchProps{
  onSubmit: (searchTerm: string) => void;
}

const Search: React.FC<searchProps> = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('keyboard');
  const context = useContext(ThemeContext);
   const {emptySearchBox,setEmptySearchBox}= context;


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    validate();
    onSubmit(searchTerm);
    
    
  }


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };


  const validate=()=>{
    if (searchTerm.length===0){
    setEmptySearchBox(true)
    }
    else{
     setEmptySearchBox(false)
    }
  }

  return (
    <div className='responsiveForm'>
    <form onSubmit={handleSubmit} className={!emptySearchBox?'search':'search validate'}>
      <input
        type="text"
        placeholder="Search for a word..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit"><img src={searchLogo} alt="Search Logo" /></button>
    </form>
     {emptySearchBox && <EmptyText/>}
    </div>
  );
};

export default Search;
