import { Route, Routes } from 'react-router-dom';
import './App.css';
import { UsersTable } from './components/UsersTable/UsersTable';
import { UserPage } from './components/UserPage/UserPage';

function App() {
    return (
        <Routes>
            <Route path='/' element={<UsersTable />} />
            <Route path=':userName' element={<UserPage />} />
        </Routes>
    );
}

export default App;
