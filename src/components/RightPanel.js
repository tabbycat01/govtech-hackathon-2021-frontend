import React from "react"
import '../Panel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { startDownload } from '../services/ApiService'
import { Link } from "react-router-dom"

const RightPanel = ({processed_image}) => {

    return (
        <div>
            <h1>Cropped image</h1>
            <img alt={processed_image} src={processed_image}/>
            <a style={{textDecoration: "none", color: "black"}} href={processed_image} target="_blank" download>
                <div className="uploadButton">
                    <p>Download 
                        <FontAwesomeIcon icon={faDownload} style={{color: "grey", fontSize: "14pt", paddingLeft: "15px"}}/>
                    </p>
                </div>
            </a>
        </div>
    )
}


export default RightPanel