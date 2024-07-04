import { useState } from "react";
import ForegroundOverlay from "./ForegroundOverlay";
import SignIn from "./SignIn";
import Register from "./Register";
import { useCallback } from "react";
import Verification from "./Verification";

function AuthManager({appProps}) {
    const {showAuth, setShowAuth, username, setUsername, setSignedIn} = appProps;
    const [showSignIn, setShowSignIn] = useState(true);
    const [showRegister, setShowRegister] = useState(false);
    const [showVerification, setShowVerification] = useState(false);

    const overlayCloseFlow = () => {
        setShowRegister(false);
        setShowAuth(false);
        setShowSignIn(true);
    }
    const handleCloseComplete = useCallback(() => {
        setTimeout(() => {
            setShowRegister(false);
            setShowSignIn(true);
            setShowVerification(false);
        }, 300);
    }, []);

    const authProps = {
        setShowAuth,
        setUsername,
        setShowSignIn,
        setShowRegister,
        setShowVerification,
        username,
        setSignedIn
    }
    return (
        <ForegroundOverlay isVisible={showAuth} onClose={() => {setShowAuth(false)}} onCloseComplete={handleCloseComplete}>
            {showSignIn && <SignIn authProps={authProps}/>}
            {showRegister && <Register authProps={authProps}/>}
            {showVerification && <Verification authProps={authProps}/>}
        </ForegroundOverlay>
    );
};

export default AuthManager;