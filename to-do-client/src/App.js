import './App.css';
import Footer from './site/Footer'
import Header from './site/Header'
import Display from './site/Display'
import Auth from './components/Auth/Auth'

const App = (props) => {

  console.log(props);

  return (
    <div className="App">
      <Header/>
      <Display className="welcome-page"/>
      <Footer/>
    </div>
  );
}

export default App;
