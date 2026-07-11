import { APIRequestContext } from "@playwright/test";
import User from "../tests/Models/User";

export default class UserApi {
    private request: APIRequestContext;
    constructor(request: APIRequestContext){
        this.request = request;
    }
   async register(user: User){
   return await this.request.post('https://todo.qacart.com/api/v1/users/register', {
        data: {
            firstName: user.getFirstName(),
            lastName: user.getLastName(),
            email: user.getEmail(),
            password: '10101010'
        }
    
    })
}}