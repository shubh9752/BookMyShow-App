import React,{useEffect, useState} from 'react';
//importing axios for api fetching
import axios from "axios";

import DefaultHoc from '../hoc/DefaultHoc';
//components
import EntertainCard from '../components/Entertertainment/EntertainCard';
import HeroCrousel from '../components/HeroCrousel/HeroCrousel';
import PosterSlider from '../components/PosterSlider/PosterSlider';

const HomePage = () => {
  const [recommendedMovie,setRecommendedMovie]=useState([]);
  const [premiumMovie,setPremiumMovie]=useState([]);
  const [onlineStreamEvent,setOnlineStreamEvents]=useState([]);

  useEffect(() => {
    const reqTopRated = async () => {
      const getTopRated = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=b479eccb202a0c67a6a9ce40a7809c75"
      );
      setRecommendedMovie(getTopRated.data.results);
    };

    reqTopRated();
  }, []);
  return (
    <>
    <HeroCrousel />
    <div className="container mx-auto px-4 md:px-12 my-8">
      <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3 " >The best of Entertertainment</h1>
      <EntertainCard />
    </div>
    <div className='container mx-auto px-4 md:px-12 my-8'>
      <PosterSlider
        title="Recommended Movies"
        subtitle="List of Recommended Movies"
        posters={recommendedMovie}
        isDark={false}
       />
    </div>
    <div className='bg-premier-800 py-12'>
      <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-5'>
      <div className='hidden md:flex'>
      <img src='https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png' alt='Rupay' className='w-full h-full' />

      </div>
      <PosterSlider 
        title="Premiers"
            subtitle="Brand new releases every Friday"
            posters={premiumMovie}
            isDark={true}
      />

      </div>
    </div>
    <div className="container mx-auto px-4 md:px-12 my-8">
      <PosterSlider
                         title="Online Streaming Event"
          subtitle=""
          posters={onlineStreamEvent}
          isDark={false}
      />
    </div>
    </>
  )
}

export default DefaultHoc(HomePage);