export const decoder = (token) => {
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    return {
        id: decodedToken._id,
        isBusiness: decodedToken.isBusiness,
        isAdmin: decodedToken.isAdmin
    };
};
