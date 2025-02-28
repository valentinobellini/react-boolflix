import { useContext } from "react";
import GlobalContext from './../contexts/GlobalContext'

import ResultCard from './ResultCard';




export default function ResultsList() {

    const { movies, series } = useContext(GlobalContext);

    return (
        <>
            <div className="results-list-container">
                {movies.length > 0 && <h2 className="list-title">Movies:</h2>}

                <div className="results-list">
                    {movies.map((movie) => (
                        <ResultCard key={movie.id} data={movie} />
                    ))}
                </div>
            </div>

            <div className="results-list-container">
                {series.length > 0 && <h2 className="list-title">Series:</h2>}

                <div className="results-list">
                    {series.map((serie) => (
                        <ResultCard key={serie.id} data={serie} />
                    ))}
                </div>
            </div>
        </>
    );
}