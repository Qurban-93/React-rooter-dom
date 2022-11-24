import { HttpClient } from "../HttpClient";

class UsersService extends HttpClient{
    constructor(){
        super("https://6363b0578a3337d9a2e48d82.mockapi.io/userscontent");
    }

    getAllUsers(){
        return this.get("users");
    }

    addNewUser(body){
        return this.post("users",body)
    }

    editUser(id,body){
        return this.put("users",body,id)
    }
}

export const usersService = new UsersService();