import React, { useContext } from 'react';
import { AppContext } from '../App'; 

function About() {
    const { mode } = useContext(AppContext);

    return (
        <>
            <div className={`text-3xl font-bold ${mode ? 'text-white' : 'text-blue-950'}`}>
                About page
            </div>
           
        </>
    );
}

export default About;
