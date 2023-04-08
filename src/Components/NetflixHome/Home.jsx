import React, { useEffect, useState } from "react";
import "../NetflixHome/Home.scss";
import axios from "axios";
import Navbar from "./Navbar";
import { Link } from "react-router-dom/";
// import bootstrap from "bootstrap/dist/js/bootstrap.js";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/js/bootstrap.js";

// const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=feffc65bba5eb41e92b12f82da74f037&language=en-US&page=1`;
const imgurl = `https://image.tmdb.org/t/p/w500`;
const now_playing = "now_playing";
const popular = "popular";
const top_rated = "top_rated";
const upcoming = "upcoming";
const Card = ({ img }) => <img src={img}></img>;
const Row = ({ arr = [], title }) => (
  <>
    <h2 className="title">{title}</h2>
    <div className="row-container">
      <div className="row-img">
        {arr.map((item, index) => (
          <Card key={index} img={`${imgurl}${item.poster_path}`} />
        ))}
      </div>
    </div>
  </>
);

const options = {
  method: "GET",
  url: "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",
  headers: {
    "X-RapidAPI-Key": "6adcf5d83amshef1a16a886d452fp1b826ajsn0c92cac9f5c6",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

function Home() {
  const [upcomingg, setupcoming] = useState([]);
  const [popular1, setpopular] = useState([]);
  const [toprated, settoprated] = useState([]);
  const [Nowplaying, setNowplaying] = useState([]);
  const [rapidapi, setrapiedapi] = useState([]);
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.results[0].primaryImage);
        setrapiedapi(response.data.results[5].primaryImage.url);
      })
      .catch(function (error) {
        console.error(error);
      });

    const fetchupcoming = async () => {
      const {
        data: { results },
      } = await axios.get(
        `https://api.themoviedb.org/3/movie/${upcoming}?api_key=feffc65bba5eb41e92b12f82da74f037&language=en-US&page=1`
      );

      setupcoming(results);
    };
    const fetchnowplaying = async () => {
      const {
        data: { results },
      } = await axios.get(
        `https://api.themoviedb.org/3/movie/${now_playing}?api_key=feffc65bba5eb41e92b12f82da74f037&language=en-US&page=1`
      );

      setNowplaying(results);
    };

    const fetchpopuler = async () => {
      const {
        data: { results },
      } = await axios.get(
        `https://api.themoviedb.org/3/movie/${popular}?api_key=feffc65bba5eb41e92b12f82da74f037&language=en-US&page=1`
      );

      setpopular(results);
    };
    const fetchtoprated = async () => {
      const {
        data: { results },
      } = await axios.get(
        `https://api.themoviedb.org/3/movie/${top_rated}?api_key=feffc65bba5eb41e92b12f82da74f037&language=en-US&page=1`
      );

      settoprated(results);
    };
    fetchupcoming();
    fetchnowplaying();
    fetchpopuler();
    fetchtoprated();
  }, []);

  return (
    <>
      <Navbar />

      <div className="main-img">
        {/* <img
          src={`https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/6720/1366720-i-c30300a11e8d`}
        /> */}
        <div className="Banner-content">
          {" "}
          <h1>
            {" "}
            <span style={{ color: "red" }}>Avengers </span> : Endgame{" "}
          </h1>
          <br />
          <h5>
            After the devastating events of the Infinity War, the Avengers
            assemble once more to reverse Thanos' actions and restore balance to
            the universe.
          </h5>
          <br />
          <p>2019 . 3h 1m . 4 languages</p>
        <a href="https://youtu.be/TcMBFSGVi1c">   <button >Watch trailer</button></a>
        </div> 
      </div>
      <Row arr={upcomingg} title={"Upcoming Movies"} />
      <Row arr={popular1} title={"Popular Movies"} />
      <Row arr={toprated} title={"TopRated Movies"} />
      <Row arr={Nowplaying} title={"Now Playing"} />
    </>
  );
}

export default Home;

// <img src={`${imgurl}${Apidata.poster_path}` } />
