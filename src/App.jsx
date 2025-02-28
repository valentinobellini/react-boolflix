import { useState } from 'react';
import axios from 'axios';

// importo elementi react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// importa il provider
import GlobalContext from './contexts/GlobalContext';


// importa layout
import MainLayout from './layouts/MainLayout'

//  import pages
import HomePage from './pages/HomePage'
import ListsPage from './pages/ListsPage'





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
        setQuery('');

      }))
      .catch((err) => {
        console.log(err);
      });
  }


  return (
    <>
      <GlobalContext.Provider value={{ query, movies, series, setQuery, fetchResults }}>
        <Router>
          <Routes>

            <Route path="/" element={<MainLayout />} >
              <Route index element={<HomePage />} />
              <Route path="/lists" element={<ListsPage />} />
            </Route>

          </Routes>
        </Router>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
