"use client";
import React from "react";
import { motion } from "framer-motion"; // ✅ Correct import

// const draw = {
//   hidden: { pathLength: 0, opacity: 0 },
//   visible: (i) => {
//     const delay = i * 0.5;
//     return {
//       pathLength: 1,
//       opacity: 1,
//       transition: {
//         pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
//         opacity: { delay, duration: 0.01 },
//       },
//     };
//   },
// };

const shape = {
  strokeWidth: 10,
  strokeLinecap: "round",
  fill: "transparent",
};

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = i * 0.4;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "tween", duration: 1.5, ease: "easeInOut" },
        opacity: { delay, duration: 0.3 },
      },
    };
  },
};


const PathDrawing = () => {
  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center">
    {/* <motion.svg
             className="w-full h-full"
            viewBox="0 0 600 600"
            initial="hidden"
            animate="visible"
            style={{ ...image, backgroundColor: "#0f0c29" }}
        > */}
            
            {/* <motion.circle
                className="circle-path"
                cx="100"
                cy="100"
                r="80"
                stroke="#ff0088"
                variants={draw}
                custom={1}
                style={shape}
            />
            <motion.line
                x1="220"
                y1="30"
                x2="360"
                y2="170"
                stroke="#8df0cc"
                variants={draw}
                custom={2}
                style={shape}
            />
            <motion.line
                x1="220"
                y1="170"
                x2="360"
                y2="30"
                stroke="#8df0cc"
                variants={draw}
                custom={2.5}
                style={shape}
            />
            <motion.rect
                width="140"
                height="140"
                x="410"
                y="30"
                rx="20"
                stroke="#0d63f8"
                

                variants={draw}
                custom={3}
                style={shape}
            />
            <motion.circle
                cx="100"
                cy="300"
                r="80"
                stroke="#0d63f8"
                variants={draw}
                custom={2}
                style={shape}
            />
            <motion.line
                x1="220"
                y1="230"
                x2="360"
                y2="370"
                stroke="#ff0088"
                custom={3}
                variants={draw}
                style={shape}
            />
            <motion.line
                x1="220"
                y1="370"
                x2="360"
                y2="230"
                stroke="#ff0088"
                 
                custom={3.5}
                variants={draw}
                style={shape}
            />
            <motion.rect
                width="140"
                height="140"
                x="410"
                y="230"
                rx="20"
                stroke="#8df0cc"
                custom={4}
                variants={draw}
                style={shape}
            />
            <motion.circle
                cx="100"
                cy="500"
                r="80"
                stroke="#8df0cc"
                variants={draw}
                custom={3}
                style={shape}
            />
            <motion.line
                x1="220"
                y1="430"
                x2="360"
                y2="570"
                stroke="#0d63f8"
                variants={draw}
                custom={4}
                style={shape}
            />
            <motion.line
                x1="220"
                y1="570"
                x2="360"
                y2="430"
                stroke="#0d63f8"
                variants={draw}
                custom={4.5}
                style={shape}
            />
            <motion.rect
                width="140"
                height="140"
                x="410"
                y="430"
                rx="20"
                stroke="#ff0088"
                variants={draw}
                custom={5}
                style={shape}
            />
        </motion.svg> */}

       {/* <motion.div
  initial="hidden"
  animate="visible"
  className="w-screen h-screen flex flex-col items-center justify-center"
  style={{ backgroundColor: "#0f0c29" }}
>

  <motion.svg
    viewBox="0 0 800 300"
    className="w-full max-w-[800px]"
  >
    
    <motion.polygon
      points="100,180 70,230 130,230"
      stroke="#00ffae"
      variants={draw}
      custom={1}
      style={shape}
    />

    
    <motion.circle
      cx="220"
      cy="205"
      r="30"
      stroke="#ff4d4d"
      variants={draw}
      custom={1.5}
      style={shape}
    />

 
    <motion.line
      x1="300"
      y1="180"
      x2="340"
      y2="230"
      stroke="#0099ff"
      variants={draw}
      custom={2}
      style={shape}
    />
    <motion.line
      x1="340"
      y1="180"
      x2="300"
      y2="230"
      stroke="#0099ff"
      variants={draw}
      custom={2.2}
      style={shape}
    />

   
    <motion.rect
      x="390"
      y="180"
      width="60"
      height="60"
      rx="8"
      stroke="#ff66cc"
      variants={draw}
      custom={2.5}
      style={shape}
    />
  </motion.svg>

  
  <motion.h1
    variants={{
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          delay: 2.8,
          duration: 1,
          ease: "easeOut"
        }
      }
    }}
    className="text-white text-5xl font-bold mt-8 tracking-widest"
  >
    YS GAMING
  </motion.h1>
</motion.div> */}

{/* <motion.div
  initial="hidden"
  animate="visible"
  className="w-screen h-screen flex flex-col items-center justify-center"
  style={{ backgroundColor: "#0f0c29" }}
>
 
  <motion.svg
    viewBox="0 0 1000 400"
    className="w-full max-w-[1000px] h-[70  vh]"
  >
  
    <motion.polygon
    //   points="150,220 100,300 200,300"
    // points="150,200 90,300 210,300"

      stroke="#00ffae"
      variants={draw}
      custom={1}
      style={shape}
    />

    <motion.circle
      cx="330"
      cy="260"
      r="50"
      stroke="#ff4d4d"
      variants={draw}
      custom={1.5}
      style={shape}
    />


<motion.line
  x1="440"
  y1="210"
  x2="540"
  y2="310"
  stroke="#0099ff"
  variants={draw}
  custom={2}
  style={shape}
/>

<motion.line
  x1="540"
  y1="210"
  x2="440"
  y2="310"
  stroke="#0099ff"
  variants={draw}
  custom={2.2}
  style={shape}
/>
   

   
    <motion.rect
      x="600"
      y="220"
      width="100"
      height="100"
      rx="12"
      stroke="#ff66cc"
      variants={draw}
      custom={2.5}
      style={shape}
    />
  </motion.svg>

  <motion.h1
    variants={{
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          delay: 3,
          duration: 1,
          ease: "easeOut"
        }
      }
    }}
    className="text-white text-6xl font-extrabold mt-10 tracking-widest"
  >
    YS GAMING
  </motion.h1>
</motion.div> */}

<motion.div
  initial="hidden"
  animate="visible"
  className="w-screen h-screen flex flex-col items-center justify-center"
  style={{ backgroundColor: "#0f0c29" }}
>
  <motion.svg
    viewBox="0 0 1000 400"
    className="w-full max-w-[1000px] h-[70vh]"
  >
    {/* Triangle - balanced */}
    <motion.polygon
      points="150,180 90,300 210,300"
      stroke="#00ffae"
      variants={draw}
      custom={1}
      style={shape}
    />

    {/* Circle - balanced */}
    <motion.circle
      cx="340"
      cy="240"
      r="60"
      stroke="#ff4d4d"
      variants={draw}
      custom={1.5}
      style={shape}
    />

    {/* Cross - balanced */}
    <motion.line
      x1="460"
      y1="190"
      x2="560"
      y2="290"
      stroke="#0099ff"
      variants={draw}
      custom={2}
      style={shape}
    />
    <motion.line
      x1="560"
      y1="190"
      x2="460"
      y2="290"
      stroke="#0099ff"
      variants={draw}
      custom={2.2}
      style={shape}
    />

    {/* Square - balanced */}
    <motion.rect
      x="630"
      y="190"
      width="120"
      height="120"
      rx="14"
      stroke="#ff66cc"
      variants={draw}
      custom={2.5}
      style={shape}
    />
  </motion.svg>

  <motion.h1
    variants={{
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          delay: 3,
          duration: 1,
          ease: "easeOut"
        }
      }
    }}
    className="text-white text-6xl font-extrabold mt-10 tracking-widest rainbow-text"
  >
    YS GAMING
  </motion.h1>
</motion.div>


        </div>
    )
}

const image = {
  width: "100%",
  height: "100%",
};

// const shape = {
//   strokeWidth: 10,
//   strokeLinecap: "round",
//   fill: "transparent",
// };
export default PathDrawing;



















{/* <defs>
    <filter id="neon-glow-pink" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#ff0088" />
      <feDropShadow dx="0" dy="0" stdDeviation="12" floodColor="#ff66aa" />
    </filter>


    <filter id="neon-glow-magenta" x="-100%" y="-100%" width="300%" height="300%">

  <feDropShadow dx="0" dy="0" stdDeviation="2" flood-color="#ff00ff" flood-opacity="1" />
 
  <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#ff66cc" flood-opacity="0.8" />
 
  <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#cc00ff" flood-opacity="0.7" />

  <feDropShadow dx="0" dy="0" stdDeviation="12" flood-color="#ffb3ff" flood-opacity="0.5" />
</filter>

<filter id="neon-glow-gold" x="-100%" y="-100%" width="300%" height="300%">
  <feDropShadow dx="0" dy="0" stdDeviation="2" flood-color="#ffd700" flood-opacity="1" />
  <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#ffcc00" flood-opacity="0.8" />
  <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#ffaa00" flood-opacity="0.6" />
  <feDropShadow dx="0" dy="0" stdDeviation="12" flood-color="#fff5cc" flood-opacity="0.4" />
</filter>


    <filter id="neon-glow-blue" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#0d63f8" />
      <feDropShadow dx="0" dy="0" stdDeviation="12" floodColor="#5da0ff" />
    </filter>

    <filter id="neon-glow-rainbow" x="-150%" y="-150%" width="400%" height="400%">
  <feDropShadow dx="0" dy="0" stdDeviation="2" flood-color="#ff0000" flood-opacity="1" />
  <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#ff7f00" flood-opacity="0.9" />
  <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#ffff00" flood-opacity="0.8" />
  <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#00ff00" flood-opacity="0.7" />
  <feDropShadow dx="0" dy="0" stdDeviation="10" flood-color="#0000ff" flood-opacity="0.6" />
  <feDropShadow dx="0" dy="0" stdDeviation="12" flood-color="#4b0082" flood-opacity="0.5" />
  <feDropShadow dx="0" dy="0" stdDeviation="14" flood-color="#8f00ff" flood-opacity="0.4" />
</filter>


  </defs> */}