import config from "../config/config.js"
import { Client,ID,Databases,Storage,Query } from "appwrite"

export class Service{
    client = new Client();
    databases;
    bucket;
constructor(){
    this.Client
    .setEndpoint(config.appwriteurl)
.setProject(config.appwriteprojectid);

this.databases = new Databases(this.client);
this.bucket = new Storage(this.clint);
}
async createpost({title ,content,slug , featuredimage,status,userid}){
    try{
return await this.databases.createDocument(config.appwritedatabaseid,config.appwritecollectionid,slug,{
 title,status,userid ,featuredimage,content,
})
    }catch(error){
        console.log(error);
    }
}
async updatepost(slug,{title,content, featuredimage,status,userid}){
try{
return await this.databases.updateDocument(config.appwritedatabaseid,config.appwritecollectionid,slug,{
    title,status,userid ,featuredimage,slug,content,
})
}catch(error){
    console.log(error);
}
}
async deletepost(slug){
    try{
 await this.databases.deleteDocument(config.appwritedatabaseid,config.appwritecollectionid,slug
    )
    return true;
    }catch(error){
        console.log(error);
        return false;
    }
    }
    async getpost(slug){
        try{
    return await this.databases.getDocument(config.appwritedatabaseid,config.appwritecollectionid,slug
        )
        }catch(error){
            console.log(error);
            return false;
        }
        }
        async getposts(quarries=[Query.equal("status","active")]){
            try{
        return await this.databases.listDocuments(config.appwritedatabaseid,config.appwritecollectionid,quarries
            )
            }catch(error){
                console.log(error);
                return false;
            }
            }


            async uploadfile(file){
                try{
            return await this.bucket.createFile(config.appwritebucketid,ID.unique(),file
                )
                }catch(error){
                    console.log(error);
                    return false;
                }
                }
                async deletefile(fileid){
                    try{
                 await this.bucket.deleteFile(config.appwritebucketid,fileid
                    )
                    return true;
                    }catch(error){
                        console.log(error);
                        return false;
                    }
                    }
}
const service = new Service()
export default service