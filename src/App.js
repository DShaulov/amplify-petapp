import './global.css';
import './App.css';
import {
  Pets, MarketingFooter, NavBarHeader, RegisterDogForm, PetDetails
 } from './ui-components';
import { useState } from 'react';
import ForegroundOverlay from './ForegroundOverlay';

 
function App() {
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [pet, setPet] = useState();

  const registerDogFormOverrides = {
    image: {
      src: 'https://img.icons8.com/color/50/000000/dog'
    },
    "MyIcon": {
      onClick: () => {
        setShowForm(false);
      },
      style: {
        cursor: "pointer"
      }
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
        setShowForm(!showForm);
      }
    },
    "SignButton": {
      onClick: () => {
        alert("Hello!");
      },
      
    }
  };
  const petsOverrideItems = ({item, index}) => ({
    overrides: {
      "Button": {
        onClick: () => {
          setShowDetails(!showDetails);
          setPet(item);
        }
      }
    }
  });

  const petDetailsOverrides = {
    "CloseIcon": {
      onClick: () => {
        setShowDetails(false)
      },
      style: {
        cursor: "pointer"
      }
    }
  };
  return (
    <div className="App">
      <NavBarHeader width={"100%"} overrides={ navbarOverrides }/>
      <header className="App-header">
        <Pets overrideItems={petsOverrideItems}/>
      </header>
      <MarketingFooter width={"100%"}/>
      <ForegroundOverlay isVisible={showDetails} onClose={() => setShowDetails(false)}>
        <PetDetails 
          pet={pet} 
          overrides={ petDetailsOverrides }
          style={{
            textAlign: "left"
          }}
        />
      </ForegroundOverlay>
      <ForegroundOverlay isVisible={showForm} onClose={() => setShowForm(false)}>
        <RegisterDogForm 
          overrides={ registerDogFormOverrides } 
          style={{
            textAlign: "left"
          }}
        />
      </ForegroundOverlay>
    </div>
  );
}

export default App;