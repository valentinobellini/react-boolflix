import { useContext } from "react";
import { useNavigate } from "react-router-dom";
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

    const navigate = useNavigate();

    const handleSearch = () => {
        fetchResults();
        navigate("/lists");
    };

    return (
        <div className="searchbar-wrapper">
            <input
                className="searchbar"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, handleSearch)}
                placeholder="Cerca un film o una serie..."

            />
            <button
                className="searchbar-button"
                type="submit"
                onClick={handleSearch}
            >
                Cerca
            </button>
        </div>
    );
}
