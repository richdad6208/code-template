import type { AxiosRequestConfig } from 'axios';
import { axiosInstance } from './axios-instance';

export const http = {
    get: async (url: string, config?: AxiosRequestConfig) => {
        try {
            const result = await axiosInstance.get(url, config);
            return result.data;
        } catch (error) {
            throw error;
        }
    },

    post: async (url: string, data: any, config?: AxiosRequestConfig) => {
        try {
            const result = await axiosInstance.post(url, data, config);
            return result.data;
        } catch (error) {
            throw error;
        }
    },

    put: async (url: string, data: any, config?: AxiosRequestConfig) => {
        try {
            const result = await axiosInstance.put(url, data, config);
            return result.data;
        } catch (error) {
            throw error;
        }
    },

    patch: async (url: string, data: any, config?: AxiosRequestConfig) => {
        try {
            const result = await axiosInstance.patch(url, data, config);
            return result.data;
        } catch (error) {
            throw error;
        }
    },

    delete: async (url: string, config?: AxiosRequestConfig) => {
        try {
            const result = await axiosInstance.delete(url, config);
            return result.data;
        } catch (error) {
            throw error;
        }
    },
};
