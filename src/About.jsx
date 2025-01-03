import React, { useContext } from 'react'
import MainSection from './components/MainSection'
import { AppContext, useProductContext } from './context/productcontext';


const About = () => {
   const {myName} = useProductContext();
  
  const data = {
     name: "Smart Store",
   };
  return (
    <>
    {myName}
    <MainSection myData={data} />
   

   </>
  )
}

export default About
