import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


// Funzione per ottenere il codice del paese dalla lingua
const getFlagCode = (languageCode) => {
    const languageToCountry = {
        'en': 'gb',
        'it': 'it',
        'fr': 'fr',
        'es': 'es',
        'de': 'de',
        'ja': 'jp',
    };
    return languageToCountry[languageCode] || null; // Restituisce null se non trova la lingua
};


export default function ResultsCard({ movie }) {


    // logica rating
    const rating = Math.ceil(movie.vote_average / 2);

    function calculateRating() {

        const stars = [];

        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FontAwesomeIcon
                    className="star"
                    key={i}
                    icon={faStar}
                    style={{ color: i <= rating ? 'gold' : 'white' }}
                />
            );
        }
        return stars;
    }

    // Ottiene il codice della bandiera
    const flagCode = getFlagCode(movie.original_language);

    return (
        <div key={movie.id}>
            {/* immagine copertina */}
            <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.original_title}</p>

            {flagCode ? (
                <img className='flag' src={`https://flagicons.lipis.dev/flags/4x3/${flagCode}.svg`} alt={`Bandiera ${flagCode}`} />
            ) : (
                <p>{movie.original_language}</p>
            )}

            {/* rating */}

            <p>
                {calculateRating()}
            </p>

        </div>
    );
}