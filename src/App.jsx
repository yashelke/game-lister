// import {  useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// // import {BrowserRouter,Routes,Route} from "react-router-dom"
// import './App.css'
// import Home from './Pages/Home.jsx'
// import Header from './components/Header.jsx'
// import { ThemeContext } from './Context/ThemeContext.jsx'
// import { motion, AnimatePresence } from 'framer-motion';
// import PathDrawing from './components/PathDrawing.jsx'


// function App() {
//   const [count, setCount] = useState(0)
//   const [theme,setTheme]=useState('light')

//   useEffect(() => {
//     setTheme(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark');
//   },[])

//   return (
//     <>
  
//     <div className='h-screen w-full flex items-center justify-center'>
//       <PathDrawing />
//     </div>

//     <ThemeContext.Provider value={{theme,setTheme}}>
//         <div className={`${theme} ${theme === 'dark' ? 'bg-[#1a1a1a]' :null} h-[100vh]`}>
//         <Header />
//         <Home />
//       </div>
//       </ThemeContext.Provider>

//      </>
//   )
// }


// export default App;

// import { useEffect, useState } from 'react';
// import './App.css';
// import Home from './Pages/Home.jsx';
// import Header from './components/Header.jsx';
// import PathDrawing from './Pages/PathDrawing.jsx';
// import { ThemeContext } from './Context/ThemeContext.jsx';
// import { AnimatePresence, motion } from 'framer-motion';

// function App() {
//   const [theme, setTheme] = useState('dark');
//   const [showAnimation, setShowAnimation] = useState(true);

//   useEffect(() => {
//     setTheme(localStorage.getItem('theme') || 'dark');

//     // After 4s, hide PathDrawing and show next screen
//     const timer = setTimeout(() => {
//       setShowAnimation(false);
//     }, 4000); // Adjust this duration to match your animation

//     return () => clearTimeout(timer);
//   }, []);

//   return (

  
// {/* <ThemeContext.Provider value={{ theme, setTheme }}>
//       <div className={`min-h-screen w-full ${theme === 'dark' ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
//         <AnimatePresence mode="wait">
//           {showAnimation ? (
//             <motion.div
//               key="intro"
//               initial={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 1 }}
//               className="h-screen w-full flex items-center justify-center"
//             >
//               <PathDrawing />
//             </motion.div>
//           ) : (
//             <motion.div
//               key="main"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="h-full w-full"
//             >
//               <Header />
//               <Home />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </ThemeContext.Provider> */}



    



    
//   );
// }

// export default App;


import { useEffect, useState } from 'react';
import './App.css';
import Home from './Pages/Home.jsx';
import Header from './components/Header.jsx';
import PathDrawing from './Pages/PathDrawing.jsx';
import { ThemeContext } from './Context/ThemeContext.jsx';
import { AnimatePresence, motion } from 'framer-motion';


function App() {
  const [theme, setTheme] = useState('dark');
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    setTheme(storedTheme || 'dark');

    // Show intro animation for 4 seconds
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="min-h-screen w-full overflow-x-hidden">
        <AnimatePresence mode="wait">
          {showAnimation ? (
            <motion.div
              key="intro"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="h-screen w-full flex items-center justify-center"
            >
              <PathDrawing />
            </motion.div>
          ) : (
            <motion.div
              key="main"
              initial={{ opacity: 0, scale: 0.98, rotateY: 10, filter: 'blur(6px)' }}
              animate={{ opacity: 1, scale: 1, rotateY: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.95, rotateY: -10, filter: 'blur(6px)' }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className={`
                ${theme}
                min-h-screen w-full transition-colors duration-500
                ${theme === 'dark'
                  ? 'bg-gradient-to-br from-[#1a1a1a] via-[#2c2c2c] to-[#1a1a1a] bg-[length:200%_200%] animate-gradient-x text-white shadow-xl shadow-cyan-500/10'
                  : 'bg-white text-black'}
              `}
   
            >
              <Header />
              <Home />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;






















{/* <ThemeContext.Provider value={{ theme, setTheme }}>
  <AnimatePresence mode="wait">
    <motion.div
      key={theme} // triggers re-animation on theme change
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className={`
        ${theme}
        h-[100vh] w-full transition-colors duration-500
        ${theme === 'dark'
          ? 'bg-gradient-to-r from-[#1a1a1a] via-[#2c2c2c] to-[#1a1a1a] bg-[length:200%_200%] animate-gradient-x text-white'
          : 'bg-white text-black'}
      `}
    >
      <Header />
      <Home />
    </motion.div>
  </AnimatePresence>
</ThemeContext.Provider> */}
{/* 
Blur Animation with Framer Motion */}

{/* <ThemeContext.Provider value={{ theme, setTheme }}>
  <AnimatePresence mode="wait">
    <motion.div
      key={theme}
      initial={{ opacity: 0, scale: 0.98, rotateY: 10, filter: 'blur(6px)' }}
      animate={{ opacity: 1, scale: 1, rotateY: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 0.95, rotateY: -10, filter: 'blur(6px)' }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className={`
        ${theme}
        h-[100vh] w-full transition-colors duration-500 overflow-x-hidden
        ${theme === 'dark'
          ? 'bg-gradient-to-br from-[#1a1a1a] via-[#2c2c2c] to-[#1a1a1a] bg-[length:200%_200%] animate-gradient-x text-white shadow-xl shadow-cyan-500/10'
          : 'bg-white text-black'}
      `}
    >
      <Header />
      <Home />
    </motion.div>
  </AnimatePresence>
</ThemeContext.Provider> */}

   





// bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]


