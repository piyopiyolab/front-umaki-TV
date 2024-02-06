// // Function to check if there's a token in localStorage



export const isAuth = () => {
    const accessToken = localStorage.getItem('accessToken');

    // check if token exist
    if (!accessToken) {
        return false;
    }

    // Split Token to decode (without jwt decode)
    const tokenParts = accessToken.split('.');
    if (tokenParts.length !== 3) {
        return false; // token invalid
    }


    //Decode from token.payload (base64)
    const payload = JSON.parse(atob(tokenParts[1]));

    // Expiration dateTime
    const expirationTime = payload.exp * 1000;  // Convert in ms
    const currentTime = Date.now();

    // check if token is expired
    if (currentTime > expirationTime) {
        console.log('Token has expired');
        return false;
    }

    // Le jeton est valide
    return true;
};

if (isAuth()) {
    console.log('User is authenticated');
} else {
    console.log('User is not authenticated');
}
