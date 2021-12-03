import apiClient from "../api/apiClient";

export const ImportNoteService = {
    getAllImportNotes: () => apiClient().get("/ImportNote"),
    createImportNote: (data) => apiClient().post("/ImportNote/insertImportNote", data),
    // deleteImportNote: (categoryId) => apiClient().delete(`/category/${categoryId}`),
     getSingleImportNote: (id) => apiClient().get(`/ImportNote/${id}`),
     getDetailSingleImportNote: (id) => apiClient().get(`/ImportNote/Details?id=${id}`),
     updateStatusSuccess: (id) => apiClient().put(`/ImportNote/update-status/${id}`)
    // editImportNote: ({id, name, description }) => apiClient().put(`/category/${id}`, {id, name, description }),
}