import './App.css';
import Footer from './site/Footer'
import Header from './site/Header'
import Display from './site/Display'
//import Auth from './components/Auth/Auth'
import EditListItem from './components/Lists/EditListItem/EditListItem';

const App = (props) => {

  console.log(props);

  return (
    <div className="App">
      <Header/>
      <Display className="welcome-page"/>
      <Footer/>
      <EditListItem />
    </div>
  );
}

export default App;
