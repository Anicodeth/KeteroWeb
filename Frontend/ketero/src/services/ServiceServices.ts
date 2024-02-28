import axios from "axios";

const apiUrl = "https://ketero-web-dmow.vercel.app/api/v1/service";

export async function getService(id: string) {
    try {
        const response = await axios.get(`${apiUrl}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error getting service:", error);
        throw error;
    }
}

export async function getServices() {
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error("Error getting services:", error);
        throw error;
    }
}

export async function createService(serviceData: any) {
    try {
        const response = await axios.post(apiUrl, serviceData);
        return response.data;
    } catch (error) {
        console.error("Error creating service:", error);
        throw error;
    }
}
