import axios from 'axios'

const END_POINT = process.env.NODE_ENV === "development" ? process.env.REACT_APP_LOCAL_ENDPOINT : process.env.REACT_APP_PROD_ENDPOINT
export const sendUpload  = async (file, loadedFromWebcam) => {
    const data = new FormData()
    data.append('user_file', file)
    var resp;
    if (!loadedFromWebcam)
        resp = await axios.post(END_POINT + "/upload-file", data)
    else
        resp = await axios.post(END_POINT + "/upload-file-webcam", data)
    return resp.data
}

export const startDownload = async (url) => {
    const resp = await axios.get(url);
    console.log(resp)
    return resp
}