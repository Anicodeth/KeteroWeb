import { Client } from "@/models/Client";
import axios from "axios";
import { captureRejectionSymbol } from "events";


const url = "";

export  async function signUpClient(client: Client): Promise<any>{
    try{
    const response = axios.post(`${url}` + "/api/api/signup", client).then((res:any) => res.data); 
    return response.data;}
    catch(e){
        console.log(e);
        throw e;
    }
}

export  async function signUpBusiness(){

}

export  async function signUpMezgeb(){

}

export  async function signIn(){

}

