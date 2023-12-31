
import React, { useState } from 'react';
import './App.css';
import './Components/pages/EStyles.css';
import Footer from './Components/pages/Footer';
// import Navbar from './Components/pages/Navbar';
import RouteComp from './Components/pages/RouterComp';
import Global from './Global';

function App() {

  const updateGdata = (data) =>
    setGdata({ ...Gdata, ...data });

  const [Gdata, setGdata] = useState({
    "updateGdata": updateGdata,
    "cartcount": '',
  });

  return (
  
      <div className="App">
        <Global.Provider value={Gdata}>
          {/* <Navbar /> */}
          <RouteComp />
          <Footer />
        </Global.Provider>
      
      </div>
  );
}

export default App;
