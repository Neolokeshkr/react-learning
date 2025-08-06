import { Route, Routes } from 'react-router-dom';
import './mainContent.css';
import UseState from '../../Hooks/UseState.tsx';
import Home from '../../subComponents/home/Home.tsx';

const MainContent = () => {
    return (
        <main className='main-content'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/useState' element={<UseState />} />
            </Routes>
        </main>
    );
}

export default MainContent;