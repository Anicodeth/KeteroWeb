import axios from "axios";
import { Business } from "@/models/Business";
import { Client } from "@/models/Client";
import { Login } from "@/models/Login";
import { Mezgeb } from "@/models/Mezgeb";

const apiUrl = "/api"; // Assuming this is your base API URL

export async function signUpClient(client: Client): Promise<any> {
    try {
        const response = await axios.post(`${apiUrl}/signup/client`, client);
        return response.data;
    } catch (e) {
        console.error("Error signing up client:", e);
        throw e;
    }
}

export async function signUpBusiness(business: Business): Promise<any> {
    try {
        const response = await axios.post(`${apiUrl}/signup/business`, business);
        return response.data;
    } catch (e) {
        console.error("Error signing up business:", e);
        throw e;
    }
}

export async function signUpMezgeb(mezgeb: Mezgeb): Promise<any> {
    try {
        const response = await axios.post(`${apiUrl}/signup/mezgeb`, mezgeb);
        return response.data;
    } catch (e) {
        console.error("Error signing up mezgeb:", e);
        throw e;
    }
}

export async function signIn(login: Login): Promise<any> {
    try {
        const response = await axios.post(`${apiUrl}/signin`, login);
        return response.data;
    } catch (e) {
        console.error("Error signing in:", e);
        throw e;
    }
}
