import React from 'react';
import './App.css';
import {Layout, Table} from "antd";

enum UsersTableColumn {
    Photo = 'photo',
    Name = 'name',
    Email = 'email'
}

const columns = [
    {
        title: UsersTableColumn.Photo,
        dataIndex: UsersTableColumn.Photo,
        key: UsersTableColumn.Photo
    },
    {
        title: UsersTableColumn.Name,
        dataIndex: UsersTableColumn.Name,
        key: UsersTableColumn.Name
    },
    {
        title: UsersTableColumn.Email,
        dataIndex: UsersTableColumn.Email,
        key: UsersTableColumn.Email
    }
];

function App() {
    return (
        <Layout className='app-layout'>
            <Table columns={columns} dataSource={undefined}/>
        </Layout>
    );
}

export default App;
