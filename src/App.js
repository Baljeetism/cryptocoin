import React, { useEffect, useState } from "react";
import About from "./components/About";
import News from "./components/News";
import Theory from "./components/Theory";
import axios from "axios";

import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Newcoins from "./components/Newcoins";
import Th1 from "./components/Th1";
import Th2 from "./components/Th2";


function App() {
  const [Article, setArticle] = useState([])
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=20&page=1&sparkline=false'

  useEffect(()=>{
    axios.get(url).then((response)=>{
      setArticle(response.data)
    }).catch((error)=>{
      console.log("error")
    })
  },[])
  
  

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/bitcoin" element={<Newcoins coins={Article} />}></Route>
        <Route path='/coin/:coinId' element={<Th2 />} />
        <Route path="/news" element={<News />}></Route>
        <Route path="/Th1" element={<Th1 />}></Route>
        <Route path="/Th2" element={<Th2 />}></Route>
        <Route path="/theory" element={<Theory />}></Route>

      </Routes>

    </BrowserRouter>



  );
};

        export default App;
