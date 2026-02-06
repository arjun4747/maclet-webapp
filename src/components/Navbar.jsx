import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Close sidebar when route changes
    useEffect(() => {
        setIsSidebarOpen(false);
    }, [location.pathname]);

    // Lock body scroll when sidebar is open
    useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isSidebarOpen]);

    const handleScroll = (e, id) => {
        e.preventDefault();
        setIsSidebarOpen(false); // Close sidebar if navigating via scroll

        if (location.pathname === '/') {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 600);
        }
    };

    // Determine route for styling hooks (handled in CSS via data-route)
    const isHome = location.pathname === '/';

    return (
        <>
            <div className="navbar-container" data-route={isHome ? 'home' : 'other'}>
                {/* Mobile Header: Visible only on mobile via CSS */}
                <div className="mobile-header">
                    <Link to="/" className="mobile-logo-link">
                        <img src="/images/maclet-logo.png" alt="Maclet Logo" className="mobile-logo" />
                    </Link>
                    <button
                        className={`hamburger-btn ${isSidebarOpen ? 'active' : ''}`}
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                </div>

                {/* Desktop Logo: Hidden on mobile via CSS (using direct child selector) */}
                <Link to="/">
                    <img src="/images/maclet-logo.png" alt="Maclet Logo" className="navbar-logo" />
                </Link>

                {/* Desktop Pill: Hidden on mobile via CSS (using direct child selector) */}
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

            {/* Mobile Sidebar Overlay */}
            <div
                className={`sidebar-overlay ${isSidebarOpen ? 'open' : ''}`}
                onClick={() => setIsSidebarOpen(false)}
            />

            {/* Mobile Sidebar Menu */}
            <div className={`sidebar-menu ${isSidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <Link to="/" onClick={() => setIsSidebarOpen(false)}>
                        <img src="/images/maclet-logo.png" alt="Maclet" className="sidebar-logo" />
                    </Link>
                </div>
                <ul className="sidebar-links">
                    <li><a href="#hero" onClick={(e) => handleScroll(e, 'hero')}>Home</a></li>
                    <li><Link to="/laptops">Laptops</Link></li>
                    <li><Link to="/accessories">Accessories</Link></li>
                    <li><a href="#services" onClick={(e) => handleScroll(e, 'services')}>Services</a></li>
                    <li><a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a></li>
                    <li><Link to="/about">About Us</Link></li>
                </ul>
            </div>
        </>
    );
}
