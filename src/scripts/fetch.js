import axios from 'axios';

async function checkUrl(url) {
    try {
        const response = await axios.get(url);
        if (response.status === 200) {
            return true;
        }
    } catch (error) {
        return false;
    }
    return false;
}

export default checkUrl;
