import { Business } from "@/models/Business";
import { Client } from "@/models/Client";
import axios from "axios";
import { captureRejectionSymbol } from "events";


const url = "";

export  async function signUpClient(client: Client): Promise<any>{
    try{
    const response = await axios.post(`${url}` + "/api/api/signup", client).then((res:any) => res.data); 
    return response.data;}
    catch(e){
        console.log(e);
        throw e;
    }
}

export  async function signUpBusiness(business: Business):Promise<any>{

    try{
        const response = await axios.post(`${url}`+ "/api/api/signup", business)
        return response.data;
    }
    catch(e){
        throw e;
    }

}

export  async function signUpMezgeb(){

    try{
        const response = await axios.
    }
    catch(e){
        throw e
    }

}

export  async function signIn(){

}

