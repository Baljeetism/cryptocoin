import React from "react";
import Slider from "react-slick";
import axios from "axios";
import { useState } from "react";

function Corousel() {
    // const [Name,setName]=useState([])
    // const [Image,setImage]=useState([])
    // const [Value,setValue]=useState([])

    // const [Name1,setName1]=useState([])
    // const [Image1,setImage1]=useState([])
    // const [Value1,setValue1]=useState([])

    // const [Name2,setName2]=useState([])
    // const [Image2,setImage2]=useState([])
    // const [Value2,setValue2]=useState([])

    // const [Name3,setName3]=useState([])
    // const [Image3,setImage3]=useState([])
    // const [Value3,setValue3]=useState([])

    // const [Name4,setName4]=useState([])
    // const [Image4,setImage4]=useState([])
    // const [Value4,setValue4]=useState([])

    // const [Name5,setName5]=useState([])
    // const [Image5,setImage5]=useState([])
    // const [Value5,setValue5]=useState([])

    // const [Name6,setName6]=useState([])
    // const [Image6,setImage6]=useState([])
    // const [Value6,setValue6]=useState([])



    
    

    const options = {
        method: 'GET',
        
        url: 'https://api.coingecko.com/api/v3/search/trending',
        
    };

    axios.request(options).then(function (response) {
        // setName(response.data.coins[0].item.id);
        // setImage(response.data.coins[0].item.small)
        // setValue(parseFloat(response.data.coins[0].item.price_btc).toFixed(5))

        // setName1(response.data.coins[1].item.id);
        // setImage1(response.data.coins[1].item.small)
        // setValue1(parseFloat(response.data.coins[1].item.price_btc).toFixed(5))

        // setName2(response.data.coins[2].item.id);
        // setImage2(response.data.coins[2].item.small)
        // setValue2(parseFloat(response.data.coins[2].item.price_btc).toFixed(5))

        // setName3(response.data.coins[3].item.id);
        // setImage3(response.data.coins[3].item.small)
        // setValue3(parseFloat(response.data.coins[3].item.price_btc).toFixed(5))

        // setName4(response.data.coins[4].item.id);
        // setImage4(response.data.coins[4].item.small)
        // setValue4(parseFloat(response.data.coins[4].item.price_btc).toFixed(5))

        // setName5(response.data.coins[5].item.id);
        // setImage5(response.data.coins[5].item.small)
        // setValue5(parseFloat(response.data.coins[5].item.price_btc).toFixed(5))

        // setName6(response.data.coins[6].item.id);
        // setImage6(response.data.coins[6].item.small)
        // setValue6(parseFloat(response.data.coins[6].item.price_btc).toFixed(5))
    }).catch(function (error) {
        console.error(error);
    });



  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false,
    fade:true,
    infinite:true
  };
  return (
    <div>
        {/* <h4>HOT coins</h4> */}
        {/* <Slider {...settings} className="corousel">
        
      <div className="box">
        <h3>{Name}</h3>
        <img src={Image} alt="" srcset="" />
        <h2>$BTC : {Value}</h2>
      </div>
      <div className="box">
        <h3>{Name1}</h3>
        <img src={Image1} alt="" srcset="" />
        <h2>$BTC : {Value1}</h2>
      </div>
      <div className="box">
        <h3>{Name2}</h3>
        <img src={Image2} alt="" srcset="" />
        <h2>$BTC : {Value2}</h2>
      </div>
      <div className="box">
        <h3>{Name3}</h3>
        <img src={Image3} alt="" srcset="" />
        <h2>$BTC : {Value3}</h2>
      </div>
      <div className="box">
        <h3>{Name4}</h3>
        <img src={Image4} alt="" srcset="" />
        <h2>$BTC : {Value4}</h2>
      </div>
      <div className="box">
        <h3>{Name5}</h3>
        <img src={Image5} alt="" srcset="" />
        <h2>$BTC : {Value5}</h2>
      </div>
      <div className="box">
        <h3>{Name6}</h3>
        <img src={Image6} alt="" srcset="" />
        <h2>$BTC : {Value6}</h2>
      </div>
      
    </Slider> */}
    </div>
    
  );
}
export default Corousel;