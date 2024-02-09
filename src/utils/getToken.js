export const getUserIDFromToken = () => {
    const accessToken = localStorage.getItem('accessToken');


    // Check token if exist
    if (!accessToken) {
        return null;
    }

    // divide token (header, payload, signature)
    const tokenParts = accessToken.split('.');
    if (tokenParts.length !== 3) {
        return null; // Token invalide
    }

    // Decrypt token (base64)
    const payload = JSON.parse(atob(tokenParts[1]));

    const userId = payload.user_id;

    return userId;
};

const userId = getUserIDFromToken();
console.log("User ID:", userId);
