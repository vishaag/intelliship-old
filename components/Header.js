import Link from 'next/link';

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

        <Link href="/">
            <a className="navbar-brand" href="#">INTELLISHIP</a>
        </Link>


        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
            <Link href="/">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
            </Link>

            <Link href = "/about">
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
            </Link>
            
            </ul>

            <button type="button" className="btn btn-secondary">Login</button>
        </div>
    </nav>
)

export default Header;