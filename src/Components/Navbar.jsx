import React, { useContext } from 'react';
import { AppContext } from '../App';
import { Link } from "react-router-dom";

function Navbar() {
    const { mode, setMode } = useContext(AppContext);
    return (
        <>
        <div className='mx-auto w-full h-12 leading-5 text-2xl font-bold'>Navbar</div>
            <div className='flex justify-between w-10/12 h-12 mx-auto'>
                <Link to="/" className={`text-3xl font-bold ${mode ? 'text-white' : 'text-blue-950'}`}>Home</Link>
                <Link to="/about" className='text-black'>About</Link>
                <Link to="/contact" className='text-black'>Contact</Link>
                <div className='bg-orange-500 p-2 border-2 border-black border-solid w-32 h-12 rounded-xl'>
                    <button onClick={() => setMode(!mode)}>
                        Change theme
                    </button>
                </div>
            </div>


        </>
    );
}
export default Navbar;
