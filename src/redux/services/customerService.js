import apiClient from "../api/apiClient";

  
export const CustomerService = {
    
     getAllCustomers: () => apiClient().get("/api/customer/all"),
    // createCustomer: (data) => apiClient().post("employee/register", data),
    // //deleteCustomer: (employeeId) => apiClient().delete(`/employee/${employeeId}`),
    // getSingleCustomer: (id) => apiClient().get(`/employee/${id}`),
    // editCustomer: (data) => apiClient().put(`/employee/update`, data),
    // editRoleCustomer: (data) => apiClient().put(`/api/auth/account`, data),
}