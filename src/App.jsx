import { useState } from 'react'
import SearchComponent from './components/SearchComponent/SearchComponent'
import './App.css'
import SuggestionsComponent from './components/SuggestionsComponent/SuggestionsComponent'

function App() {
  const [query, setquery] = useState('');
  const [suggestion, setSuggestions] = useState([]);
  const fetchData = async (query) => {
    try{
    const response = await fetch(`https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json`);
    if(!response.ok){
      throw new Error('Error at response');
    }
    const data = await response.json();
    setSuggestions(data);
  } catch(error){
    setSuggestions({AbstractText: 'No Results Found!!' });
    console.log(error);
  }
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
    <SearchComponent debounce={debounceQuery} />
    {suggestion.length != 0 ? <SuggestionsComponent query={query} suggestion={suggestion} /> : ''}
   </div>
   <p>Desgined and Made by John wesly Uchula</p>
   </>
  )
}

export default App
