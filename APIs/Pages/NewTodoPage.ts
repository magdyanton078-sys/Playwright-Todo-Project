import { APIRequestContext, Page } from "@playwright/test"
import User from "../../tests/Models/User";
import TodoAPI from "../TodoAPI";

export default class NewTodoPage{
    private page:Page;
    request? : APIRequestContext;
    constructor(page:Page ,request? : APIRequestContext){
        this.page=page
        this.request=request;
    }
 private get NewTodoInput(){
    return '[data-testid="new-todo"]'

 }

 private get submitButon(){
    return '[data-testid="submit-newTask"]'
 }

async load(){
await this.page.goto("https://todo.qacart.com/todo/new")
}

async GetNewTodoInput(todo:string){
    return  await  this.page.locator(this.NewTodoInput).fill(todo);
}

async GetSubmitButton(){
 
  await this.page.locator(this.submitButon).click();

}

async addNewTaskUsingAPI(user: User){
    await new TodoAPI(this.request!).todo(user)

}

}