import { useContext } from "react";
import GlobalContext from './../contexts/GlobalContext'

import ResultCard from './ResultCard';




export default function ResultsList() {

    const { movies } = useContext(GlobalContext);

    return (
        <div>
            {movies.length > 0 && <h2 className="list-title">Movies:</h2>}


            {movies.map((movie) => (
                <ResultCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
}