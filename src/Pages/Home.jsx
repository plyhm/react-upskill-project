
import { SearchField } from '../components/comptesting/SearchField';
import { useState } from 'react';

export const Home = () => {
    const [searchResult, setSearchResult] = useState([]);
  return (
    <div className="container">
        <SearchField searchResult = {searchResult} setSearchResult = {setSearchResult}/>
    </div>
    
  )
}

