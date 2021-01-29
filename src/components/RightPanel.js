import React from "react"
import '../Panel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import Warning from "./Warning"

const RightPanel = ({processed_image, issues}) => {

    return (
        <div>
            <h3>Processed image</h3>
            <img id="rightImage" alt={processed_image} src={processed_image}/>
            {
                issues.map((issue, i) => 
                    <Warning issue={issue} key={i} />
                )
            }
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