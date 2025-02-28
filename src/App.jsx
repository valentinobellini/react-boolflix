import { useState } from 'react';
import axios from 'axios';

// importo elementi react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// importa il provider
import GlobalContext from './contexts/GlobalContext';




// importa componenti
import Header from './components/Header'
import Footer from './components/Footer'
import ResultsList from './components/ResultsList'




function App() {


  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);


  // chiamata API movies
  function fetchResults() {

    const movieRequest = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=33dd7e4bd707ec9911740ceb7d4fa3c7&language=it_IT&query=${query}`);
    const tvRequest = axios.get(`https://api.themoviedb.org/3/search/tv?api_key=33dd7e4bd707ec9911740ceb7d4fa3c7&language=it_IT&query=${query}`);

    axios.all([movieRequest, tvRequest])
      .then(axios.spread((movieRes, tvRes) => {
        setMovies(movieRes.data.results);
        setSeries(tvRes.data.results);
        setState('');
      }))
      .catch((err) => {
        console.log(err);
      });
  }


  return (
    <>
      <GlobalContext.Provider value={{ query, movies, series, setQuery, fetchResults }}>

        <Header></Header>
        <ResultsList></ResultsList>

        <Footer></Footer>

      </GlobalContext.Provider>
    </>
  );
}

export default App;
