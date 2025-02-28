import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// Funzione per ottenere il codice della bandiera
const getFlagCode = (languageCode) => {
    const languageToCountry = {
        'en': 'gb',
        'it': 'it',
        'fr': 'fr',
        'es': 'es',
        'de': 'de',
        'ja': 'jp',
    };
    return languageToCountry[languageCode] || null;
};

export default function ResultsCard({ data }) {
    // Determina se è un film o una serie
    const isMovie = data.hasOwnProperty("title");

    // Estrai i dati corretti
    const title = isMovie ? data.title : data.name;
    const originalTitle = isMovie ? data.original_title : data.original_name;
    const imagePath = data.poster_path;
    const language = data.original_language;
    const rating = Math.ceil(data.vote_average / 2);


    // logica rating
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
    const flagCode = getFlagCode(language);

    return (
        <div className='card' key={data.id}>
            {/* Immagine copertina */}
            <img src={`https://image.tmdb.org/t/p/w342/${imagePath}`} alt={title} />
            <div className="card-infos">
                <h2>{title}</h2>
                <p>{originalTitle}</p>

                {/* flag */}
                {flagCode ? (
                    <img className='flag' src={`https://flagicons.lipis.dev/flags/4x3/${flagCode}.svg`} alt={`Bandiera ${flagCode}`} />
                ) : (
                    <p>{language}</p>
                )}

                {/* Rating */}
                <p>{calculateRating()}</p>
            </div>
        </div>
    );
}
