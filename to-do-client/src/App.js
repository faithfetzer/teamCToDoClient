import './App.css';
import Footer from './site/Footer'
import Header from './site/Header'
import Display from './site/Display'

function App() {
  return (
    <div className="App">
      <Header/>
      <Display className="welcome-page"/>
      <Footer/>
    </div>
  );
}

export default App;
