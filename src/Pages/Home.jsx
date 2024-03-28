
import { SearchField } from '../components/comptesting/SearchField'
import { SearchResultComp } from '../components/comptesting/SearchResultComp';
import { SearchResultList } from '../components/comptesting/SearchResultList'
import { useState } from 'react';

export const Home = () => {
    const [searchResult, setSearchResult] = useState([]);
  return (
    <div>
        <SearchField setSearchResult = {setSearchResult}/>
        <SearchResultList searchResult = {searchResult}/>
        {/* <SearchResultComp /> */}
    </div>
    
  )
}

