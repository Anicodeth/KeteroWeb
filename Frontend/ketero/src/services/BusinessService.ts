
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