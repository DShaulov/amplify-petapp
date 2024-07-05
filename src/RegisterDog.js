import { useState, useRef } from "react";
import { RegisterDogForm } from "./ui-components";
import ForegroundOverlay from './ForegroundOverlay';
import { DataStore } from '@aws-amplify/datastore';
import { Pet } from './models';
import UploadComponent from "./UploadComponent";
import { uploadData, getUrl } from "aws-amplify/storage";
import { getCurrentUser, fetchUserAttributes } from "aws-amplify/auth";
import { Spinner } from "./Spinner";
import './TextArea.css';

function RegisterDog({registerProps}) {
    const {showForm, setShowForm} = registerProps;
    const [previewUrl, setPreviewUrl] = useState('https://amplify-petapp-storage-6f5fa300511cc-staging.s3.eu-north-1.amazonaws.com/public/dog_profile.png');
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [genderSelected, setGenderSelected] = useState('Male');
    const [stepperValue, setStepperValue] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const nameRef = useRef(null);
    const breedRef = useRef(null);
    const colorRef = useRef(null);
    const aboutRef = useRef(null);
    const bucketUrl = 'https://amplify-petapp-storage-6f5fa300511cc-staging.s3.eu-north-1.amazonaws.com/public/';

    const uploadProps = {
        setPreviewUrl,
        setFile,
        setFilename
    }

    const handleSubmit = async () => {
        setIsLoading(true);
        const name = nameRef.current.value;
        const breed = breedRef.current.value;
        const color = colorRef.current.value;
        const about = aboutRef.current.value;
        const age = stepperValue;
        const gender = genderSelected;

        if (!name || !breed || !color || !about) {
            setErrorMessage("* Fields cannot be empty");
            setIsLoading(false);
            return;
        }
        if (!file || !filename) {
            setErrorMessage("* Please upload an image of your dog");
            setIsLoading(false);
            return;
        }

        try {
            const result = await uploadData({
                key: filename,
                data: file,
                options: {
                    acl: 'public-read',
                    contentType: file.type
                }
            }).result;
            console.log('File uploaded successfully', result);
        } catch (error) {
            console.error('Error uploading file:', error);
            setIsLoading(false);
            return;
        }

        try {
            const attributes = await fetchUserAttributes();
            const newPet = await DataStore.save(new Pet({
                'name': name,
                'age':age,
                'breed': breed,
                'about': about,
                'color': color,
                'gender': gender,
                'image': bucketUrl + filename,
                'contact': attributes.email
            }));
            console.log('New pet created:', newPet);
            setShowForm(false);
            setPreviewUrl('https://amplify-petapp-storage-6f5fa300511cc-staging.s3.eu-north-1.amazonaws.com/public/dog_profile.png');
            setIsLoading(false);
        } catch (error) {
            console.error('Error creating pet:', error);
            setIsLoading(false);
            return;
        };
    };

    const genderSelectOptions = [
        'Male', 'Female'
    ];
    
    const handleGenderChange = (event) => {
        setGenderSelected(event.target.value);
    };

    const handleAgeChange = (newAge) => {
        if (newAge >= 1) {setStepperValue(newAge)};
    };

    const registerDogFormOverrides = {
        "MyIcon": {
            onClick: () => {
                setShowForm(false);
            },
            style: {
                cursor: "pointer"
            }
        },
        "ProfileImage": {
            src: previewUrl
        },
        "UploadImage": {
            children: <UploadComponent uploadProps={uploadProps}/>
        },
        "RegisterBtn": {
            onClick: handleSubmit,
            children: isLoading ? <Spinner/> : 'Register'
        },
        "ErrorMessage": {
            display: errorMessage ? 'flex' : 'none'
        },
        'ErrorBody': {
            children: errorMessage
        },
        "Gender": {
            options: genderSelectOptions,
            value: genderSelected,
            onChange: handleGenderChange
        },
        "Age": {
            min: 0,
            max: 20,
            onStepChange: handleAgeChange,
            value: stepperValue
        },
        "AboutTextArea": {
            className: "custom-textarea"
        },
        "Name": {ref: nameRef},
        "Breed": {ref: breedRef},
        "Color": {ref: colorRef},
        "AboutTextArea": {ref: aboutRef},
    };

    
    return (
        <ForegroundOverlay isVisible={showForm} onClose={() => {setShowForm(false); setErrorMessage('')}}>
            <RegisterDogForm 
                overrides={ registerDogFormOverrides }
                style={{
                    textAlign: "left"
                }}
            />
      </ForegroundOverlay>
    )
};

export default RegisterDog;