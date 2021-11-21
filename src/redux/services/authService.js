import apiClient from "../api/apiClient";

export const AuthService = {
    login:  ({ email, password }) => apiClient().post("api/auth/login", { email, password }),
}

