import axios from "axios";
import { useMutation } from "react-query";


const url = "";

export  async function signUpClient(formData: FormData){
    axios.post(`${url}` + "/api/api/signup");


}

export  async function signUpBusiness(){

}

export  async function signUpMezgeb(){

}

export  async function signIn(){

}
