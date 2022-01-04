import { Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { UsersTable } from './components/UsersTable/UsersTable';
import { UserPage } from './components/UserPage/UserPage';

function App() {
    return (
        <Layout className='app-layout'>
            <Routes>
                <Route path='/' element={<UsersTable />} />
                <Route path=':user' element={<UserPage />} />
            </Routes>
        </Layout>
    );
}

export default App;
