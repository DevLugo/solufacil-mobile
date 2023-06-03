//TODO resetToken will clear token from localstorage
export const resetToken = () => {localStorage.removeItem("token");};
//TODO setToken will save token on localstorage
export const setToken = (token: string) => {
    localStorage.setItem("token", token)
};
export const getToken = async() => localStorage.getItem("token");
export const isTokenValid = () => {return true}

