// importa componenti
import SearchBar from './SearchBar'
import Logo from './Logo'


export default function Header() {


    return (
        <>
            <header>
                <div className="header-wrapper">
                    <Logo />
                    <SearchBar />
                </div>
            </header>

        </>
    )
}
