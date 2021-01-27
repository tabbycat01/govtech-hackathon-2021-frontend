import './App.css';
import React, { useState } from "react"
import LeftPanel from "./components/LeftPanel"
import RightPanel from "./components/RightPanel"
import LoadingComponent from "./components/Loading"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter } from "react-router-dom"
import WebcamComponent from './components/Webcam';

function App() {

  const [processed_image, setProcessedImage] = useState("");
  const [file, setFile] = React.useState("");
  const [notif, setNotif] = useState(null);
  const [loading, setLoading] = useState(false)
  const [takingOne, setTakingOne] = useState(false)

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Passport Photo Tool 📷</h1>
        {
          notif !== null 
          ?
          <div className="topPanel">
            <div className={notif.error ? "notif error": "notif success"}>
                <p>
                  {notif.message}
                </p>
            </div>
          </div>
          :
          null
        }
        

        <div className="split leftPanel"> 
          <div className="centered">
            <LeftPanel loading={loading} setLoading={setLoading} file={file} setFile={setFile} processedImage={processed_image} setProcessedImage={setProcessedImage} setNotif={setNotif} setTakingOne={setTakingOne} />
          </div>
        </div>
        {
          processed_image ? 
          <div>
            <div className="middleArrow">
              <FontAwesomeIcon icon={faArrowCircleRight} style={{color: "green", fontSize: "45pt"}}/>
            </div>

            <div className="split rightPanel">
              <div className="centered">
                <RightPanel processed_image={processed_image} />
              </div>
            </div>
          </div>
          :
          <div className="split rightPanel">
            <div className="centered">
              {
                takingOne ?
                <WebcamComponent setFile={setFile} setTakingOne={setTakingOne} />
                :
                file === "" ? 
                <p>Upload or an image or take one from your camera to be processed</p>
                :
                loading ?
                <LoadingComponent />
                :
                <p>Click on process to view results or replace the current selection</p>
              }
              
            </div>
          </div>
        }
        
      </div>
    </BrowserRouter>
  );
}

export default App;
