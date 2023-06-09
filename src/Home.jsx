import React from 'react';

import { auth } from './firebaseConfig';

const Home = ({ user }) => {
    return (
        <div className="home">
            <h1>Hello, {user.displayName}</h1>
            <p>Your email is {user.email} </p>
            <button onClick={() => auth.signOut()} className="btn">Sign out</button>
        </div>
    )
}

export default Home;