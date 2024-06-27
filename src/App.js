import './global.css';
import './App.css';
import {
  Pets, MarketingFooter, NavBarHeader, RegisterDogForm
 } from './ui-components';
 
function App() {
  const [showForm, setShowForm] = useState(false)
  const registerDogFormOverrides = {
    image: {
      src: 'https://img.icons8.com/color/50/000000/dog'
    }
  };
  const navbarOverrides = {
    image: {
      src: 'https://img.icons8.com/color/50/000000/dog'
    },
    "Add Pet": {
      style: {
        cursor: "pointer"
      },
      onClick: () => {
        alert("Hello!");
      }
    }
  };
  const addPetOverrides = {
    
  }
  return (
    <div className="App">
      <NavBarHeader width={"100%"} overrides={ navbarOverrides }/>
      <header className="App-header">
        <RegisterDogForm overrides={ registerDogFormOverrides} 
        style={{
          margin: "1rem"
        }}/>
        <Pets/>
      </header>
      <MarketingFooter width={"100%"}/>
    </div>
  );
}

export default App;
