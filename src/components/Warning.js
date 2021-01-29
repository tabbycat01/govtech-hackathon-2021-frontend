import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

const Warning = ({issue}) => {
    return (
        <div className="error">
            <span style={{fontSize: "11pt"}}>
                <FontAwesomeIcon icon={faExclamationTriangle} style={{color: "red", fontSize: "10pt", paddingRight: "10px"}}/>
                Warning: {issue}
            </span>
        </div>
    )
}

export default Warning