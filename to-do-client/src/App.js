import './App.css';
import React, {useState, useEffect} from 'react';
import Footer from './site/Footer'
import Header from './site/Header'
import Display from './site/Display'
//import Auth from './components/Auth/Auth'
import EditListItem from './components/Lists/EditListItem/EditListItem';

const App = (props) => {

  // console.log(props);
  const [sessionToken, setSessionToken] = useState(undefined);
  const [loginStatus, setLoginStatus] = useState(undefined);

//   const title = () => {
//     return login ? 'Login' : 'Signup';
// }

// const loginToggle = (e) => {
//     e.preventDefault();
//     setLogin(!login);
//     setEmail('');
//     setPassword('');
//     setFirstName('');
//     setLastName('');

// }


    useEffect(() => {
        if (localStorage.getItem("token")) {
            setSessionToken(localStorage.getItem("token"));
        }
    }, []);

    const updateLocalStorage = (newToken) => {
        localStorage.setItem("token", newToken);
        setSessionToken(newToken);
    };

    const clearLocalStorage = () => {
        localStorage.clear();
        setSessionToken(undefined);
    };

  return (
    <div className="App">
      <Header clearLocalStorage={clearLocalStorage} updateLocalStorage={updateLocalStorage} sessionToken={sessionToken} loginStatus={loginStatus} setLoginStatus={setLoginStatus}/>
      <Display className="welcome-page" clearLocalStorage={clearLocalStorage} updateLocalStorage={updateLocalStorage}  sessionToken={sessionToken} loginStatus={loginStatus} setLoginStatus={setLoginStatus}/>
      <Footer/>
      <EditListItem />
    </div>
  );
}

export default App;
