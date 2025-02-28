import { useContext } from "react";
import GlobalContext from './../contexts/GlobalContext'

// funzione per intercettare Ctrl + Enter all'interno del text area e inviare il form
const handleKeyDown = (event, fetchResults) => {
    if (event.key === "Enter" && event.ctrlKey) {
        event.preventDefault(); // Evita di andare a capo
        fetchResults(event); // Invia il form
    }
};

export default function SearchBar() {
    const { query, setQuery, fetchResults } = useContext(GlobalContext);

    return (
        <div className="searchbar">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, fetchResults)}
            />
            <button
                type="submit"
                onClick={fetchResults}
            >
                Cerca
            </button>
        </div>
    );
}
