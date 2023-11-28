import React from 'react';
import Navbar from '../components.js/Navbar';
import PetaBandung from '../assets/PetaBandung.png';

function Find() {
    return (
        <div className='w-screen h-screen flex flex-col justify-start items-center'>
            <Navbar />
            <div className="flex flex-col items-center mx-10 my-10 bg-gray-100 shadow-lg p-10 rounded-lg">
                <p>Bandung</p>
                <img src={PetaBandung} alt="Peta Bandung" />
                <p>Humidity : 100</p>
                <p>Temperature : 100C</p>
            </div>
        </div>
    );
}

export default Find;
  