import {APIRequestContext} from '@playwright/test';
import User from '../tests/Models/User';
export default class TodoAPI {
private request: APIRequestContext;

constructor(request: APIRequestContext){
        this.request = request;
    }
    async todo( user: User){
         await this.request.post('https://todo.qacart.com/api/v1/tasks', {
        data: {
            isCompleted: false,
            item: 'Learn Playwright'
        },
        headers: {
            Authorization: `Bearer ${user.getAccessToken()}`
        }
     })
}}


   