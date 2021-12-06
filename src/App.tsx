import React from 'react';
import './App.css';
import {Layout} from 'antd';
import {UsersTable} from './components/UsersTable/UsersTable';

function App() {
    return (
        <Layout className='app-layout'>
            <UsersTable/>
        </Layout>
    );
}

export default App;
