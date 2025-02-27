import { useState } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

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

      {/* render movies list */}
      <h1>hello world</h1>


      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={fetchResults}>Cerca</button>

      </div>

      <div>
        {movies.length > 0 && <h2 className='list-title' >Movies:</h2>}
        {/* Mostra i risultati */}
        {movies.map((movie) => (
          <div key={movie.id}>
            {/* immagine copertina */}
            <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt="movie.title" />
            <h2>{movie.title}</h2>
            <p>{movie.original_title}</p>

            {movie.original_language === 'en' && (
              <img className='flag' src="https://flagicons.lipis.dev/flags/4x3/gb.svg" alt="Flag of English" />
            )}
            {movie.original_language === 'it' && (
              <img className='flag' src="https://flagicons.lipis.dev/flags/4x3/it.svg" alt="Bandiera italiana" />
            )}
            {movie.original_language === 'es' && (
              <img className='flag' src="https://flagicons.lipis.dev/flags/4x3/es.svg" alt="Bandera española" />
            )}
            {movie.original_language === 'fr' && (
              <img className='flag' src="https://flagicons.lipis.dev/flags/4x3/fr.svg" alt="Drapeau français" />
            )}
            {movie.original_language === 'de' && (
              <img className='flag' src="https://flagicons.lipis.dev/flags/4x3/de.svg" alt="Deutsche Flagge" />
            )}
            {movie.original_language === 'ja' && (
              <img className='flag' src="https://flagicons.lipis.dev/flags/4x3/jp.svg" alt="Deutsche Flagge" />
            )}
            {!['en', 'it', 'es', 'fr', 'de', 'ja'].includes(movie.original_language) && (
              <p>{movie.original_language}</p>
            )}

            {/* rating */}
            <p>
              {Math.ceil(movie.vote_average / 2) >= 1 && <FontAwesomeIcon icon={faStar} />}
              {Math.ceil(movie.vote_average / 2) >= 2 && <FontAwesomeIcon icon={faStar} />}
              {Math.ceil(movie.vote_average / 2) >= 3 && <FontAwesomeIcon icon={faStar} />}
              {Math.ceil(movie.vote_average / 2) >= 4 && <FontAwesomeIcon icon={faStar} />}
              {Math.ceil(movie.vote_average / 2) >= 5 && <FontAwesomeIcon icon={faStar} />}
            </p>

          </div>
        ))}
      </div>






      {/* render series list */}

      <div>
        {series.length > 0 && <h2 className='list-title' >Series:</h2>}
        {/* Mostra i risultati */}
        {series.map((serie) => (
          <div key={serie.id}>
            {/* immagine copertina */}
            <img src={`https://image.tmdb.org/t/p/w342/${serie.poster_path}`} alt="serie.title" />
            <h2>{serie.name}</h2>
            <p>{serie.original_name}</p>

            {serie.original_language === 'en' && (
              <img className='flag' src="https://flagicons.lipis.dev/flags/4x3/gb.svg" alt="Flag of English" />
            )}
            {serie.original_language === 'it' && (
              <img className='flag' src="https://flagicons.lipis.dev/flags/4x3/it.svg" alt="Bandiera italiana" />
            )}
            {serie.original_language === 'es' && (
              <img className='flag' src="https://flagicons.lipis.dev/flags/4x3/es.svg" alt="Bandera española" />
            )}
            {serie.original_language === 'fr' && (
              <img className='flag' src="https://flagicons.lipis.dev/flags/4x3/fr.svg" alt="Drapeau français" />
            )}
            {serie.original_language === 'de' && (
              <img className='flag' src="https://flagicons.lipis.dev/flags/4x3/de.svg" alt="Deutsche Flagge" />
            )}
            {serie.original_language === 'ja' && (
              <img className='flag' src="https://flagicons.lipis.dev/flags/4x3/jp.svg" alt="Deutsche Flagge" />
            )}
            {!['en', 'it', 'es', 'fr', 'de', 'ja'].includes(serie.original_language) && (
              <p>{serie.original_language}</p>
            )}


            {/* rating */}
            <p>
              {Math.ceil(serie.vote_average / 2) >= 1 && <FontAwesomeIcon icon={faStar} />}
              {Math.ceil(serie.vote_average / 2) >= 2 && <FontAwesomeIcon icon={faStar} />}
              {Math.ceil(serie.vote_average / 2) >= 3 && <FontAwesomeIcon icon={faStar} />}
              {Math.ceil(serie.vote_average / 2) >= 4 && <FontAwesomeIcon icon={faStar} />}
              {Math.ceil(serie.vote_average / 2) >= 5 && <FontAwesomeIcon icon={faStar} />}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
