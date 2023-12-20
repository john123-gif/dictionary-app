import './App.scss';
import { useState, useEffect, useContext } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import { fetchWord } from './wordAPI';
import type { DictionaryData } from './wordAPI';
import { Result } from './components/Result';
import { ThemeContext } from './ThemeContext'
import WordNotFound from './components/validation message/WordNotFound';

const App: React.FC = () => {

  const [searchResult, setSearchResult] = useState<DictionaryData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [fontFamily, setFontFamily] = useState<string>('sans-serif');
  
  useEffect(
    () => {
      if(searchResult.length === 0){
        handleSearch('keyboard');
        console.log(searchResult)
      }
    }
  )

  const handleFontFamily = (param: string) => {
    setFontFamily(param);
  }
  
  const context = useContext(ThemeContext);
  const {toggle, setToggle,emptySearchBox} = context;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersDarkMode = mediaQuery.matches;
    setToggle(prefersDarkMode);
  }, [setToggle]);
  
  const handleSearch = async (word: string) => {
    setIsLoading(true);
    const data = await fetchWord(word);
    setSearchResult(data);
    setIsLoading(false);
    const first_object_array: DictionaryData[] = [];
    first_object_array.push(data[0])
    setSearchResult(first_object_array);
    console.log(searchResult)
  }

  return (
    <div className={!toggle?'lightTheme':"darkTheme"} style={{ fontFamily: fontFamily }}>
        <div className="App">
            <Header onChange={handleFontFamily} font={fontFamily}/>
            <Search onSubmit={handleSearch}/>
            { searchResult[0] === undefined && searchResult.length !== 0 ? (
        !emptySearchBox && <WordNotFound />
      ) : (
        <Result result={searchResult} loading={isLoading}/>
      )}
        </div>
    </div>
  )
}

export default App;
