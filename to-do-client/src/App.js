import './App.css';
import React, {useState, useEffect} from 'react';
import Footer from './site/Footer'
import Header from './site/Header'
import Display from './site/Display'

import {Layout} from 'antd'
import EditListItem from './components/Lists/EditListItem/EditListItem';


const App = (props) => {

  // console.log(props);
  const [sessionToken, setSessionToken] = useState(undefined);
  const [loginStatus, setLoginStatus] = useState(undefined);
  const [lists, setLists] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [listToUpdate, setListToUpdate] = useState([]);


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

    const editUpdateList = (list) => {
      setListToUpdate(list);
      console.log(list);
    }

    const updateOn = () => {
      setUpdateActive(true);
    }

    const updateOff = () => {
      setUpdateActive(false);
    }



  return (
      <Layout className="layout">
          <Header clearLocalStorage={clearLocalStorage} updateLocalStorage={updateLocalStorage} sessionToken={sessionToken} loginStatus={loginStatus} setLoginStatus={setLoginStatus}/>
          <Display className="welcome-page" clearLocalStorage={clearLocalStorage} updateLocalStorage={updateLocalStorage}  sessionToken={sessionToken} loginStatus={loginStatus} setLoginStatus={setLoginStatus}/>
          <Footer/>
          <EditListItem />
      </Layout>
  );
}

export default App;
