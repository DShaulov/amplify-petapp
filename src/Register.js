import { useState, useRef } from "react";
import { RegisterForm } from "./ui-components";
import { signUp } from "aws-amplify/auth";
import { Spinner } from "./Spinner";

function Register({authProps}) {
    const {setShowAuth, setUsername, setShowSignIn, setShowRegister, setShowVerification} = authProps;
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const emailRef = useRef(null);

    const validatePassword = (password) => {
        if (password.length < 8) {
            return "* Password must be at least 8 characters long.";
        }
        if (!/[A-Z]/.test(password)) {
            return "* Password must contain at least one uppercase letter.";
        }
        if (!/[a-z]/.test(password)) {
            return "* Password must contain at least one lowercase letter.";
        }
        return null;
    };

    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        const email = emailRef.current.value;

        if (!validateEmail(email)) {
            setErrorMessage("* Please enter a valid email address.");
            return;
        }

        const passwordError = validatePassword(password);
        if (passwordError) {
            setErrorMessage(passwordError);
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage("* Passwords do not match.");
            return;
        }
        setErrorMessage('');
    
        const formData = { username, password, email };
        console.log('Form Data:', formData);
        try {
            const { isSignUpComplete, userId, nextStep } = await signUp({
                username,
                password,
                options: {
                    userAttributes: {
                        email,
                    }
                }
            });
            setIsLoading(false);
            console.log('Signup successful. Verification required.');
            setUsername(username);
            setShowRegister(false);
            setShowVerification(true);
        } catch (error) {
            setIsLoading(false);
            console.error('Error signing up:', error);
            if (error.name === 'UsernameExistsException') {
                setErrorMessage('* This username is already taken. Please choose another.');
            } else if (error.name === 'InvalidParameterException' && error.message.includes('email')) {
                setErrorMessage('* This email is invalid or already in use. Please use a different email.');
            } else {
                setErrorMessage(`* An error occurred during sign up: ${error.message}`);
            }
        }
    };

    const registerFormOverrides = {
        "RegisterBtn": {
            onClick: handleSubmit,
            children: isLoading ? <Spinner/> : "Register"
        },
        "MyIcon": {
            onClick: () => {
                setShowAuth(false);
            },
            style: {
                cursor: "pointer"
            }
        },
        "Already a member?": {
            fontWeight: "400"
        },
        "Login": {
            textDecoration: "underline",
            style: {
                cursor: "pointer"
            },
            onClick: () => {
                setShowRegister(false);
                setShowSignIn(true);
            }
        },
        "Username": {ref: usernameRef},
        "Password": {ref: passwordRef},
        "ConfirmPassword": {ref: confirmPasswordRef},
        "Email": {ref: emailRef},
        "ErrorMessage": {
            children: errorMessage,
            color: errorMessage ? "rgba(255,0,0,1)" : "rgba(255,255,255,1)",
            fontWeight: 200
        }
    };

    return (
        <RegisterForm 
        style={{textAlign: "left"}}
        overrides= {registerFormOverrides}/>
    );
}

export default Register;