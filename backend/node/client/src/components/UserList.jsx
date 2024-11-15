import React, { useState, useEffect } from 'react';
import axios from 'axios'

function UserList() {
    const [users, setUsers] = useState([]);
    let [user, setUser] = useState({ name: '', email: '', password: '' })
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
    let EditUser = (data) => {
        setUser(data)
    }
    let handleEditSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:8000/user/${user._id}`, user)
        alert('user updated')
        GetAllUsers()
        setUser({ name: '', email: '', password: '' });


    }
    let handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });


    }
    return (
        <>

            <div className="user-list">
                <h3>Registered Users</h3>
                <ul>
                    {users.map(user => (
                        <li key={user._id}>
                            <span>{user.name}</span> - <span>{user.email}</span> | <button onClick={() => DeleteUser(user._id)}>Delete</button> <button onClick={() => EditUser(user)}>Edit</button>
                        </li>
                    ))}
                </ul>
            </div>
            {
                user._id && <div className="edit-user">
                    <h3>Edit User</h3>
                    <form onSubmit={handleEditSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={user.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={user.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={user.password}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            }
        </>
    );
}

export default UserList;
