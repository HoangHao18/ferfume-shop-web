import apiClient from "../api/apiClient";

export const ProductService = {
    getAllProducts: () => apiClient().get("product/"),
    getImagesProduct: (id) => apiClient().get(`/product/${id}/list-image`),
    createProduct: ({ name, email, phone, address, description }) => apiClient().post("product/", { name, email, phone, address, description }),
    deleteProduct: (productId) => apiClient().delete(`/product/${productId}`),
    getSingleProduct: (productId) => apiClient().get(`/product/${productId}`),
    editProduct: ({ id, name, email, phone, address, description }) => apiClient().put(`/product/${id}`, { id, name, email, phone, address, description }),
}