import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './utils/axiosWithAuth'

const FriendList = () => {
    const [ friends, setFriends ] = useState([]);

    useEffect(() => {
        getFriends()
    }, [])

    const getFriends = () => {
        const token = localStorage.getItem('token')
        axiosWithAuth()
            .get('/api/friends', {headers: {Authorization: token}})
            .then((res) => {
                setFriends(res.data)
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <h2>My Friends</h2>
            <div>
                {
                    friends.map(friend => {
                        return (
                            <div key={friend.id}>
                                <h3>{friend.name}</h3>
                                <h3>{friend.age}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FriendList;
