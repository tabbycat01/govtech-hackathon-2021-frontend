import React, { useState } from 'react';
import '../Panel.css';
import { sendUpload } from "../services/ApiService"

const LeftPanel = ({setLoading, file, setFile, setProcessedImage, setNotif}) => {
    
    const uploadAnImage = () => {
        document.getElementById("selectImage").click()
    }

    const fileSelectHandler = (event) => {
        setProcessedImage("")
        if (event.target.files[0])
            setFile(event.target.files[0]);
        else
            setFile("")
    }

    const confirmSendUpload = async () => {
        
        setLoading(true)
        try {
            const response = await sendUpload(file)
            setProcessedImage(response)
            
            setNotif({
                message: 'Image processed succesfully!',
                error: false
            })
            setTimeout(() => {
                setNotif(null)
              }, 5000)
        }    
        catch (exception) {
            // setError(true)
            setNotif({
                message: 'Exception occured while uploading the image!',
                error: true
            })
            console.log(exception)
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            {
                file !== "" ? 
                <div>
                    <h3>Original image</h3>
                    {/* <img alt="uploaded_image" src={props.initialImage} /> */}
                    {file && <ImageThumb image={file} />}
                    <div className="uploadButton" onClick={confirmSendUpload} >
                        <p>Process this image</p>
                    </div>
                </div>
                : null
            }
            <div className={ file ? "dullButton": "uploadButton"} onClick={uploadAnImage}>
                <input id="selectImage" onChange={fileSelectHandler} type="file" accept="image/*" hidden />
                <p > {file === "" ? "Upload an": "Replace with another"} image</p>
            </div> 
        </div>
    )
}

/**
 * Component to display thumbnail of image.
 */
const ImageThumb = ({ image }) => {
    return <img src={URL.createObjectURL(image)} alt={image.name} />;
  };

export default LeftPanel