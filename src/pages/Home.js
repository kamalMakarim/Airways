
import React from 'react';
import Navbar from '../components.js/Navbar';
import highHumidity from '../assets/highHumidity.png';
import mediumHumidity from '../assets/mediumHumidity.png';
import lowHumidity from '../assets/lowHumidity.png';
import highTemp from '../assets/highTemp.png';
import mediumTemp from '../assets/mediumTemp.png';
import lowTemp from '../assets/lowTemp.png';
import airwayLogo from '../assets/airWayLogo.png';

function Home() {
    const cityLog = {
        location: {
            name: 'Bandung'
        }
    };

    const shownCondition = {
        temperature: 18,
        humidity: 80,
        humidityImage: 'humidity-high.jpg',
        temperatureImage: getTemperatureImage(25)
    };
    shownCondition.humidityImage = getHumidityImage(shownCondition.humidity);  

    const pastConditions = [
        
        {
            humidity: 80,
            temperature: 18,
            date: '6-1-2023'
        },
        {
            humidity: 70,
            temperature: 24,
            date: '5-1-2023'
        },
        {
            humidity: 60,
            temperature: 26,
            date: '4-1-2023'
        },
        {
            humidity: 50,
            temperature: 28,
            date: '3-1-2023'
        },
        {
            humidity: 40,
            temperature: 30,
            date: '2-1-2023'
        },
        {
            humidity: 30,
            temperature: 32,
            date: '1-1-2023'
        }
    ];

    const dummyNews = [
        {
            title: 'Cuaca Makasar hari ini',
            image: 'https://akcdn.detik.net.id/community/media/visual/2023/08/18/ilustrasi-hujan_169.jpeg?w=700&q=90',
            link: 'https://www.detik.com/sulsel/berita/d-7057589/prakiraan-cuaca-makassar-hari-ini-27-november-siang-sore-hujan'
        },
        {
          title: 'Cuaca di Surabaya hari ini',
          image: 'https://asset.kompas.com/crops/B9wPU3GXzAoQu7gjnjyM6Zhaz-4=/0x155:800x688/750x500/data/photo/2023/07/11/64ad2793a80c8.jpeg',
          link: 'https://surabaya.kompas.com/read/2023/11/26/050600678/prakiraan-cuaca-di-surabaya-hari-ini-26-november-2023---pagi-hingga-malam'
        },
        {
          title: 'Cuaca di Flores hari ini',
          image: 'https://asset-2.tstatic.net/flores/foto/bank/images/ILUSTRASI-HUJAN.jpg',
          link: 'https://flores.tribunnews.com/2023/11/26/prakiraan-cuaca-flores-hari-ini-minggu-26-november-2023-sebagian-wilayah-hujan'
        }
    ];

    const dummyArticle = [
      {
        title: 'Tips menjaga dehidrasimu',
        image: 'https://health.unl.edu/water101_blog.jpeg',
        link: 'https://health.unl.edu/10-tips-staying-hydrated-summer%C2%A0'
      },
      {
        title: 'Climate Change Explained',
        image: 'https://static01.nyt.com/images/2021/04/15/climate/00cli-faq-cover/00cli-faq-cover-superJumbo.jpg?quality=75&auto=webp',
        link: 'https://www.nytimes.com/article/climate-change-global-warming-faq.html'
      },
      {
        title: 'Understanding Droughts',
        image: 'https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/videos/posters/Droughts%20101%20-%205779778129001',
        link: 'https://education.nationalgeographic.org/resource/understanding-droughts/'
      }
    ];
    return (
        <div className='w-screen h-screen flex flex-col justify-start items-center'>
          <Navbar />
          <div className='w-full'>
            
            <div className="flex flex-col items-center mx-10 my-10 bg-white shadow-lg p-10 rounded-lg"> 
                <img src={airwayLogo} alt="Airway Logo" className="h-32 object-cover" />
                <h1 className="text-4xl font-bold text-center">Hello, Kayla Nadhira </h1>
                <p className="text-lg text-center mt-4">Welcome back to AirWays</p>
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='flex flex-col mx-auto'>
              <h1 className="max-w-1024 text-3xl font-bold text-left mx-10">Near Me</h1> 
              <div className="flex flex-wrap items-start mx-10 mt-3 bg-white shadow-lg p-10 rounded-lg">
                <div className='mx-auto'>
                  <h2 className="text-2xl font-bold mb-4 mx-auto">{cityLog.location.name}</h2>
                  <div className="flex flex-row items-center mx-auto">
                  <p className="text-lg">Temperature:</p>
                      <img src={getTemperatureImage(shownCondition.temperature)} alt="Temperature Image" className="ml-2 max-h-14" />
                      <p className="text-2xl font-bold m-3">{shownCondition.temperature}°C</p>
                  </div>
                  <div className="flex flex-row items-center mx-auto">
                      <p className="text-lg">Humidity:</p>
                      <img src={getHumidityImage(shownCondition.humidity)} alt="Humidity Image" className="ml-2 max-h-14" />
                      <p className="text-2xl font-bold m-3">{shownCondition.humidity}</p>
                  </div>
                </div>
                <div className='mx-auto'>
                  <h3 className="text-2xl font-bold">Past Week</h3>
                  <ul>
                      {pastConditions.map((condition, index) => (
                          <li key={index} className="text-sm" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                              <p className='px-3 py-1'>{condition.date}</p>
                              <p className='px-3 py-1'> {condition.humidity}</p>
                              <img src={getHumidityImage(condition.humidity)} alt="Humidity Image" className="max-h-10" /> 
                              <p className='px-3 py-1'> {condition.temperature}°C</p>
                              <img src={getTemperatureImage(condition.temperature)} alt="Temperature Image" className="max-h-10"/>
                          </li>
                      ))}
                  </ul>
                  </div>
                </div>
              </div>

              <div className='flex flex-col mt-10'>
                <h1 className="max-w-1024 text-3xl font-bold text-left mx-10">News</h1> 
                <div className="flex flex-row mx-10 mt-3 bg-white shadow-lg p-3 rounded">
                  <ul className="flex flex-wrap mx-auto"> 
                    {dummyNews.map((news, index) => (
                      <li key={index} className="flex flex-col mx-auto bg-gray-100 shadow-lg p-5 rounded-lg items-center hover:cursor-pointer hover:bg-gray-200 mb-4" onClick={() => window.location.href = news.link}>
                        <img src={news.image} alt="News Image" style={{ height: 96 }} />
                        <p className="text-md font-bold mt-4">{news.title}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>


              <div className='flex flex-col mt-10'>
                <h1 className="max-w-1024 text-3xl font-bold text-left mx-10">Articles</h1> 
                <div className="flex flex-row mx-10 mt-3 bg-white shadow-lg p-3 rounded">
                  <ul className="flex flex-wrap mx-auto"> 
                    {dummyArticle.map((news, index) => (
                      <li key={index} className="flex flex-col mx-auto bg-gray-100 shadow-lg p-5 rounded-lg items-center hover:cursor-pointer hover:bg-gray-200 mb-4" onClick={() => window.location.href = news.link}>
                        <img src={news.image} alt="News Image" style={{ height: 96 }} />
                        <p className="text-md font-bold mt-4">{news.title}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
          </div>

        
        </div>
    );
}

function getHumidityImage(humidity) {
    if (humidity >= 80) {
        return highHumidity;
    } else if (humidity >= 60) {
        return mediumHumidity;
    } else {
        return lowHumidity;
    }
}

function getTemperatureImage(temperature) {
    if (temperature > 30) {
        return highTemp;
    } else if (temperature > 20) {
        return mediumTemp;
    } else {
        return lowTemp;
    }
}



export default Home;
