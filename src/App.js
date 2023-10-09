import Gallery from './Components/Gallery/gallery';
import './App.css';
import CapitalsApp from './Components/CapitalApp';
import AppStore from './Components/AppStore';

//import CapitalsApp from './Components/CapitalApp';

function App() {
  return (
    <div className="App">
      <Gallery/>
      {/* <CapitalsApp/> */}
      <CapitalsApp/>
      <AppStore/>

      
    </div>
  );
}

export default App;
