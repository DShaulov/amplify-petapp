import { useState } from "react";
import { RegisterDogForm } from "./ui-components";
import ForegroundOverlay from './ForegroundOverlay';
import UploadComponent from "./UploadComponent";
import { Storage } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';

function RegisterDog({registerProps}) {
    const {showForm, setShowForm} = registerProps;
    const [previewUrl, setPreviewUrl] = useState('https://amplify-petapp-storage-6f5fa300511cc-staging.s3.eu-north-1.amazonaws.com/public/dog_profile.png');
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const uploadProps = {
        setPreviewUrl,
        setFile,
        setFilename
    }

    const handleSubmit = () => {
        console.log("HEHE")
    }

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
        "RegisterBtn": {onClick: handleSubmit}
    };

    
    return (
        <ForegroundOverlay isVisible={showForm} onClose={() => setShowForm(false)}>
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