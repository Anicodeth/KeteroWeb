import axios from "axios";
import { Reservation } from "../models/Reservation";

const apiUrl = "https://ketero-web-dmow.vercel.app/api/v1/reservations"
export async function createReservation( reservation: Reservation):Promise<any>{
    try{
        const response = await axios.post(apiUrl, reservation);
        return response.data;
    }
    catch(e){
        throw e;
    }
}

export async function getReservation( id: string):Promise<any>{
    try{
        const response = await axios.get(`${apiUrl}/${id}`);
        return response.data;
    }
    catch(e){
        throw e;
    }
}

export async function getReservations():Promise<any>{
    try{
        const response = await axios.get(apiUrl);
        return response.data;
    }
    catch(e){
        throw e;
    }
}

export async function getPendingData(id:string):Promise<any>{
    try{
        const response = await axios.get(`${apiUrl}/pending/${id}`);
        return response.data.data;
    }
    catch(e){
        throw e;
    }
}