
const request = async (url, config) => {

    let data = null;
    let error = null;

    try {
        const response = await fetch(url, config);
        data = await response.json();

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }


    } catch (error) {
        console.log(error.message)
        error = error.message

    } finally {
        return { data, error }
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
export { postRequest, getRequest };
