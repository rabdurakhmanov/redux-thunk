import { Route, Routes } from 'react-router-dom';
import './App.css';
import { UserPage } from './components/UserPage/UserPage';
import { UsersPage } from './components/UsersPage/UsersPage';

function App() {
    return (
        <Routes>
            <Route path='/' element={<UsersPage />} />
            <Route path=':userName' element={<UserPage />} />
        </Routes>
    );
}

export default App;
