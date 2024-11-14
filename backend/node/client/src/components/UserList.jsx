import React, { useState, useEffect } from 'react';
import axios from 'axios'

function UserList() {
    const [users, setUsers] = useState([]);
    let GetAllUsers = async () => {
        let response = await axios.get('http://localhost:8000/users')
        setUsers(response.data)
    }
    useEffect(() => {
        GetAllUsers()
    }, []);
    async function DeleteUser(id) {
        let response = await axios.delete(`http://localhost:8000/user/${id}`)
        GetAllUsers()
        alert(response.data)
    }

    return (
        <div className="user-list">
            <h3>Registered Users</h3>
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        <span>{user.name}</span> - <span>{user.email}</span> | <button onClick={() => DeleteUser(user._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
