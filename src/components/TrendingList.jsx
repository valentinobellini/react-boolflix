import { useContext } from "react";
import GlobalContext from './../contexts/GlobalContext'

import ResultCard from './../components/ResultCard'


export default function TrendingList() {

    const { trending } = useContext(GlobalContext);

    return (

        <div className="movies-list-container">
            {trending.length > 0 && <h2 className="list-title">Trending Movies and Series:</h2>}

            <div className="results-list">
                {trending.map((trending) => (
                    <ResultCard key={trending.id} data={trending} />
                ))}
            </div>
        </div>

    )
}
