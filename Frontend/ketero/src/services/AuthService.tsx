import { Client } from "@/models/Client";
import axios from "axios";


const url = "";

export  async function signUpClient(client: Client){
    axios.post(`${url}` + "/api/api/signup", client).then((res:any) => res.data); 
}

export  async function signUpBusiness(){

}

export  async function signUpMezgeb(){

}

export  async function signIn(){

}

