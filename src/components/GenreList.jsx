
import React, { useEffect, useState } from 'react';
import GlobalApi from '../Services/GlobalApi.jsx';

function GenreList({ genreId, selectedGenresName }) {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null); // ✅ Fix: Declare activeIndex state

  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    GlobalApi.getGenreList()
      .then((response) => {
        setGenreList(response.data.results);
      })
      .catch((error) => {
        console.error("Failed to fetch genre list:", error);
      });
  };

  return (
    <div>
      <h2 className='text-[30px] font-bold dark:text-white'>Genre</h2>
      {genreList.map((item, index) => (
        <div
          key={item.id}
          onClick={() => {
            setActiveIndex(index);
            genreId(item.id);
            selectedGenresName(item.name);
          }}
          className={`group flex items-center gap-2 my-2 mb-2 mr-2 cursor-pointer 
            hover:bg-gray-300 p-2 rounded-lg hover:dark:bg-gray-600
            ${activeIndex === index ? 'bg-gray-300 dark:bg-gray-600' : ''}`}
        >
          <img
            src={item.image_background}
            alt={item.name}
            className='w-[40px] h-[40px] object-cover rounded-lg 
              group-hover:scale-105 transition-all ease-out duration-300'
          />
          <h3 className='text-[18px] dark:text-white group-hover:font-bold transition-all ease-out duration-300'>
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default GenreList;




