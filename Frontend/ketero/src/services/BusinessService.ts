
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
    console.log("addMezgebu", id, mezgebuEmail)
    try {
        const response = await axios.post(
          `${apiUrl}/addmezgeb/${id}`,
          mezgebuEmail
        );
        return response.data;
    } catch (error) {
        console.error("Error adding mezgebu:", error);
        throw error;
    }
}