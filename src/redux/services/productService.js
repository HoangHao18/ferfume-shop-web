import apiClient from "../api/apiClient";

export const ProductService = {
    getAllProducts: () => apiClient().get("product/"),
    createProduct: (data) => apiClient().post("product/", data),
    getSingleProduct: (id) => apiClient().get(`/product/${id}`),

    getImagesProduct: (id) => apiClient().get(`/product/${id}/list-image`),
    deleteProduct: (productId) => apiClient().delete(`/product/${productId}`),
    editProduct: (id, data) => apiClient().put(`/product/${id}`, data),

    getProductByManufactureId: (id) => apiClient().get(`product/manufacture=${id}`),
}