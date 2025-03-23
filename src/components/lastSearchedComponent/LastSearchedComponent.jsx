import React from 'react'
import { RxCountdownTimer } from "react-icons/rx";
import "./styles.css";
export default function LastSearchedComponent({searched}) {
  return (
    <div className='lastsearched_container'>
    {searched.slice(-5).map((search, index) => (
       <div className='suggestion' key={index}>
        <div className="SearchIcon">
        <RxCountdownTimer size={20} color="black" />
        </div>
        <h5 style={{ color: "black" }}>
            {search}
        </h5>
       </div>
    ))}
    </div>
  )
}
