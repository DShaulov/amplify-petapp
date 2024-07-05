import { useState, useRef } from "react";
import { VerificationForm } from "./ui-components";
import { confirmSignUp, resendSignUpCode } from 'aws-amplify/auth';
import { Spinner } from "./Spinner";


function Verification({authProps}) {
    const {setShowAuth, setShowSignIn, setShowRegister, setShowVerification, username, setSignedIn} = authProps;
    const [errorMessage, setErrorMessage] = useState('');
    const [resendMessage, setResendMessage] = useState('');
    const verificationCode = useRef(null);
    const [showResend, setShowResend] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isResendLoading, setIsResendLoading] = useState(false);
    const handleVerification = async () => {
        try {
            setIsLoading(true);
            const code = verificationCode.current.value
            setShowResend(false);
            const { isSignUpComplete, nextStep } = await confirmSignUp({
                username,
                confirmationCode: code
            });
    
            if (isSignUpComplete) {
                console.log('Verification successful');
                setSignedIn(true);
                setShowAuth(false);
                setShowSignIn(true);
                setShowRegister(false);
                setShowVerification(false);
                setIsLoading(false);
                setErrorMessage('');
            } else {
                console.log('Additional steps required:', nextStep);
            }
        } catch (error) {
            console.error('Error during verification:', error);
            setErrorMessage('Verification failed. Please try again.');
            setIsLoading(false);
        }
    };

    const handleResendCode = async () => {
        setShowResend(true);
        setIsResendLoading(true);
        try {
            await resendSignUpCode({ username });
            setResendMessage('Verification code resent successfully.');
            setErrorMessage(''); // Clear any existing errors
            setShowResend(false);
            setIsResendLoading(false);
        } catch (error) {
            setErrorMessage('Failed to resend verification code. Please try again.');
            console.error('Resend error:', error);
            setShowResend(false);
            setIsResendLoading(false);
        }
    };
    
    const errorOverride = {
        children: errorMessage,
        color: errorMessage ? "rgba(255,0,0,1)" : "rgba(255,255,255,1)",
        fontWeight: 200
    };

    const resendOverride = {
        children: resendMessage,
        color: "rgba(0,0,0,1)",
        fontWeight: 200
    }

    const verificationFormOverrides = {
        "ConfirmBtn": {
            onClick: handleVerification,
            children: isLoading ? <Spinner/> : "Confirm"
        },
        "ResendBtn":{
            onClick: handleResendCode,
            children: isResendLoading ? <Spinner/> : "Resend"
        },
        "Code": {
            ref: verificationCode,
            label: "",
            textAlign: "left"
        },
        "ErrorMessage": {
            display: errorMessage ? 'flex' : 'none'
        },
        'ErrorBody': {
            children: errorMessage
        },
    }

    return (
        <VerificationForm overrides={verificationFormOverrides}/>
    )
};

export default Verification;