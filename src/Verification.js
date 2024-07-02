import { useState, useRef } from "react";
import { VerificationForm } from "./ui-components";
import { confirmSignUp } from 'aws-amplify/auth';


function Verification({authProps}) {
    const {setShowAuth, setShowSignIn, setShowRegister, setShowVerification, username} = authProps;
    const [errorMessage, setErrorMessage] = useState('');
    const [verificationCode, setVerificationCode] = useRef(null);
    const [showResend, setShowResend] = useState(false);
    const handleVerification = async (verificationCode) => {
        try {
            const { isSignUpComplete, nextStep } = await confirmSignUp({
                username,
                confirmationCode: verificationCode
            });
    
            if (isSignUpComplete) {
                console.log('Verification successful');
                setErrorMessage(false);
            } else {
                console.log('Additional steps required:', nextStep);
            }
        } catch (error) {
            console.error('Error during verification:', error);
            setErrorMessage('* Verification failed. Please try again.');
        }
    };
    
    const errorOverride = {
        children: errorMessage,
        color: errorMessage ? "rgba(255,0,0,1)" : "rgba(255,255,255,1)",
        fontWeight: 200
    };

    const resendOverride = {
        children: "Resent verification code",
        color: "rgba(0,0,0,1)",
        fontWeight: 200
    }

    const verificationFormOverrides = {
        "ConfirmBtn": {
            onClick: handleVerification
        },
        "Code": {ref: verificationCode},
        "ErrorMessage": showResend ? resendOverride : errorOverride
    }

    return (
        <VerificationForm overrides={verificationFormOverrides}/>
    )
};

export default Verification;