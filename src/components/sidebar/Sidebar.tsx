import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Sidebar</h2>
            <nav>
                <ul>
                    <li><Link to='/useState'>Use State</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;