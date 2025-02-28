import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


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



    return (
        <div key={movie.id}>
            {/* immagine copertina */}
            <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.title} />
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
                {calculateRating()}
            </p>

        </div>
    );
}