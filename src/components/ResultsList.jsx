import { useContext } from "react";
import GlobalContext from './../contexts/GlobalContext'

import ResultCard from './ResultCard';




export default function ResultsList() {

    const { movies, series } = useContext(GlobalContext);

    return (
        <>
            <div>
                {movies.length > 0 && <h2 className="list-title">Movies:</h2>}


                {movies.map((movie) => (
                    <ResultCard key={movie.id} data={movie} />
                ))}
            </div>

            <div>
                {series.length > 0 && <h2 className="list-title">Series:</h2>}


                {series.map((serie) => (
                    <ResultCard key={serie.id} data={serie} />
                ))}
            </div>
        </>
    );
}