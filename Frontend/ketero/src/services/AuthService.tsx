import axios from "axios";
import { Business } from "@/models/Business";
import { Client } from "@/models/Client";
import { Login } from "@/models/Login";
import { Mezgeb } from "@/models/Mezgeb";

const apiUrl = "https://ketero-web-dmow.vercel.app/api/v1/auth"; // Assuming this is your base API URL

export async function signUpClient(client: Client): Promise<any> {
    try {
        const response = await axios.post(`${apiUrl}/client`, client);
        return response.data;
    } catch (e) {
        console.error("Error signing up client:", e);
        throw e;
    }
}

export async function signUpBusiness(business: Business): Promise<any> {
    try {
        const response = await axios.post(`${apiUrl}/business`, business);
        return response.data;
    } catch (e) {
        console.error("Error signing up business:", e);
        throw e;
    }
}

export async function signUpMezgeb(mezgeb: Mezgeb): Promise<any> {
    try {
        const response = await axios.post(`${apiUrl}/mezgebu`, mezgeb);
        return response.data;
    } catch (e) {
        console.error("Error signing up mezgeb:", e);
        throw e;
    }
}

export async function signIn(login: Login): Promise<any> {
    try {
        const response = await axios.post(`${apiUrl}/login`, login);
        
        const data = response.data;

        sessionStorage.setItem("user", data.user);
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("role", data.role);

        return data.role;
    } catch (e) {
        console.error("Error signing in:", e);
        throw e;
    }
}
