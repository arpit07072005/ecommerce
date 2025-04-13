import config from "../config/config.js";
import { Client,Account,ID } from "appwrite";

export class AuthService{
    clint= new Client();
    account;
    constructor(){
        this.clint
        .setEndpoint(config.appwriteurl)
.setProject(config.appwriteprojectid);
this.account = new Account(this.clint);
    }

    async createAccount({email,password,name}){
        try{
           const useraccount= await this.account.create(ID.unique(),email,password,name);
           if(useraccount){
            //call another method
return this.login({email,password});
           }
           else{
            return useraccount;
           }
        }catch(error){
            throw error;
        }
    }
    async login({email,password}){
        try{
   return await this.account.createEmailPasswordSession(email,password);
        }catch(error){
            throw error;
        }
    }
    async getcurrentuser(){
        try{
        return await this.account.get();
        }catch(error){
            console.log(error);
        }
    }
    async logout(){
        try{
await this.account.deleteSessions();
        }catch(error){
            console.log(error);
        }
    }
}

const authService = new AuthService();

export default authService