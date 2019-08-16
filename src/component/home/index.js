import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  const [test, setTest] = useState([1,2,3,45])
  
  return ( 
    <>
      <h1 to="/">Instareact!</h1>
      <Link to="/">Test</Link>
    </>
   );
}
 
export default Home;