import { faker } from "@faker-js/faker";
export default class User {

    private firstName: string;
    private lastName: string;
    private email: string;
    private password: string;
    private access_token!: string;
    private userID!: string;

    
    constructor() {
        this.firstName = faker.person.firstName(),
        this.lastName = faker.person.lastName(),
        this.email = faker.internet.email(),
        this.password = '10101010'
    }

    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    getAccessToken() {
        return this.access_token;
    }

    getUserID() {
        return this.userID;
    }

    setFirstName(firstName: string) {
        this.firstName = firstName;
    }

    setLastName(lastName: string) {
        this.lastName = lastName;
    }

    setEmail(email: string) {
        this.email = email;
    }

    setPassword(password: string) {
        this.password = password;
    }

    setAccessToken(access_token: string) {
        this.access_token = access_token;
    }

    setUserID(userID: string) {
        this.userID = userID;
    }

}