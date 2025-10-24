import React from 'react';

function UserList() {
    const users = [
        { id: 1, name: '짱구', age: 6 },
        { id: 2, name: '철수', age: 10 },
        { id: 3, name: '훈이', age: 8 },
    ];

    const userListItems = users.map(user => (
        <li key={user.id}>
            <strong>{user.name}</strong> ({user.age}세)
        </li>
    ));

    return (
        <div>
            <h2>사용자 목록</h2>
            <ul>
            {userListItems}
            </ul>
        </div>
    );
}
export default UserList;