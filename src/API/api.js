
const request = async (url, config) => {

    let data = null;
    let error = null;
    let status = -1;

    try {
        const response = await fetch(url, config);
        data = await response.json();
        status = response.status;


        if (status >= 400) {
            throw new Error(data.message);
        }


    } catch (e) {
        error = e.message


    } finally {

        return { data, error, status }

    }


};

const postRequest = async (url, body = {}, token = null) => {
    const config = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
    };

    if (token) config.headers.Authorization = token;

    return await request(url, config);
};



const getRequest = async (url, token = null) => {
    const config = {
        method: 'GET',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
    };

    if (token) config.headers.Authorization = token;

    return await request(url, config);
};


const putRequest = async (url, body = {}, token) => {
    const config = {
        method: "PUT",
        body: JSON.stringify(body),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    }

    if (token) config.headers.Authorization = token;

    return await request(url, config)
}

const deleteRequest = async (url, token) => {
    const config = {
        method: "DELETE",
        headers: { "Content-type": "application/json; charset=UTF-8" }
    }

    if (token) config.headers.Authorization = token;

    return await request(url, config);
}




export { postRequest, getRequest, deleteRequest, putRequest };