import './App.css';
import React, {useState, useEffect} from 'react';
import Footer from './site/Footer'
import Header from './site/Header'
import Display from './site/Display'
import Auth from './components/Auth/Auth'

const App = (props) => {

  console.log(props);
  const [sessionToken, setSessionToken] = useState(undefined);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setSessionToken(localStorage.getItem("token"));
        }
    });

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
      <Header clearLocalStorage={clearLocalStorage} updateLocalStorage={updateLocalStorage} sessionToken={sessionToken}/>
      <Display className="welcome-page" updateLocalStorage={updateLocalStorage}/>
      <Footer/>
    </div>
  );
}

export default App;
