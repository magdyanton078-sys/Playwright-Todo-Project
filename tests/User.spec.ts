import {test, expect} from '@playwright/test';
import{faker} from '@faker-js/faker';
import User from './Models/User';

test('Should be able to register to todo website', async ({page,request}) => {

    const user = new User();
   const response = await request.post('https://todo.qacart.com/api/v1/users/register', {
        data: {
            firstName: user.getFirstName(),
            lastName: user.getLastName(),
            email: user.getEmail(),
            password: '10101010'
        }
    });

console.log(await response.json());

  /*  await page.goto('https://todo.qacart.com/todo');
    await expect(page).toHaveURL('https://todo.qacart.com/todo');
    await expect(page).toHaveTitle('QAcart Todo App - Todos page');
   // const welcomemessage = await page.locator('[data-testid="welcome"]');
    //await expect(welcomemessage).toHaveText('Good afternoon ' + faker.person.firstName());*/
})