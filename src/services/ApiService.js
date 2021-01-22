import axios from 'axios'

const END_POINT = "http://localhost:5000"

export const sendUpload  = async (file) => {
    const data = new FormData()
    data.append('user_file', file)
    const response = await axios.post(END_POINT+"/upload-file", data)
    return response.data
}

export const startDownload = async (url) => {
    const resp = await axios.get(url);
    console.log(resp)
    return resp
}