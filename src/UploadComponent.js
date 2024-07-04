import { Storage } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';

function UploadComponent({uploadProps}) {
    const {setPreviewUrl, setFile, setFilename} = uploadProps

    const handleUpload = async (event) => {
        const file = event.target.files[0];
        const fileName = `${uuidv4()}-${file.name}`;

        const fileUrl = URL.createObjectURL(file);
        setPreviewUrl(fileUrl);
        setFile(file);
        setFilename(fileName);
    };

    return (
        <>
            <input
                type="file"
                accept="image/*"
                onChange={handleUpload}
                style={{ display: 'none' }}
                id="upload-input"
            />
            <label htmlFor="upload-input" style={{ cursor: 'pointer' }}>
                Upload Image
            </label>
        </>
    );
};

export default UploadComponent;