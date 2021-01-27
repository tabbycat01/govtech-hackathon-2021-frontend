import React, { useState } from 'react';
import '../Panel.css';
import { sendUpload } from "../services/ApiService"

const LeftPanel = ({loading, setLoading, file, setFile, processed_image, setProcessedImage, setNotif, setTakingOne}) => {
    
    const uploadAnImage = () => {
        document.getElementById("selectImage").click()
        setTakingOne(false)
    }

    const fileSelectHandler = (event) => {
        setProcessedImage("")
        if (event.target.files[0])
            setFile(event.target.files[0]);
        else
            setFile("")
    }

    const confirmSendUpload = async () => {
        setProcessedImage("")
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
                message: exception.message || 'Exception occured while uploading the image!',
                error: true
            })
            setTimeout(() => {
                setNotif(null)
              }, 5000)
        } finally {
            setLoading(false);
        }
    }

    const webcamUpload = () => {
        setTakingOne(true)
        setFile("")
        setProcessedImage("")
    }

    return (
        <div>
            {
                file !== "" ? 
                <div>
                    <h3>Original image</h3>
                    {/* <img alt="uploaded_image" src={props.initialImage} /> */}
                    {file && <ImageThumb image={file} />}
                    <div className={(file && loading) ? "dullButton": "processButton"} onClick={(file && loading) ? null: confirmSendUpload} >
                        <p>{(file && loading) ? "Disabled while processing": "Process this image"}</p>
                    </div>
                </div>
                : null
            }
            {
                !(file && loading) ?
                <div>
                    <input id="selectImage" onChange={fileSelectHandler} type="file" accept=".jpg,.jpeg,.jfif,.png,.jpe,.jif,.jfi,.webp"  hidden />
                    <div className={ file ? "dullButton": "uploadButton"} onClick={uploadAnImage}>
                        <p> {file === "" ? "Upload ": "Upload new "} image </p>
                    </div> 
                    <div className={ file ? "dullButton": "uploadButton"} onClick={webcamUpload}>
                        <p> {file === "" ? "Take a ": "Take a new "} picture</p>
                    </div> 
                </div>
                :
                <div>
                    <div className="dullButton" >
                        <p> Disabled while processing... </p>
                    </div> 
                    <div className="dullButton">
                        <p> Disabled while processing... </p>
                    </div> 
                </div>
            }
            
        </div>
    )
}

/**
 * Component to display thumbnail of image.
 */
const ImageThumb = ({ image }) => {
    console.log(image)
    try {
        return <img id="leftImage" src={URL.createObjectURL(image)} alt={image.name} />;
    } catch(e) {
        return <img id="leftImage" src={image} alt={image.name} />;
    }
    
  };

export default LeftPanel