import { useState } from 'react';
import axios from 'axios';

function App() {


  const [query, setQuery] = useState([]);
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
        {/* Mostra i risultati */}
        {results.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.original_title}</p>
            <p>{movie.original_language}</p>
            <p>{movie.vote_count}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
