import { useState } from 'react';
import axios from 'axios';

function App() {


  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // chiamata API movies
  function fetchResults() {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=95f177b1b95405d3218e218ecc202828&query=${query}`)
      .then((res) => {
        setResults(res.data.results)
        setQuery('');
      })
      .catch(err => console.log(err));
  };


  return (
    <>
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
        {results.length > 0 && <h2>Movies:</h2>}
        {/* Mostra i risultati */}
        {results.map((movie) => (
          <div key={movie.id}>
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


            <p>{movie.vote_count}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
