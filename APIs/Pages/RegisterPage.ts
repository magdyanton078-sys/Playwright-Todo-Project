import { Faker } from "@faker-js/faker";
import { Page } from "@playwright/test"
import User from "../../tests/Models/User";
import UserApi from "../UserApi";
import {APIRequestContext,BrowserContext} from "@playwright/test"
import config from '../../playwright.config';
export default class registerPage{
    private page :Page;
    private request? : APIRequestContext;
    private context? : BrowserContext;
    //constructor 
    constructor (page :Page, request? : APIRequestContext,context? : BrowserContext){
        this.page=page;
        this.request=request;
        this.context=context;
    }
    //Elements

    private get firstNameInput (){
        return '[data-testid="first-name"]'
    }
        private get lastNameInput (){
        return '[data-testid="last-name"]'
    }
          private get Email (){
        return '[data-testid="email"]'
    }
             private get Password(){
        return '[data-testid="password"]'
    }
              private get ConfirmPassword(){
        return '[data-testid="confirm-password"]'
    }
                 private get submitButton(){
        return '[data-testid="submit"]'
    }
    async load(){
        await this.page.goto('https://todo.qacart.com/signup');
    }
    
    async register(faker :Faker){
         await this.page.locator(this.firstNameInput).fill(faker.person.firstName());
    await this.page.locator(this.lastNameInput).fill(faker.person.lastName());
    await this.page.locator(this.Email).fill(faker.internet.email());
    await this.page.locator(this.Password).fill('10101010');
    await this.page.locator(this.ConfirmPassword).fill('10101010');
    await this.page.locator(this.submitButton).click();

    }

   async registerUsingTheAPI(user: User) {
    const userApi = new UserApi(this.request!);

    const response = await userApi.register(user);

    const body = await response.json();

    const accessToken = body.access_token;
    const userID = body.userID;
    const firstName = body.firstName;

    user.setAccessToken(accessToken);

    await this.context!.addCookies([
        {
            name: 'access_token',
            value: accessToken,
            url: config.use?.baseURL,
        },
        {
            name: 'userID',
            value: userID,
            url: config.use?.baseURL,
        },
        {
            name: 'firstName',
            value: firstName,
            url: config.use?.baseURL,
        }
    ]);
}

    //seps or methods

}