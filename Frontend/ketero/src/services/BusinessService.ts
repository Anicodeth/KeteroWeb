
import axios from 'axios';

const apiUrl = "https://ketero-web-dmow.vercel.app/api/v1/business";

export async function getBusiness(id: string):Promise<any> {
    try {
        const response = await axios.get(`${apiUrl}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error getting business:", error);
        throw error;
    }
}

export async function addMezgebu(id: string, mezgebuEmail: any):Promise<any> {
    try {
        const response = await axios.post(
          `${apiUrl}/addmezgeb/${id}`,
          { mezgebuEmail: mezgebuEmail }
        );
        return response.data;
    } catch (error) {
        console.error("Error adding mezgebu:", error);
        throw error;
    }
}

export async function deleteBusiness(id: string):Promise<any> {
    try {
        const response = await axios.delete(`${apiUrl}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting business:", error);
        throw error;
    }
}


export async function updateBusiness(id: string, business: any):Promise<any> {
    try {
        const response = await axios.put(`${apiUrl}/${id}`, business);
        return response.data;
    } catch (error) {
        console.error("Error updating business:", error);
        throw error;
    }
}