import React, { useEffect, useState } from 'react';
import './App.css';
import { User } from './models/User';
import { UserList } from './models/UserList';
import UserComponent from './components/UserComponents';
import ListComponent from './components/ListComponent';

const getUser = async (url: string): Promise<User> => {
    const response = await fetch(url);
    const user = await response.json();
    return user as User;
}

const getList = async (url: string): Promise<UserList> => {
    const resource = await fetch(url);
    const list = await resource.json();
    return list as UserList;
}


function App() {
    const [singleUserState, setSingleUser] = useState<User | null> (null);
    const [listSingleUserState, setListSingleUser] = useState<UserList | null>(null);

    useEffect(() => {
        const initialize = async () => {
            const singleUser = await getUser("https://reqres.in/api/users/2");
            setSingleUser(singleUser);

            const listSingleUser = await getList("https://reqres.in/api/users?page=2");
            setListSingleUser(listSingleUser);     
        }
        initialize();
        return () => { }
    }, []);


    return (
        <div className ="First">
            <h2>Users</h2>
            <div className="App">
                <UserComponent user={singleUserState}></UserComponent>
                <ListComponent children={listSingleUserState}></ListComponent>
            </div>
        </div>
    );
}
export default App;

