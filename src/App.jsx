import { useState, useEffect } from 'react';
import Login from './Login';
import Home from './Home';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from './firebaseConfig';

import './App.css';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    });
  }, []);

  console.log(user);

  return (
    <div className="app">
      {user ? <Home user={user} /> : <Login />}
    </div>
  );
}

export default App;

