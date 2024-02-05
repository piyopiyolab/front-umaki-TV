// Function to check if there's an access token in localStorage

export const isAuth = () => {
    const accessToken = localStorage.getItem('accessToken');
    return !!accessToken;
};


if (isAuth()) {
    console.log('User is authenticated');
} else {
    console.log('User is not authenticated');
}
