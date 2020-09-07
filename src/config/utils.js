import axios from 'axios';

export async function CommonApiCalling (requestType, url, requestDeatils) {
    try {
        let options = {
            method: requestType,
            url,
            data: requestDeatils.data,
            params: requestDeatils.params,
            headers: requestDeatils.headers
        }
        options = JSON.parse(JSON.stringify(options)) // To Remove any undefined Value Key.;        
        const requestResposne = await axios(options);
        return requestResposne
    } catch (error) {
        if (error.data)
            console.log("error: ", error.data)
        else
            console.log("error: ", error)
        throw error;
    }
}


// export default CommonApiCalling;