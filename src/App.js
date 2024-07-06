import './global.css';
import './App.css';
import {
  Pets, MarketingFooter, NavBarHeader, RegisterDogForm, PetDetails,
  SignInForm,
  BannerHolder,
  PetsAvailableTitle
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
        cursor: "pointer",
        
      },
      onClick: () => {
        setShowForm(!showForm);
      },
      display: signedIn ? "block" : "none"
    },
    "SignButton": {
      onClick: signedIn ? handleSignOut : handleSignIn,
      children: signedIn ? 'Sign Out' : 'Sign In'
    },
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
        cursor: "pointer",
      },
      "Divider": {
        width: '600px',
        style: {
          color: '#BF4040'
        }
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

  const bannerHolderOverrides = {
    BannerHolder: {
      width: "100%",
      height: "auto",
      gap: "0",
      overflow: "hidden",
      maxWidth: "100%",
    },
    "Banner 1": {
      width: "75%",
      height: "auto",
      maxWidth: "75%",
      objectFit: "cover",
    }
  };

  const petsTitleOverrides = {
    "PetsAvailableTitle": {
      width: "100%",
      height: "auto",
      padding: "12px 20px",
      maxWidth: "1200px",
      margin: "50px auto 0",
      marginBottom: '20px'
    },
    "AvailableDog": {
      width: "100%",
      height: "auto",
      maxWidth: "100%",
      fontSize: "clamp(20px, 4vw, 48px)", // Decreased font size range
      lineHeight: "1.2",
      letterSpacing: "0.05em",
      textAlign: "center",
      padding: "0px 10px",
    }
  };

  const petsOverrides = {
    Pets: {
      style: { marginTop: "20px" },
      templateColumns: 'var(--pet-grid-columns)',
      itemsPerPage: '8'
    },
  };

  
  return (
    <div className="App">
      <NavBarHeader width={"100%"} overrides={ navbarOverrides }/>
      <BannerHolder overrides={bannerHolderOverrides}/>
      <PetsAvailableTitle overrides={petsTitleOverrides}/>
      <header className="App-header">
        <Pets overrideItems={petsOverrideItems} overrides={petsOverrides}/>
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