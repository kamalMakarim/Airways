import React, { useState } from 'react';
import Navbar from '../components.js/Navbar';
import PetaBandung from '../assets/petaBandung.png';
import PetaJakarta from '../assets/petaJakarta.png';
import PetaSurabaya from '../assets/petaSurabaya.png';
import Good from '../assets/good.jpg';  
import Moderate from '../assets/modderate.jpg';
import Bad from '../assets/bad.jpg';
import PetaYogyakarta from '../assets/petaYogyakarta.png';



function Find(props) {
    const cityLog = [
        {
            name: 'Bandung',
            humidity: 80,
            temperature: 28,
            airQuality: 'Good',
            map: PetaBandung
        },
        {
            name: 'Jakarta',
            humidity: 50,
            temperature: 35,
            airQuality: 'Bad',
            map: PetaJakarta
        },
        {
            name: 'Surabaya',
            humidity: 100,
            temperature: 30,
            airQuality: 'Moderate',
            map: PetaSurabaya
        },
        {
            name: 'Yogyakarta',
            humidity: 70,
            temperature: 25,
            airQuality: 'Moderate',
            map: PetaYogyakarta
        }
    ];

    const [shownCity, setShownCity] = useState(cityLog[0]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredCities = searchQuery !== '' ? cityLog.filter((city) =>
        city.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) : [];

    
    return (
        <div className='w-screen h-screen flex flex-col justify-start items-center'>
            <div className="mx-10 my-10 bg-white shadow-lg p-10 rounded-lg w-4/5">
                <div className="flex flex-col">
                    <input
                        type="text"
                        placeholder="Search city..."
                        value={searchQuery}
                        onChange={handleSearch}
                        className="p-2 mb-4 border border-gray-300 rounded"
                    />
                    {filteredCities.map((city, index) => (
                        <div
                            key={index}
                            className={`p-2 cursor-pointer ${shownCity.name === city.name ? 'bg-gray-200' : ''}`}
                            onClick={() => {
                                setShownCity(city);
                                setSearchQuery('');
                            }}
                        >
                            {city.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className="mx-10 my-10 bg-white shadow-lg p-10 rounded-lg">
                <div className='flex flex-row items-center'>
                    <div className='flex flex-col w-11/12'> 
                        <p className='text-bold text-2xl mb-2'>{shownCity.name}</p>
                        <p>Air Quality: {shownCity.airQuality}</p>
                        <p>Humidity: {shownCity.humidity}</p>
                        <p>Temperature: {shownCity.temperature}C</p>
                    </div>
                    <img src={getImage(shownCity.airQuality)} alt="Air Quality" className="max-h-10 ml-4" />
                </div>
                <img src={shownCity.map} alt="Peta" className="mt-4" />
            </div>
        </div>
    );
}

function getImage(airQuality) {
    if (airQuality === 'Good') {
        return Good;
    } else if (airQuality === 'Moderate') {
        return Moderate;
    } else if (airQuality === 'Bad') {
        return Bad;
    } else {
        return null;
    }
}

export default Find;
  