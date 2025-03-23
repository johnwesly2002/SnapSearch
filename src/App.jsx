import { useState } from 'react'
import SearchComponent from './components/SearchComponent/SearchComponent'
import './App.css'
import SuggestionsComponent from './components/SuggestionsComponent/SuggestionsComponent'
import LastSearchedComponent from './components/lastSearchedComponent/LastSearchedComponent';
function App() {
  const [query, setquery] = useState('');
  const [lastSearched, setlastSearched] = useState(JSON.parse(localStorage.getItem('lastSearched')) || []);
  const [toggle, settoggle] = useState(false);
  const [suggestion, setSuggestions] = useState([]);
  const fetchData = async (query) => {
    try{
      const response = await fetch(`https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json`);
      if(!response.ok){
        throw new Error('Error at response');
      }
      const data = await response.json();
      setSuggestions(data);
      saveSearchQuery(query);
  } catch(error){
    setSuggestions([]);
    console.log(error);
  }
  }
  function saveSearchQuery(query) {
    const lastSearched = JSON.parse(localStorage.getItem('lastSearched')) || [];
    
    lastSearched.push(query);
    
    localStorage.setItem('lastSearched', JSON.stringify(lastSearched));
    setlastSearched(lastSearched);
  }
  const debounce = function(func, delay){
    let timer;
    return function(...args){
      if(timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      },delay);
    }
  }
  const debounceQuery = debounce(fetchData, 1000); 
  return (
    <>
   <div className='main_container'>
    <h1>SnapSearch</h1>
    <SearchComponent debounce={debounceQuery} settoggle={settoggle} toggle={toggle} />
    {suggestion.length != 0 ? <SuggestionsComponent query={query} suggestion={suggestion} /> : toggle ? <LastSearchedComponent searched={lastSearched}  /> : null}
   </div>
   <p>Desgined and Made by John wesly Uchula</p>
   </>
  )
}

export default App
