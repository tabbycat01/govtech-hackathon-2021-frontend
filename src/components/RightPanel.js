import React from "react"
import '../Panel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const RightPanel = ({processed_image}) => {

    return (
        <div>
            <h1>Cropped image</h1>
            <img alt={processed_image} src={processed_image}/>
            <div className="uploadButton">
                <p>Download 
                    <FontAwesomeIcon icon={faDownload} style={{color: "grey", fontSize: "14pt", paddingLeft: "15px"}}/>
                </p>
            </div>
        </div>
    )
}


export default RightPanel