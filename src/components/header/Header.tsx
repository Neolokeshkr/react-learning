import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className='heading'>React Tutorials</Link>
        </div>
    )
}

export default Header; // Exporting the Header component