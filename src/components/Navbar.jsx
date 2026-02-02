import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleScroll = (e, id) => {
        e.preventDefault();

        if (location.pathname === '/') {
            // If already on Home, smooth scroll
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // If on another page, navigate to Home then scroll
            navigate('/');
            // Small timeout to allow page transition (500ms) to complete
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 600);
        }
    };

    return (
        <div className="navbar-container">
            <Link to="/">
                <img src="/images/maclet-logo.png" alt="Maclet Logo" className="navbar-logo" />
            </Link>
            <nav className="navbar-pill">
                <ul className="navbar-links">
                    <li><a href="#hero" onClick={(e) => handleScroll(e, 'hero')}>Home</a></li>
                    <li><Link to="/laptops">Laptops</Link></li>
                    <li><Link to="/accessories">Accessories</Link></li>
                    <li><a href="#services" onClick={(e) => handleScroll(e, 'services')}>Services</a></li>
                    <li><a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a></li>
                    <li><Link to="/about">About Us</Link></li>
                </ul>
            </nav>
        </div>
    );
}
