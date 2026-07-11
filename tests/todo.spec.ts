import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import User from './Models/User';
import UserApi from '../APIs/UserApi';
import TodoAPI from '../APIs/TodoAPI';
import registerPage from '../APIs/Pages/RegisterPage';
import TodoPage from '../APIs/Pages/TodoPage';
import NewTodoPage from '../APIs/Pages/NewTodoPage';

test('Should be able to add a new todo', async ({ page, request, context }) => {
  // Create user
  const user = new User();
  /*  faker.person.firstName(),
    faker.person.lastName(),
    faker.internet.email(),
    '10101010'*/
  

  // Register using the API
  const registerpage = new registerPage(page, request, context);
  await registerpage.registerUsingTheAPI(user);

  const newtodopage=new NewTodoPage(page,request)
  await newtodopage.addNewTaskUsingAPI(user)

  const todopage1=new TodoPage(page);
   await todopage1.Load();
  todopage1.getDeleteButton(0);
  const noTodoMessage=todopage1.gettodomessage();
  await expect (noTodoMessage).toBeVisible();

}); // <-- كان ناقص

test('Should be able to delete a todo', async ({ page }) => {
   const registerpage = new registerPage(page);
  await registerpage.load();
  await registerpage.register(faker);

  const todopage = new TodoPage(page);

  const welcomeMessage = todopage.getwelcomeMessage();
  await expect(welcomeMessage).toBeVisible();

const newTodoPage= new NewTodoPage(page);
await newTodoPage.load;
await page.locator('[data-testid="add"]').click();
await newTodoPage.GetNewTodoInput("Playwright");
await  newTodoPage.GetSubmitButton();
const todopage1=new TodoPage(page)
const ItemText= await todopage1.getTodoItem(0)
await expect (ItemText).toEqual("Playwright")

await page.locator('[data-testid="delete"]').click();

  await expect(page.locator('[data-testid="no-todos"]')).toHaveText(
    'No Available Todos'
  );
});