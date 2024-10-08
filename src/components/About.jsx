import { FaBook } from "react-icons/fa";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion,  } from "framer-motion";
import ReactGA from "react-ga";

function About() {
  const location = useLocation();

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }, [location]);
  return (

    <div>

  <motion.div initial={{
      opacity: 0,
      // if odd index card,slide from right instead of left
      y:  50 
    }}
    whileInView={{
      opacity: 1,
      y: 0, // Slide in to its original position
      transition: {
        duration: 0.5 // Animation duration
      }
    }}
    viewport={{ once: true }}   >
    <p className=" text-sm md:text-lg text-[#c4c2c2] text-justify">
    I am a passionate individual currently immersed in the world of data science and full-stack web development. Currently pursuing my education in <b>Data Science(Bsc) at IIT Madras and B.Tech(CSE) at LPU</b>. My journey also includes a deep dive into the realm of <b>competitive programming</b>, where I constantly challenge myself to solve complex problems and enhance my problem-solving skills.
<br/><br/>
In addition to my technical pursuits, I bring a creative flair to my endeavors. I am not only fascinated by the logical intricacies of coding but also drawn to the aesthetic side of things. With a keen interest in designing and art, I believe in the harmonious fusion of functionality and aesthetics in every project.
    </p>
  </motion.div>
  <hr className="h-px my-4 w-full border-0 bg-[#2B2B2C]"/> 
  
<div className="flex  bg-[#2B2B2C] w-[175px] rounded-lg p-2">
  <FaBook size="25px" color="CA8A04"/>
  <h1 className="ml-3 text-2xl font-semibold">Education</h1>
</div>
  <motion.div initial={{
      opacity: 0,
      // if odd index card,slide from right instead of left
      x:  50 
    }}
    whileInView={{
      opacity: 1,
      x: 0, // Slide in to its original position
      transition: {
        duration: 0.5 // Animation duration
      }
    }}
    viewport={{ once: true }}   className="">

  
    <div className="relative pl-8 sm:pl-32 py-4 group">
        
        <div className="font-caveat font-medium text-lg  mb-1 sm:mb-0">High School</div>
       
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-[#4e4e4f] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-yellow-600 after:border-4 after:box-content after:border-[#2B2B2C] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold w-[85px] h-6 mb-3 sm:mb-0 text-yellow-900 bg-yellow-600 rounded-full">March, 2023</time>
            <div className="text-[17px]  text-[#c4c2c2]">Nalanda Heritage School, Nalanda</div>
        </div>
   
       
    </div>
    
    
    <div className="relative pl-8 sm:pl-32 py-4 group">
       
        <div className="font-caveat font-medium text-lg  mb-1 sm:mb-0">Bs in Data Science</div>
       
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-[#4e4e4f] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-yellow-600 after:border-4 after:box-content after:border-[#2B2B2C] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold  w-[85px] h-6 mb-3 sm:mb-0 text-yellow-900 bg-yellow-600 rounded-full">June, 2023-C</time>
            <div className="text-[17px]  text-[#c4c2c2]">Indian Institute of Technology Madras</div>
        </div>
       
       
    </div>
    
  
    <div className="relative pl-8 sm:pl-32 py-4 group">
      
        <div className="font-caveat font-medium text-lg  mb-1 sm:mb-0">B.Tech. in Computer Science</div>
       
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-[#464647] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-yellow-600 after:border-4 after:box-content after:border-[#2B2B2C] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold  w-[85px] h-6 mb-3 sm:mb-0 text-yellow-900 bg-yellow-600 rounded-full">July, 2024-C</time>
            <div className="text-[17px]  text-[#c4c2c2]">Lovely Professional University</div>
        </div>
       
        
    </div>
    
  
   

</motion.div>
     

    </div>
   
  )
}

export default About