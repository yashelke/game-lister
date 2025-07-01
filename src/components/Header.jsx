import React, { useState } from 'react';
import img1 from "../assets/images/img1.png";
import { FaSearch } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoSunny } from "react-icons/io5";
import { ThemeContext } from '../Context/ThemeContext.jsx';
import { useEffect } from 'react';
function Header() {
  const [toggle, setToggle] = useState(true);
  const {theme,setTheme} = React.useContext(ThemeContext);

  useEffect(()=>{
    console.log("Theme is: ",theme);
  }
  ,[])

  return (
    <div className='flex items-center p-3'>
      <img src={img1} width={60} height={60} alt="logo" />

      <div className='flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full'>
        <FaSearch />
        <input
          placeholder="Search Games"
          type="text"
          className='px-2 bg-transparent outline-none text-black placeholder:text-black'

        />
      </div>

      <div>
        {theme === 'light' ? (
          <BsFillMoonStarsFill
            className='text-[30px]  text-black p-1 rounded-full cursor-pointer'
            onClick={() => {setTheme('dark'); localStorage.setItem('theme', 'dark');}}
          />
        ) : (
          <IoSunny
            className='text-[30px] bg-slate-200 text-black p-1 rounded-full cursor-pointer'
            onClick={() => {setTheme('light'); localStorage.setItem('theme', 'light');}}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
