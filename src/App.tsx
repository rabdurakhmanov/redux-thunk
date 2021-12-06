import React from 'react';
import './App.css';
import {Layout} from "antd";
import {UsersList} from "./components/UsersList/UsersList";

function App() {
    return (
        <Layout className='app-layout'>
            <UsersList/>
        </Layout>
    );
}

export default App;
