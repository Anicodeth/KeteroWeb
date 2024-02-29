import axios from "axios";
import {CreateService, Service} from "@model/Service"

const apiUrl = "https://ketero-web-dmow.vercel.app/api/v1/service";

export async function getService(id: string):Promise<any> {
    try {
        const response = await axios.get(`${apiUrl}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error getting service:", error);
        throw error;
    }
}

export async function getServices() :Promise<any> {
     
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error("Error getting services:", error);
        throw error;
    }
}

export async function createService(businessid:string, serviceData: CreateService):Promise<Service>  {
    try {
        const response = await axios.post(`https://ketero-web-dmow.vercel.app/api/v1/business/${businessid}/service`, serviceData);
        return response.data;
    } catch (error) {
        console.error("Error creating service:", error);
        throw error;
    }
}
