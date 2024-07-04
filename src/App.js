import './global.css';
import './App.css';
import {
  Pets, MarketingFooter, NavBarHeader, RegisterDogForm, PetDetails,
  SignInForm
 } from './ui-components';
import { useState, useEffect } from 'react';
import ForegroundOverlay from './ForegroundOverlay';
import { getCurrentUser, signOut } from 'aws-amplify/auth';
import AuthManager from './AuthManager';
import RegisterDog from './RegisterDog';
 
function App() {
  const [username, setUsername] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [pet, setPet] = useState();
  const [showAuth, setShowAuth] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [verified, setVerified] = useState(false);

  const checkUserSignIn = async () => {
    try {
      const user = await getCurrentUser();
      console.log('User is signed in:', user);
      return true;
    } catch (error) {
      console.log('User is not signed in');
      return false;
    }
  }

  useEffect(() => {
    const checkAuthStatus = async () => {
      const authStatus = await checkUserSignIn();
      setSignedIn(authStatus);
    }
    checkAuthStatus();
  }, []);

  const handleSignIn = () => {
    setShowAuth(true);
  };
  const handleSignOut = async () => {
    try {
      await signOut();
      setSignedIn(false);
      console.log('User signed out successfully')
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  
  const navbarOverrides = {
    image: {
      src: 'https://img.icons8.com/color/50/000000/dog'
    },
    "RegisterDog": {
      style: {
        cursor: "pointer"
      },
      onClick: () => {
        setShowForm(!showForm);
      },
      display: signedIn ? "block" : "none"
    },
    "SignButton": {
      onClick: signedIn ? handleSignOut : handleSignIn,
      children: signedIn ? 'Sign Out' : 'Sign In'
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

  const appProps = {
    showAuth,
    setShowAuth,
    username,
    setUsername,
    setSignedIn
  }
  const registerProps = {
    showForm,
    setShowForm
  }
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
      <RegisterDog registerProps={registerProps}/>
      <AuthManager appProps={appProps}/>
    </div>
  );
}

export default App;