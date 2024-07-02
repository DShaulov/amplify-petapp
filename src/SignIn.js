import { useState } from "react";
import { signIn } from "aws-amplify/auth";
import { SignInForm } from "./ui-components";

function SignIn({ authProps }) {
    const {showAuth, setShowAuth, showSignIn, setShowSignIn, showRegister, setShowRegister} = authProps;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        try {
            const user = await signIn(username, password);
            console.log('Sign-in successful:', user);
        } catch (error) {
            console.error('Error signing in:', error);
            if (error.code === 'UserNotConfirmedException') {
            // Handle unconfirmed user
            } else if (error.code === 'PasswordResetRequiredException') {
            // Handle password reset required
            } else if (error.code === 'NotAuthorizedException') {
            // Handle incorrect username or password
            } else {
            // Handle other errors
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