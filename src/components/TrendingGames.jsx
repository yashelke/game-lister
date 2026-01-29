import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext.jsx';

function TrendingGames({gameList}) {
      const { theme } = useContext(ThemeContext);
      const x = ;

useEffect(()=>
{
    console.log(gameList)
},[])




  return (
    <div className='mt-5 hidden md:block'>

      <h2>We are performing DevOps.</h2>
        <h2
         className={`font-bold text-[30px] ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500 bg-clip-text text-transparent'
          : 'text-black'
      }`}
        >Trending Games</h2>
    
    <div className=' mt-5 hidden md:grid md:grid-cols-3 gap-4 lg:grid-cols-4 '>
        {gameList.map((item,index)=> index<4 &&(
            <div className='bg-[#76a8f75e] rounded-lg group
            hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer '>
                <img src={item.background_image}
                 className='h-[270px] rounded-t object-cover'/>
                <h2 className=' p-2 dark:text-white text-[20px] font-bold'>{item.name}</h2>
                </div>
        )
    
        )}
    </div>
    </div>
  )
}

export default TrendingGames