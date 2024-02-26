import { Business } from "@/models/Business";
import { Client } from "@/models/Client";
import { Mezgeb } from "@/models/Mezgeb";
import axios from "axios";


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
        const response = await axios.post(`${url}`+ "/api/api/signup", business).then(
            (res:any)=> res.data);

        return response.data;
    }
    catch(e){
        throw e;
    }
}

export  async function signUpMezgeb(mezgeb: Mezgeb){

    try{
        const response = await axios.post("", mezgeb).then(
            (res:any)=>res.data
        );
        return response.data;
    }
    catch(e){
        throw e
    }

}

export  async function signIn(){

}

