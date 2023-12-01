import { useState } from 'react';
import Base from '../assets/base.png';
import Deploy from '../assets/deploy.png';
import Scan from '../assets/scanning.png';
import Spray from '../assets/spraying.png';
import Auto from '../assets/auto.png';

function Drone(props) {
    const station = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15860.891757015792!2d106.82285224521362!3d-6.365187522452405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec16d2e31e2d%3A0x6709a8bd87240f54!2sPondok%20Cina%2C%20Kecamatan%20Beji%2C%20Kota%20Depok%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1701391689725!5m2!1sid!2sid';
    const [drones, setDrones] = useState([
        
        {
            name: 'Yeager',
            city: 'Jakarta',
            kecamatan: 'Kebayoran Baru',
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31729.247160982595!2d106.78074079576952!3d-6.243175888253753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f16949681833%3A0x7998194c21afe918!2sKec.%20Kby.%20Baru%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1701362859896!5m2!1sid!2sid',
            airQuality: 'Moderate',
            battery: 100,
            status: 'Spraying'
        },
        {
            name: 'Mcqueen',
            city: 'Jakarta',
            kecamatan: 'Tanah Abang',
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31731.53034602184!2d106.78686484573834!3d-6.205374387569568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6a5221aa551%3A0xb1f4d9d25da21eea!2sKecamatan%20Tanah%20Abang%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1701362915521!5m2!1sid!2sid',
            airQuality: 'Good',
            battery: 80,
            status: 'Scanning'
        },
        {
            name: 'Loki',
            city: 'Jakarta',
            kecamatan: 'Menteng',
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15866.07283258812!2d106.8278572451784!3d-6.195147568167869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f43e35e53099%3A0x3e389ed39c2f9bb4!2sKec.%20Menteng%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1701362964909!5m2!1sid!2sid',
            airQuality: 'Good',
            battery: 60,
            status: 'Scanning'
        },
        {
            name: 'Gojo',
            city: 'Jakarta',
            kecamatan: 'Gambir',
            map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15866.669725595359!2d106.80732599288618!3d-6.175258311998381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2df11a6a1%3A0xa0b25af411142292!2sGambir%2C%20Kecamatan%20Gambir%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1701363029976!5m2!1sid!2sid',
            airQuality: 'Bad',
            battery: 30,
            status: 'Deploying'
        }

    ]);
    const [shownDrone, setShownDrone] = useState(drones[0]);
    const [isDeploying, setIsDeploying] = useState(false);

    const locations = {
        "Kebayoran Baru": {
            city: 'Jakarta',
            kecamatan: 'Kebayoran Baru',
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31729.247160982595!2d106.78074079576952!3d-6.243175888253753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f16949681833%3A0x7998194c21afe918!2sKec.%20Kby.%20Baru%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1701362859896!5m2!1sid!2sid',
        },
        "Tanah Abang": {
            city: 'Jakarta',
            kecamatan: 'Tanah Abang',
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31731.53034602184!2d106.78686484573834!3d-6.205374387569568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6a5221aa551%3A0xb1f4d9d25da21eea!2sKecamatan%20Tanah%20Abang%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1701362915521!5m2!1sid!2sid',
        },
        "Menteng": {
            city: 'Jakarta',
            kecamatan: 'Menteng',
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15866.07283258812!2d106.8278572451784!3d-6.195147568167869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f43e35e53099%3A0x3e389ed39c2f9bb4!2sKec.%20Menteng%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1701362964909!5m2!1sid!2sid'
        },
        "Gambir": {
            city: 'Jakarta',
            kecamatan: 'Gambir',
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15866.669725595359!2d106.80732599288618!3d-6.175258311998381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2df11a6a1%3A0xa0b25af411142292!2sGambir%2C%20Kecamatan%20Gambir%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1701363029976!5m2!1sid!2sid',
        }
    };
    const [originalLocations, setOriginalLocations] = useState(drones.map(drone => ({ name: drone.name, map: drone.map, city: drone.city, kecamatan: drone.kecamatan })));

    const updateDroneInList = (updatedDrone) => {
        const updatedDrones = drones.map(drone => drone.name === updatedDrone.name ? updatedDrone : drone);
        setDrones(updatedDrones);
    };

    const handleReturnToBase = () => {
        const updatedDrone = { ...shownDrone, map: station, city: 'Depok', kecamatan: 'Pondok Cina', airQuality: 'Moderate', status: 'At base' };
        setShownDrone(updatedDrone);
        updateDroneInList(updatedDrone);
    };

    const [selectedLocation, setSelectedLocation] = useState('');

    // Function to update the selected location
    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
    };

    // Updated handleDeploy to use selected location
    const handleDeploy = () => {
        if (!selectedLocation) {
            alert('Please select a location first');
            return;
        }

        const locationDetails = locations[selectedLocation];
        if (locationDetails) {
            const updatedDrone = {
                ...shownDrone,
                map: locationDetails.map,
                city: locationDetails.city,
                kecamatan: locationDetails.kecamatan,
                status: 'Deploying'
            };
            setShownDrone(updatedDrone);
            updateDroneInList(updatedDrone);
        }
    };

    const handleSpray = () => {
        setShownDrone({ ...shownDrone, status: 'Spraying' });
    };

    const handleScan = () => {
        setShownDrone({ ...shownDrone, status: 'Scanning' });
    };

    const handleAuto = () => {
        setShownDrone({ ...shownDrone, status: 'Auto' });
    };

    const getStatusImage = (status) => {
        switch (status) {
            case 'Spraying':
                return Spray;
            case 'Scanning':
                return Scan;
            case 'Deploying':
                return Deploy;
            case 'Auto':
                return Auto;
            default:
                return Base;
        }
    };

    return (
        <div className='w-screen h-screen flex flex-col justify-start items-center'>
            <div className="flex flex-wrap items-center mx-10 my-10 bg-white shadow-lg p-10 rounded-lg max-w-500">
                {drones.map((drone, index) => (
                    <div key={index} className='mx-auto'>
                        <div
                            className={`p-8 m-3 w-40 h-30 rounded-md hover:cursor-pointer ${drone.battery >= 80 ? 'bg-green-700 hover:bg-green-800' : drone.battery >= 50 ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-red-500 hover:bg-red-600'}`}
                            onClick={() => setShownDrone(drone)}
                        >
                            <h2 className='text-white text-xl font-semibold w-30'>{drone.name}</h2>
                            <p className='text-white text-3xl font-semi'>{drone.battery}%</p>
                            <p className='text-white text-md font-thin'>in {drone.kecamatan.length > 7 ? `${drone.kecamatan.substring(0, 7)}...` : drone.kecamatan}</p>
                            <p className='text-white text-md font-thin'>{drone.status}</p>
                        </div>
                    </div>
                ))}
            </div>
    
            <div className="x-10 my-0 p-7 border bg-white rounded-xl relative items-center w-4/5">
                <h2 className='text-xl font-bold'>Details for {shownDrone.name}</h2>
                <p className='text-lg mb-2'>{shownDrone.kecamatan}, {shownDrone.city}</p>
                
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-col justify-between items-start'>
                        <p>Air Quality  : {shownDrone.airQuality}</p>
                        <p>Battery Life : {shownDrone.battery}%</p>
                        <p>Status       : {shownDrone.status}</p>
                        {/* Location Selection Dropdown */}
                        {shownDrone.status === 'At base' && (
                            <div className='w-max'>
                                <select value={selectedLocation} onChange={handleLocationChange} className='mt-3 bg-gray-200 text-black py-1 px-4 rounded mx-auto text-center select-dropdown'>
                                    <option value="">Select a Location</option>
                                    {Object.keys(locations).map((locationKey) => (
                                        <option key={locationKey} value={locationKey}>{locations[locationKey].kecamatan}</option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </div>
                    <img src={getStatusImage(shownDrone.status)} alt="Status" className="h-20 ml-4" />
                </div>

                
                <iframe
                    src={shownDrone.map}
                    width="100%" 
                    height="300"
                    style={{ border: 0 }}
                    className="z-0 rounded-xl mt-3"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                
                
    
                <div className='mt-3 bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-4 rounded mx-auto text-center hover:cursor-pointer' onClick={shownDrone.status === 'At base' ? handleDeploy : handleReturnToBase}>
                    {shownDrone.status === 'At base' ? 'Deploy' : 'Return to base'}
                </div>
                {shownDrone.status !== 'At base' && (
                    <>
                        <div className='mt-3 bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-4 rounded mx-auto text-center hover:cursor-pointer' onClick={handleSpray}>Spray</div>
                        <div className='mt-3 bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-4 rounded mx-auto text-center hover:cursor-pointer' onClick={handleScan}>Scan</div>
                        <div className='mt-3 bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-4 rounded mx-auto text-center hover:cursor-pointer' onClick={handleAuto}>Auto</div>
                    </>
                )}
            </div>
        </div>
    );
}
export default Drone;
