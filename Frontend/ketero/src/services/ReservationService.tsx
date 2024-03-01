import axios from "axios";
import { Reservation } from "../models/Reservation";

const apiUrl = "https://ketero-web-dmow.vercel.app/api/v1/reservations"
export async function createReservation( reservation: Reservation):Promise<any>{

    try{
        const response = axios.post(apiUrl, reservation);
        return response.data;
    }
    catch(e){
        throw e;
    }
}