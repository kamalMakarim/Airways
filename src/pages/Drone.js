
import { useState } from 'react';
import Navbar from '../components.js/Navbar';
function Drone(props) {
    const drones = [
        
        {
            name: 'Itadori',
            city: 'Jakarta',
            kecamatan: 'Kebayoran Baru',
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.880508821737!2d106.8105473147699!3d-6.243017995476799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf0b8b0b6d1%3A0x2b9b6b0b0b0b0b0b!2sJl.%20Cipaku%20I%20No.1%2C%20RT.1%2FRW.1%2C%20Rw.%20Bar.%2C%20Kec.%20Kby.%20Baru%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012140!5e0!3m2!1sen!2sid!4v1625245444009!5m2!1sen!2sid',
            airQuality: 'Good',
            battery: 100
        },
        {
            name: 'Megumi',
            city: 'Jakarta',
            kecamatan: 'Tanah Abang',
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.880508821737!2d106.8105473147699!3d-6.243017995476799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf0b8b0b6d1%3A0x2b9b6b0b0b0b0b0b!2sJl.%20Cipaku%20I%20No.1%2C%20RT.1%2FRW.1%2C%20Rw.%20Bar.%2C%20Kec.%20Kby.%20Baru%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012140!5e0!3m2!1sen!2sid!4v1625245444009!5m2!1sen!2sid',
            airQuality: 'Good',
            battery: 80
        },
        {
            name: 'Nobara',
            city: 'Jakarta',
            kecamatan: 'Menteng',
            map: '',
            airQuality: 'Good',
            battery: 60
        },
        {
            name: 'Gojo',
            city: 'Jakarta',
            kecamatan: 'Gambir',
            map: '',
            airQuality: 'Good',
            battery: 30
        }

    ];
    const [shownDrone, setShownDrone] = useState(drones[0]);

    return (
        <div className='w-screen h-screen flex flex-col justify-start items-center'>
            <div className="flex flex-wrap items-center mx-10 my-10 bg-white shadow-lg p-10 rounded-lg max-w-500">
                {drones.map((drone, index) => (
                    <div key={index} className='mx-auto'>
                        <div
                            className={`p-8 m-3 w-30 h-30 rounded-md hover:cursor-pointer ${drone.battery >= 80 ? 'bg-green-700 hover:bg-green-800' : drone.battery >= 50 ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-red-500 hover:bg-red-600'}`}
                            onClick={() => setShownDrone(drone)}
                        >
                            <h2 className='text-white text-xl font-semibold w-30'>{drone.name}</h2>
                            <p className='text-white text-3xl font-semi'>{drone.battery}%</p>
                            <p className='text-white text-md font-thin'>in {drone.city}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="x-10 my-0 p-7 border bg-white rounded-xl relative items-center">
                <h2 className='text-xl font-bold'>Details for {shownDrone.name}</h2>
                <p className='text-lg mb-2'>{shownDrone.kecamatan}, {shownDrone.city}</p>
                <p>Air Quality: {shownDrone.airQuality}</p>
                <p>Battery Life: {shownDrone.battery}%</p>
                
                <iframe
                    src={shownDrone.map}
                    width="300"
                    height="400"
                    style={{ border: 0 }}
                    className="relative z-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className='mt-3 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-auto text-center hover:cursor-pointer'>Take Control</div>
            </div>
        </div>
    );
}

export default Drone;