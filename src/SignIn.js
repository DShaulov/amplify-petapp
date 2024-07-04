import { useState, useRef } from "react";
import { signIn } from "aws-amplify/auth";
import { SignInForm } from "./ui-components";
import { resendSignUpCode } from "aws-amplify/auth";
import { Spinner } from "./Spinner";

function SignIn({ authProps }) {
    const {setShowAuth, setUsername, setShowSignIn, setShowRegister, setShowVerification, setSignedIn} = authProps;
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = async () => {
        setErrorMessage('');
        setIsLoading(true);
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        if (username === '') {
            setErrorMessage('* Username cannot be empty');
            setIsLoading(false);
            return;
        }
        try {
            const { isSignedIn, nextStep } = await signIn({ username, password });
            setIsLoading(false);
            if (isSignedIn) {
                setUsername(username);
                setSignedIn(true);
                setShowAuth(false);
                setShowVerification(false);
                setShowRegister(false);
                setShowSignIn(true);
            } else {
                console.log(nextStep);
                if (nextStep.signInStep === 'CONFIRM_SIGN_UP') {
                    resendSignUpCode({username});
                    setUsername(username)
                    setShowSignIn(false);
                    setShowVerification(true);
                } else {
                    setErrorMessage('An unexpected authentication step')
                }
            }
        } catch (error) {
            setIsLoading(false);
            console.error('Error signing in:', error);
            console.error('Error details:', JSON.stringify(error, null, 2));
      
            if (error.name === 'NotAuthorizedException') {
                setErrorMessage('* Incorrect username or password. Please try again.');
            } else if (error.name === 'UserNotConfirmedException') {
                resendSignUpCode({username});
                setUsername(username)
                setShowSignIn(false);
                setShowVerification(true);
            } else if (error.name === 'UserNotFoundException') {
                setErrorMessage('* Incorrect username or password. Please try again.');
            } else {
                setErrorMessage('* An error occurred during sign in.');
            }
        }
      };
    
    const signInFormOverrides = {
        "Not a member?": {
            fontWeight: "400"
        },
        "Register now": {
            textDecoration: "underline",
            style: {
                cursor: "pointer"
            },
            onClick: ()=> {
                setShowSignIn(false);
                setShowRegister(true);
            }
        },
        "MyIcon": {
            onClick: () => {
                setShowAuth(false);
            },
            style: {
                cursor: "pointer"
            }
        },
        "Username":{
            ref: usernameRef
        },
        "Password": {
            ref: passwordRef,
            type: "password"
        },
        "SignInButton": {
            onClick: handleSubmit,
            children: isLoading ? <Spinner/> : "Sign In"
        },
        "ErrorMessage": {
            children: errorMessage,
            color: errorMessage ? "rgba(255,0,0,1)" : "rgba(255,255,255,1)",
            fontWeight: 200
        }
    }
    return (
        <SignInForm
        overrides = {signInFormOverrides}
        style={{
            textAlign: "left"
          }}
        />
    );
}

export default SignIn;