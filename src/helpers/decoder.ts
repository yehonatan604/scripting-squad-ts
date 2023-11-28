export const decoder = (token: string) => {
    const decodedToken: any = JSON.parse(atob(token.split('.')[1]));

    return {
        id: decodedToken._id,
        isBusiness: decodedToken.isBusiness,
        isAdmin: decodedToken.isAdmin
    }
}