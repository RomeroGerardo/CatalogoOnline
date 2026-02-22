import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor para manejar errores globales o inyectar tokens
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Aquí se podría integrar Sonner para notificaciones globales
        return Promise.reject(error);
    }
);

export default api;
