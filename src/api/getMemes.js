import axios from "axios"

export const getMemes = async () => {
    const response = await axios.get("https://api.imgflip.com/get_memes")
    return await response.data
}