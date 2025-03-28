import React from 'react';
import  './styles.css';
import { IoIosSearch } from "react-icons/io";
import { MdOutlineSettingsVoice } from "react-icons/md";
export default function SearchComponent({ debounce, settoggle, toggle}) {
  return (
    <div className='search_bar'>
      <IoIosSearch size={25} color='black' />
      <input type='text' placeholder='Search SnapSearch' onClick={() => settoggle(true)} onChange={(e) => {
        debounce(e.target.value.toLowerCase());
        }} />
      <MdOutlineSettingsVoice size={25} color='black' data-tooltip-id="voice-tooltip" />
    </div>
  )
}
