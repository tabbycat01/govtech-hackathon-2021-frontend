import Webcam from "react-webcam"
import React from "react"
import "../Panel.css"

const videoConstraints = {
    facingMode: "user",
    height: 400
  };

const WebcamComponent = ({setFile, setTakingOne, setLoadedFromWebcam}) => {

    const webcamRef = React.useRef(null);
 
    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        // var base64ImageContent = imageSrc.replace(/^data:image\/(png|jpg);base64,/, "");
        // const blob = base64ToBlob(base64ImageContent, "image/png")
        // setFile(blob)
        fetch(imageSrc)
        .then(res => res.blob())
        .then(blob => {
            const file = new File([blob], "webcam_file" + Math.random().toString(36).substr(2, 8) + ".png",{ type: "image/png" })
            setFile(file)
        })
        setTakingOne(false)
        setLoadedFromWebcam(true)
        },
        [webcamRef]
    );

    return (
        <div>
            <Webcam ref={webcamRef} audio={false} screenshotQuality={1} screenshotFormat="image/png" videoConstraints={videoConstraints} />

            <div className="uploadButton" onClick={capture}>Take a photo</div>
            <div className="dullButton" onClick={() => { setTakingOne(false); setLoadedFromWebcam(false); }}>Cancel</div>
        </div>
        
    )
}

export default WebcamComponent