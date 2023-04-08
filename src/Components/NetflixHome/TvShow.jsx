import React, { useState } from "react";
import "../NetflixHome/TvShow.scss";
import { useEffect } from "react";
import Navbar from "./Navbar";
import "bootstrap/dist/js/bootstrap.js";
import axios from "axios";
const url =
    " https://api.themoviedb.org/3/tv/popular?api_key=feffc65bba5eb41e92b12f82da74f037&language=en-US&page=1";
const imgurl = `https://image.tmdb.org/t/p/w500`;
    
const Path = ({ img }) => <img src={img}></img>;
const Roww = ({ arr = [], title }) => (
  <>
      <h2 className="title">{title}</h2>
    <div className="container5">
    
        {arr.map((item, index) => (
          <Path key={index} img={`${imgurl}${item.poster_path}`} />
        ))}
  
    </div>
  </>
);







const TvShow = () => {
  const [tvshow, settvshow] = useState([]);
  useEffect(() => {
    const fetchtvshow = async () => {
      const {
        data: { results },
      } = await axios.get(url);

      console.log(tvshow);
      settvshow(results); 
    };
    fetchtvshow();
  }, []);
  return <>
      <Navbar/>
        <div className="rowimg">
        <Roww arr={tvshow} title={"TV Shows"} />
        </div>
        
  </>;
};

export default TvShow;
