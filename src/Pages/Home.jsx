// import React from 'react'
// import GenreList from '../components/GenreList.jsx';
// import { useEffect,useState } from 'react';
// import GlobalApi from '../Services/GlobalApi.jsx';

// function Home() {
//   const [allGamesList, setAllGamesList] = useState();
// useEffect(()=>
// {
//   getAllGamesList();

// },[])
//   const getAllGamesList=()=>
//   {
//     GlobalApi.getAllGames().then((response)=>
//     {
//       setAllGamesList(response.data.results)
//     })
//   }
//   return (
//   <div className='grid grid-cols-4 px-8'>
//     <div className=' hidden md:block'>
//       <GenreList />
//     </div>
//     <div className='col-span-4 md:col-span-3 bg-blue-500'>
      
//       </div>
//   </div>
//   )
// }

// export default Home

import React, { useEffect, useState } from 'react';
import GenreList from '../components/GenreList.jsx';
import GlobalApi from '../Services/GlobalApi.jsx';
import Banner from '../components/Banner.jsx';
import TrendingGames from '../components/TrendingGames.jsx';
import GamesByGenreId from '../components/GamesByGenreId.jsx';
function Home() {
  const [allGamesList, setAllGamesList] = useState();
  const [gameListByGenres,setGameListByGenres]=useState([]);
  const [selectedGenresName, setSelectedGenresName] = useState('Action');

  useEffect(() => {
    getAllGamesList();
    getGameListByGenreId(4); 
  }, []);

  const getAllGamesList = () => {
    GlobalApi.getAllGames()
      .then((response) => {
        setAllGamesList(response.data.results);
       
      })
      .catch((error) => {
        console.error("Failed to fetch games list:", error);
      });
  };

  const getGameListByGenreId=(id)=>
  {
    console.log("GenreId:",id)
    GlobalApi.getGameListByGenreId(id).then((response)=>
    {
      console.log("Game list by genre id: ",response.data.results);
       setGameListByGenres(response.data.results);
    })

  }

  return (
    <div className='grid grid-cols-4 px-8'>
      <div className='hidden md:block'>
        <GenreList genreId={(genreId)=>
          {
            getGameListByGenreId(genreId);
          }
        } selectedGenresName={(name)=>setSelectedGenresName(name)} />
      </div>
      <div className='col-span-4 md:col-span-3 '>
   {allGamesList?.length>0?
   <div>
    <Banner gameBanner={allGamesList[0]} />
    <TrendingGames gameList={allGamesList} />
  <GamesByGenreId gameList={gameListByGenres} 
                  selectedGenresName={selectedGenresName} />
    </div>
    :null
   }
      </div>



    </div>
  );
}

export default Home;
