import React, { useContext } from 'react';
import { AppContext } from '../App'; 

function Home() {
    const { mode} = useContext(AppContext);
  return (
    <div className={`text-3xl font-bold ${mode ? 'text-white' : 'text-blue-950'}`}>
    Home page
  </div>
  )
}

export default Home