import axios from 'axios';

const apiUrl = "https://ketero-web-dmow.vercel.app/api/v1/business";

export async function getBusinesses() {
    try {
        const response = await axios.get(apiUrl);
        return response.data
    }
    catch(error) {
        console.log("Error getting service:", error);
        throw error;
    }
};

export async function getBusiness(businessId: string) {
    try {
        const reponse = await axios.get(`${apiUrl}/${businessId}`);
        return reponse.data;
    }
    catch (error) {
        console.log("Error getting service:", error);
        throw error;
    }
}

export async function addServiceToBusiness(businessId: string, createdService: any) {
    try {
        const response = await axios.post(`${apiUrl}/${businessId}/service`, createdService);
        return response.data
    }
    catch (error) {
        console.log("Error getting service:", error);
        throw error;
    }
}

export async function getBusinessServices(businessId: string) {
    try {
        const response = await axios.get(`${apiUrl}/${businessId}/services`);
        return response.data
    }
    catch (error) {
        console.log("Error getting service:", error);
        throw error;
    }
}

export async function putBusiness(businessId: string, createdBusiness: any) {
    try {
        const response = await axios.put(`${apiUrl}/${businessId}`, createdBusiness);
        return response.data;
    }
    catch(error) {
        console.log("Error getting service:", error);
        throw error;
    }
}

export async function deleteBusiness(businessId: string){
    try {
        const response = await axios.delete(`${apiUrl}/${businessId}`);
        return response.data;
    }
    catch(error) {
        console.log("Error getting service:", error);
        throw error;
    }
}