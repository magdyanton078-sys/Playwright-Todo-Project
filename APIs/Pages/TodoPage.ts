import { Page } from "@playwright/test";
export default class TodoPage{
private page:Page;

constructor (page:Page){
    
    this.page=page;
}

private get WelcomeMessage(){
    return '[data-testid="welcome"]'}

private get Todoitem(){
    return '[data-testid="todo-item"]';

  

}
private get DeleteButton(){
    return '[data-testid="delete"]'
}

private get todomessage(){
    return '[data-testid="no-todos"]'
}



getwelcomeMessage()
{
 //return this.page.locator ('[data-testid="welcome"]')
return this.page.locator (this.WelcomeMessage)
}
getTodoItem(index :number){
   return  this.page.locator(this.Todoitem).nth(index).innerText();
    
}

getDeleteButton(index:number){
     return this.page.locator('[data-testid="delete"]').nth(index).click();
}

gettodomessage (){
     return this.page.locator('[data-testid="no-todos"]')
}



  async Load(){
       await this.page.goto("https://todo.qacart.com/todo"); 
    }
}